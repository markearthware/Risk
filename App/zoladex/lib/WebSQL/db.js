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
        var tables = ['JobRoles','Groups','HealthcareProfessionals', 'Appointments', 'AppointmentTypes', 'PatientSymptoms', 'Practices', 'Symptoms', 'PsaLevels', 'sqlite_sequence'];

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
            tx.executeSql('CREATE TABLE IF NOT EXISTS Practices (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, Postcode, Street, Town, County, Telephone, Email)', [], function (tx, result) {
            });
        });


        checkTableExists("Groups", function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Groups (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, ContactName, Postcode, Street, Town, County, Telephone, Email)', [], function (tx, result) {
            });
        });

        checkTableExists("HealthcareProfessionals", function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS HealthcareProfessionals (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,PrimaryPracticeId, SecondaryPracticeId, Title, FirstName, Surname, Telephone, Email, JobRole INTEGER, Notes)', [], function (tx, result) {
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
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Blood test")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Hormone injection")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Out-patients")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Radiotherapy")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Chemotherapy")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("GP")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Practice Nurse")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("CT scan")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("MRI scan")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Ultrasound scan")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Flexible Cystoscopy")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Bone scan")');
                tx.executeSql('INSERT INTO AppointmentTypes (Name) VALUES ("Trans Rectal Ultrasound (TRUS)")');
            });
        });

        checkTableExists("JobRoles", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS JobRoles (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("GP")');
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("Practice Nurse")');
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("Urologist")');
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("Urology Secretary")');
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("Clinical Nurse Specialist")');
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("Oncologist")');
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("Oncology Secretary")');
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("Radiotherapist")');
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("Chemotherapy Nurse")');
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("Key Worker")');
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("District Nurse")');
                tx.executeSql('INSERT INTO JobRoles (Name) VALUES ("Continence Advisor")');
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
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Bone Pain", 1)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Pain in your loins, hips or lower back", 1)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Blood in urine", 1)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Blood in semen", 1)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Unable to pass water", 1)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Pain in legs and thighs (Sciatica)", 1)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Loss of feeling or movement in your legs", 1)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Weight loss", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Tiredness", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Problems getting an erection (impotence)", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Loss of sex drive", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Sweating", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Hot flushes", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Difficulty or pain when peeing", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Having to rush to the toilet to pass water", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Frequent visits to toilet especially at night", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Starting, stopping or dribbling when peeing", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Leaking urine (incontinence)", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("A feeling of not having emptied bladder properly", 0)');
                tx.executeSql('INSERT INTO Symptoms (Description, WarningSign) VALUES ("Pain when you ejaculate", 0)');

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
