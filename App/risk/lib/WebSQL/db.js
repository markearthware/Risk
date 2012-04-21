var localStorageDB = (function () {
    var db = null,
    loadedCallback = null;

    function initDb(callback) {
        loadedCallback = callback;

        try {
            if (window.openDatabase) {
                db = openDb();
                // check if first run and we need to initialise tables
                initTables();
                
            } else {
                steal.dev.log('Web Databases not supported');
            }
        } catch (e) {
            steal.dev.log('error occurred during DB init, Web Database supported?');
        }
    }

    function goDropTables() {
        steal.dev.log("dropping tables");
        var tables = ['sqlite_sequence','Hazards','Whos','Hows','Assessments','AssessmentWhos','AssessmentsHows','Tasks'];

        $.each(tables, function (index, value) {
            db.transaction(function (tx) {
                steal.dev.log('DROP TABLE ' + tables[index]);
                tx.executeSql('DROP TABLE ' + tables[index]);
            });
        });
    }

    function executeSql(sql, params, success, error) {
        db = openDb();
        var deferred = $.Deferred();
        db.transaction(function (tx) {
            tx.executeSql(sql, params,
                function (tx1, result) {
                    steal.dev.log('sql: ' + sql + ' succeeded');
                    steal.dev.log(result);
                    var id = 0;
                    try {
                        id = result.insertId;
                    }
                    catch (err) {
                        //ignore
                    }

                    if (result && id > 0) {
                        deferred.resolve(result.insertId);
                    }
                    else {
                        deferred.resolve();
                    }
                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(error);
                }
            );
        });
        if (success) deferred.then(success);
        if (error) deferred.fail(error);
        return deferred.promise();
    }

    function getRows(sql, context, success, error) {
        db = openDb();
        var deferred = $.Deferred();
        db.transaction(function (tx) {
            tx.executeSql(sql, [],
                function (tx1, result) {
                    steal.dev.log('select succeeded');
                    steal.dev.log(result);

                    // rows come back as SQLResultSet so turn them into a real array of the objects instead
                    if (context && context.models) {
                        // create REAL models from the data
                        deferred.resolve(context.models(ArrayFromSQLResultSet(result.rows)));
                    }
                    else {
                        deferred.resolve(ArrayFromSQLResultSet(result.rows));
                    }
                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(error);
                }
        );
        });
        if (success) deferred.then(success);
        if (error) deferred.fail(error);
        return deferred.promise();
    }

    function getSingleRow(sql, context, success, error) {
        db = openDb();
        var deferred = $.Deferred();
        db.transaction(function (tx) {
            tx.executeSql(sql, [],
                function (tx1, result) {
                    steal.dev.log('select succeeded');
                    steal.dev.log(result);
                    if (result.rows.length > 0) {
                        if (context && context.model) {
                            // create REAL models from the data
                            deferred.resolve(context.model(result.rows.item(0)));
                        }
                        else {
                            deferred.resolve(result.rows.item(0));
                        }
                    }
                    else {
                        deferred.resolve();
                    }

                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(error);
                }
        );
        });
        if (success) deferred.then(success);
        if (error) deferred.fail(error);
        return deferred.promise();
    }

    function openDb() {
        return openDatabase("riskDB", "1.0", "Risk Assessment App", 200000);
    }

    function ArrayFromSQLResultSet(rs) {
        var res = [];
        $.each(rs, function (index, value) {
            res.push(rs.item(index));
        });
        return res;
    }

    function logError(error, sql) {
        steal.dev.log('Transaction with the device database failed - ' + error.message + '\nOffending SQL:\n"' + sql + "'");
    }

    function initTables() {
        steal.dev.log("creating tables");

        checkTableExists("Hazards", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Hazards (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Slip/Trip/Fall")');
                tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Falling Object")');
            });
        });

        checkTableExists("Whos", function(tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Whos (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name)', [], function(tx, result) {
                // populate
                tx.executeSql('INSERT INTO Whos (Name) VALUES ("All")');
                tx.executeSql('INSERT INTO Whos (Name) VALUES ("Working Party")');
                tx.executeSql('INSERT INTO Whos (Name) VALUES ("Others affected by hazard")');
                tx.executeSql('INSERT INTO Whos (Name) VALUES ("Lone worker")');
            });
        });

        checkTableExists("Hows", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Hows (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, HazardId)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over debris on walkways",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over fixed installations",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Dropping of items of equipment being removed",2)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling objects creating additional hazards",2)');
            });
        });

        checkTableExists("Assessments", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Assessments (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, TaskId INTEGER, )');
        });

        checkTableExists("AssessmentHows", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AssessmentHows (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, AssessmentId INTEGER, HowId INTEGER, )');
        });

        checkTableExists("AssessmentWhos", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AssessmentWhos (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, AssessmentId INTEGER, WhoId INTEGER, )');
        });

        checkTableExists("Tasks", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Tasks (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, Sent BIT, DateStarted INTEGER, DateFinished INTEGER)');
        });
    }

    // checks if a table exists in the database and if not calls the callback
    function checkTableExists(tablename, doesntexistcallback) {
        if (db) {
            db.transaction(function (tx) {
                tx.executeSql('select DISTINCT tbl_name from sqlite_master where tbl_name = "' + tablename + '"', [], function (tx, result) {
                    if (!result.rows.length) {
                        doesntexistcallback(tx);
                    }
                });
            });
        }
    }

    return {
        init: initDb,
        getRows: getRows,
        getSingleRow: getSingleRow,
        executeSql: executeSql,
        dropTables: goDropTables
    };
})();
