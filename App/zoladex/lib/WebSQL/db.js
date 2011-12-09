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
        var tables = ['HealthcareProfessionals', 'Appointments', 'HealthcareLocations', 'AppointmentTypes', 'PatientSymptoms', 'Practices', 'Symptoms'];
        db.transaction(function (tx) {
            $.each(tables, function (index, value) {
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

                    deferred.resolve();
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
                    if (context && context.model) {
                        // create REAL models from the data
                        deferred.resolve(context.model(result.rows.item(0)));
                    }
                    else {
                        deferred.resolve(result.rows.item(0));
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

    function createId() {
        var date = new Date();
        return date.getTime();
    }

    function logError(error, sql) {
        steal.dev.log('Transaction with the device database failed - ' + error.message + '\nOffending SQL:\n"' + sql + "'");
    }

    function initTables() {

        checkTableExists("Practices", function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Practices (id unique, Name)', [], function (tx, result) {
                tx.executeSql('INSERT INTO Practices (id, Name) VALUES (?,?)', [1, 'QE2']);
            });
        });

        checkTableExists("HealthcareProfessionals", function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS HealthcareProfessionals (id unique, Title, FirstName, Surname, PracticeName, Telephone, Email, Street, Town, County, Postcode)', [], function (tx, result) {
                tx.executeSql('INSERT INTO HealthcareProfessionals (id, Title, FirstName, Surname, PracticeName, Telephone, Email, Street, Town, County, Postcode) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [createId(), 'Dr', 'Mark', 'Short', '1', '09123 674738', 'SarahWestiminster@nhs.co.uk', 'Windy Lane', 'Letchworth', 'Herts', 'AL8 7UY']);
            });
        });

        checkTableExists("Appointments", function (tx) {
            // create table for storing Practices/Hospitals
            tx.executeSql('CREATE TABLE IF NOT EXISTS Appointments (id unique, StartDate INTEGER, StartTime, TypeId INTEGER, HcpId INTEGER, HealthcareLocationId INTEGER, AlertsEnabled INTEGER)'); //TODO add lots more fields later
        });

        checkTableExists("AppointmentTypes", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AppointmentTypes (id unique, Name)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO AppointmentTypes (id, Name) VALUES (1,"PSA test")');
                tx.executeSql('INSERT INTO AppointmentTypes (id, Name) VALUES (2,"Follow up")');
                tx.executeSql('INSERT INTO AppointmentTypes (id, Name) VALUES (3,"Zoladex injection")');
                tx.executeSql('INSERT INTO AppointmentTypes (id, Name) VALUES (4,"Surgery")');
                tx.executeSql('INSERT INTO AppointmentTypes (id, Name) VALUES (5,"Chemotherapy")');
                tx.executeSql('INSERT INTO AppointmentTypes (id, Name) VALUES (6,"Radiotherapy")');
            });
        });

        checkTableExists("PatientSymptoms", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS PatientSymptoms (id unique, Date INTEGER, Time, SymptomId INTEGER)');

        });

        checkTableExists("Symptoms", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Symptoms (id unique, Description, WarningSign INTEGER)', [], function (tx, result) {

                // populate
                tx.executeSql('INSERT INTO Symptoms (id, Description, WarningSign) VALUES (1, "Pain in lower Back", 1)');
                tx.executeSql('INSERT INTO Symptoms (id, Description, WarningSign) VALUES (2, "Vomiting", 1)');
                tx.executeSql('INSERT INTO Symptoms (id, Description, WarningSign) VALUES (3, "Tiredness", 0)');
                tx.executeSql('INSERT INTO Symptoms (id, Description, WarningSign) VALUES (4, "Dizziness", 1)');

            });
        });

        checkTableExists("Questions", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Questions (id unique, Question, CategoryId INTEGER)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO Questions (id, Question, CategoryId) VALUES (1, "Why is the sky blue?", 0)');
                tx.executeSql('INSERT INTO Questions (id, Question, CategoryId) VALUES (2, "How big is the moon?", 1)');
            });
        });
        
        checkTableExists("Categories", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Categories (Category , CategoryId INTEGER)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO Categories (Category, CategoryId) VALUES ("Oncologist", 0)');
                tx.executeSql('INSERT INTO Categories (Category, CategoryId) VALUES ("Surgeon", 1)');
                tx.executeSql('INSERT INTO Categories (Category, CategoryId) VALUES ("GP", 2)');
                tx.executeSql('INSERT INTO Categories (Category, CategoryId) VALUES ("Hospital Nurse", 3)');
                tx.executeSql('INSERT INTO Categories (Category, CategoryId) VALUES ("Practice Nurse", 4)');
            });
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
        createId: createId,
        dropTables: goDropTables
    };
})();
