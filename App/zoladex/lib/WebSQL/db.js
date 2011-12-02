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

        var tables = ['HealthcareProfessionals', 'Appointments', 'HealthcareLocations', 'AppointmentTypes', 'PatientSymptoms', 'Practices', 'Symptoms'];
        db.transaction(function (tx) {
            $.each(tables, function (index, value) {
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
    function addHcp(hcp, success, error) {

        db = openDb();

        var ticks = createId();

        var deferred = $.Deferred();

        db.transaction(function (tx) {

            var sql = "INSERT INTO HealthcareProfessionals (Id, Title, FirstName, Surname, PracticeName, Telephone, Email, Street, Town, County, Postcode) VALUES (" + ticks + ", '" + hcp.title + "','" + hcp.firstname + "', '" + hcp.surname + "', '" + hcp.practicename + "', '" + hcp.tel + "', '" + hcp.email + "', '" + hcp.street + "', '" + hcp.town + "', '" + hcp.county + "', '" + hcp.postcode + "')";

            steal.dev.log(sql);

            tx.executeSql(
                sql,
                [],
                function () {
                    steal.dev.log("Insert succeeded!");
                    deferred.resolve(ticks);
                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(0);
                }
            );


            return deferred.promise();
        });

        // wire up callbacks to defered
        deferred.then(success);
        deferred.fail(error);
    }

    function deleteHcp(id, success, error) {

        var deferred = $.Deferred();

        db.transaction(function (tx) {

            var sql = "DELETE FROM HealthcareProfessionals WHERE Id= " + id;

            tx.executeSql(
                sql,
                [],
                function () {
                    steal.dev.log("Delete succeeded!");
                    deferred.resolve(true);
                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(false);
                }
            );
        });

        // wire up callbacks to defered
        deferred.then(success);
        deferred.fail(error);
    }

    function updateHcp(hcp, success, error) {

        var deferred = $.Deferred();

        db.transaction(function (tx) {

            var sql = "UPDATE HealthcareProfessionals SET Title= '" + hcp.Title + "', FirstName='" + hcp.FirstName + "', Surname='" + hcp.Surname + "', PracticeName='" + hcp.PracticeName + "', Telephone = '" + hcp.Telephone + "', Email = '" + hcp.Email + "', Street='" + hcp.Street + "', Town='" + hcp.Town + "', County = '" + hcp.County + "', Postcode = '" + hcp.Postcode + "' WHERE Id=" + hcp.id;

            tx.executeSql(
                sql,
                [],
                function () {
                    steal.dev.log("Update succeeded!");
                    deferred.resolve(true);
                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(false);
                }
            );
        });

        // wire up callbacks to defered
        deferred.then(success);
        deferred.fail(error);
    }

    function addAppointment(apt, success, error) {

        db = openDb();

        var ticks = createId();

        var deferred = $.Deferred();

        db.transaction(function (tx) {
            var sql = "INSERT INTO Appointments (Id,  StartDate, StartTime, TypeId, HcpId, HealthcareLocationId, AlertsEnabled) VALUES (" + ticks + ", '" + apt.StartDate + "','" + apt.StartTime + "', " + apt.TypeId + ", " + apt.HcpId + ", " + apt.HealthcareLocationId + ", " + apt.AlertsEnabled + ")";

            steal.dev.log(sql);

            tx.executeSql(
                sql,
                [],
                function () {
                    steal.dev.log("Insert succeeded!");
                    deferred.resolve(ticks);
                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(0);
                }
            );


            return deferred.promise();
        });

        // wire up callbacks to defered
        deferred.then(success);
        deferred.fail(error);
    }

    function deleteAppointment(id, success, error) {

        var deferred = $.Deferred();

        db.transaction(function (tx) {

            var sql = "DELETE FROM Appointments WHERE Id= " + id;

            tx.executeSql(
                sql,
                [],
                function () {
                    steal.dev.log("Delete succeeded!");
                    deferred.resolve(true);
                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(false);
                }
            );
        });

        // wire up callbacks to defered
        deferred.then(success);
        deferred.fail(error);
    }

    function updateAppointment(apt, success, error) {

        var deferred = $.Deferred();

        db.transaction(function (tx) {

            var sql = "UPDATE Appointments SET StartDate = '" + apt.StartDate + "', StartTime = '" + apt.StartDate + "', TypeId = " + apt.TypeId + ", HcpId = " + apt.HcpId + ", HealthcareLocationId = " + apt.HealthcareLocationId + ", AlertsEnabled = " + apt.AlertsEnabled + " WHERE Id = " + apt.Id;

            tx.executeSql(
                sql,
                [],
                function () {
                    steal.dev.log("Update succeeded!");
                    deferred.resolve(true);
                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(false);
                }
            );
        });

        // wire up callbacks to defered
        deferred.then(success);
        deferred.fail(error);
    }

    function initTables() {

        checkTableExists("Practices", function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Practices (id unique, Name)', [], function (tx, result) {
                tx.executeSql('INSERT INTO Practices (id, Name) VALUES (?,?)', [createId(), 'QE2']);
            });
        });
        
        checkTableExists("HealthcareProfessionals", function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS HealthcareProfessionals (Id unique, Title, FirstName, Surname, PracticeName, Telephone, Email, Street, Town, County, Postcode)', [], function (tx, result) {
                tx.executeSql('INSERT INTO HealthcareProfessionals (Id, Title, FirstName, Surname, PracticeName, Telephone, Email, Street, Town, County, Postcode) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [createId(), 'Dr', 'Mark', 'Short', 'Techno House Surgery', '09123 674738', 'SarahWestiminster@nhs.co.uk', 'Windy Lane', 'Letchworth', 'Herts', 'AL8 7UY']);
            });
        });

        // check if tables exist otherwise create and fill
        checkTableExists("HealthcareLocations", function (tx) {
            // create table for storing Practices/Hospitals
            tx.executeSql('CREATE TABLE IF NOT EXISTS HealthcareLocations (Id unique, Name)'); //TODO add lots more fields later
        });

        checkTableExists("Appointments", function (tx) {
            // create table for storing Practices/Hospitals
            tx.executeSql('CREATE TABLE IF NOT EXISTS Appointments (Id unique, StartDate, StartTime, TypeId INTEGER, HcpId INTEGER, HealthcareLocationId INTEGER, AlertsEnabled INTEGER)'); //TODO add lots more fields later
        });

        checkTableExists("AppointmentTypes", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AppointmentTypes (Id unique, Name)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO AppointmentTypes (Id, Name) VALUES (1,"PSA test")');
                tx.executeSql('INSERT INTO AppointmentTypes (Id, Name) VALUES (2,"Follow up")');
                tx.executeSql('INSERT INTO AppointmentTypes (Id, Name) VALUES (3,"Zoladex injection")');
                tx.executeSql('INSERT INTO AppointmentTypes (Id, Name) VALUES (4,"Surgery")');
                tx.executeSql('INSERT INTO AppointmentTypes (Id, Name) VALUES (5,"Chemotherapy")');
                tx.executeSql('INSERT INTO AppointmentTypes (Id, Name) VALUES (6,"Radiotherapy")');
            });
        });

        checkTableExists("PatientSymptoms", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS PatientSymptoms (id unique, Date, Time, SymptomId INTEGER)', [], function (tx, result) {
                // populate
                var currentDate = new Date();
                tx.executeSql('INSERT INTO PatientSymptoms (id, Date, Time, SymptomId) VALUES (1,"' + currentDate + '", "19:20", 1)');
                tx.executeSql('INSERT INTO PatientSymptoms (id, Date, Time, SymptomId) VALUES (2,"' + currentDate + '", "18:20", 2)');
                tx.executeSql('INSERT INTO PatientSymptoms (id, Date, Time, SymptomId) VALUES (3,"' + currentDate + '", "12:20", 4)');
                tx.executeSql('INSERT INTO PatientSymptoms (id, Date, Time, SymptomId) VALUES (4,"' + currentDate + '", "16:20", 3)');
            });
        });

        checkTableExists("Symptoms", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Symptoms (id unique, Description, WarningSign INTEGER)', [], function (tx, result) {

                // populate
                tx.executeSql('INSERT INTO Symptoms (id, Description, WarningSign) VALUES (1, "Pain in lower Back", 1)');
                tx.executeSql('INSERT INTO Symptoms (id, Description, WarningSign) VALUES (2, "Vomiting", 1)');
                tx.executeSql('INSERT INTO Symptoms (id, Description, WarningSign) VALUES (3, "Funny smell", 0)');
                tx.executeSql('INSERT INTO Symptoms (id, Description, WarningSign) VALUES (4, "Seeing unicorns", 1)');

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
        addHcp: addHcp,
        updateHcp: updateHcp,
        deleteHcp: deleteHcp,
        addAppointment: addAppointment,
        updateAppointment: updateAppointment,
        deleteAppointment: deleteAppointment
    };
})();
