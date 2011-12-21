var localStorageDB = (function () {

    var dropTables = false; //todo remove before production
    var db = null,
    loadedCallback = null;

    function initDb(callback) {
        loadedCallback = callback;
        try {
            if (window.openDatabase) {
                db = openDb();
                // check if first run and we need to initialise tables
                if (dropTables) {
                    goDropTables();
                }
                else {
                    initTables();
                }
            } else {
                steal.dev.log('Web Databases not supported');
            }
        } catch (e) {
            steal.dev.log('error occurred during DB init, Web Database supported?');
        }
    }

    function goDropTables() {
        steal.dev.log("dropping tables");
        var tables = ['HealthcareProfessionals', 'Appointments', 'HealthcareLocations', 'AppointmentTypes', 'PatientSymptoms', 'Practices', 'Symptoms', 'PsaLevels', 'Categories', 'MyQuestions', 'Questions', 'sqlite_sequence'];

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
        return openDatabase("zoladexDB", "1.0", "Zoladex Mobile App", 200000);
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

        checkTableExists("Practices", function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Practices (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, Postcode)', [], function (tx, result) {
                tx.executeSql('INSERT INTO Practices (Name, Postcode) VALUES (?,?)', ['QE2', 'AL8 7QX']);
            });
        });

        checkTableExists("HealthcareProfessionals", function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS HealthcareProfessionals (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Title, FirstName, Surname, PracticeName, Telephone, Email, Street, Town, County, Postcode, Notes)', [], function (tx, result) {
                tx.executeSql('INSERT INTO HealthcareProfessionals (Title, FirstName, Surname, PracticeName, Telephone, Email, Street, Town, County, Postcode, Notes) VALUES (?,?,?,?,?,?,?,?,?,?,?)', ['Dr', 'Sarah', 'Westminster', '1', '09123 674738', 'SarahWestminster@nhs.co.uk', 'Oak Lane', 'Letchworth', 'Herts', 'AL8 7UY', 'On call hours: 6am - 11pm everyday']);
            });
        });

        checkTableExists("Appointments", function (tx) {
            // create table for storing Practices/Hospitals
            tx.executeSql('CREATE TABLE IF NOT EXISTS Appointments (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, StartDateTime INTEGER, TypeId INTEGER, HcpId INTEGER, HealthcareLocationId INTEGER, AlertsEnabled INTEGER)'); //TODO add lots more fields later
        });

        checkTableExists("AppointmentTypes", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AppointmentTypes (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("PSA test")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Follow up")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Zoladex injection")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Surgery")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Chemotherapy")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Radiotherapy")');
            });
        });

        checkTableExists("PatientSymptoms", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS PatientSymptoms (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, DateTime INTEGER, SymptomId INTEGER)');

        });

        checkTableExists("Symptoms", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Symptoms (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Description, WarningSign INTEGER)', [], function (tx, result) {

                // populate
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Pain in lower Back", 1)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Vomiting", 1)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Tiredness", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Dizziness", 1)');

            });
        });

        checkTableExists("Questions", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Questions (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Question, CategoryId INTEGER)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO Questions (Question, CategoryId) VALUES ("Why is the sky blue?", 0)');
                tx.executeSql('INSERT INTO Questions (Question, CategoryId) VALUES ("Why is the sky pink?", 0)');
                tx.executeSql('INSERT INTO Questions (Question, CategoryId) VALUES ("How big is the moon?", 1)');
            });
        });

        checkTableExists("MyQuestions", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS MyQuestions (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Question, HcpId INTEGER)', [], function (tx, result) {
            });
        });

        checkTableExists("Categories", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Categories (Category , CategoryId INTEGER)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO Categories (Category, CategoryId) VALUES ("Cat 1", 0)');
                tx.executeSql('INSERT INTO Categories (Category, CategoryId) VALUES ("Cat 2", 1)');
                tx.executeSql('INSERT INTO Categories (Category, CategoryId) VALUES ("Cat 3", 2)');
                tx.executeSql('INSERT INTO Categories (Category, CategoryId) VALUES ("Cat 4", 3)');
                tx.executeSql('INSERT INTO Categories (Category, CategoryId) VALUES ("Cat 5", 4)');
            });
        });

        checkTableExists('PsaLevels', function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS PsaLevels (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Date INTEGER, PsaLevel DOUBLE)');
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
