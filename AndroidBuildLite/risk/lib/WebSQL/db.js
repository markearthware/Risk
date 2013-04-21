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
        var tables = ['sqlite_sequence', 'Hazards', 'Whos', 'Hows', 'Assessments', 'Tasks', 'AssessmentControls', 'AssessmentExistingControls', 'Controls'];

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
        return openDatabase("eriskliteDB", "1.0", "Risk Assessment App", 200000);
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

        checkTableExists("Tasks", function(tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Tasks (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, Site, Sent BIT, DateStarted INTEGER, DateFinished INTEGER, AssessorName, AssessorEmail, ManagerEmail)');
        });

        checkTableExists("Assessments", function(tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Assessments (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, TaskId INTEGER, HazardId INTEGER, Likelihood INTEGER, Severity INTEGER, LikelihoodB INTEGER, SeverityB INTEGER, HowId INTEGER, WhoId INTEGER, FurtherDetails)');
        });

        checkTableExists("AssessmentControls", function(tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AssessmentControls (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, AssessmentId INTEGER, ControlId INTEGER)');
        });

        checkTableExists("AssessmentExistingControls", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AssessmentExistingControls (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, AssessmentId INTEGER, ExistingControlId INTEGER)');
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

        checkTableExists("Hazards", function(tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Hazards (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name)', [], function(tx, result) {
                // populate
                tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Slip/Trip/Fall")'); //id 1
                tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Falling Object")'); //id 2
                tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Flying Object (ejected)")'); //id 3
                tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Moving Machinery")'); //id 4
                tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Sharp Edge")'); //id 5
                tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Hot Surface")'); //id 6
            });
        });

        checkTableExists("Hows", function(tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Hows (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, HazardId)', [], function(tx, result) {
                // populate
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Changes in floor levels",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling into any opening",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poorly maintained floor surfaces",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slipping in icy conditions",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slipping on liquids",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slipping on other materials",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slipping on stairs",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slipping on wet floor",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping on stairs",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tipping over debris on walkways",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over fixed installations",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over floor plates",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over grating",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over maintenance debris",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over pipework",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over removed items of plant",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over tools",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over trailing hoses",1)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over trailing leads",1)');

                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Dropping of items of equipment being removed",2)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling objects creating additional hazards",2)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Objects falling from above Working Party",2)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Objects falling on personnel on lower levels",2)');

                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Dust or debris blown into eyes",3)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Dust or debris blown into respiratory system",3)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ejected objects striking body",3)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Objects discharged by stored energy",3)');

                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Amputation",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Compressed air",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Crushing",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Cutting",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Drawing in",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ejection",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Entanglement",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Fluid injection",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Friction and abrasion",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Impact",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Shear",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Stabbing and puncture",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Stored energy",4)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Trapping",4)');

                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Cladding",5)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Handheld knives",5)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Plant components",5)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Raised edge on equipment/fixings",5)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tools and equipment",5)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unprotected edges",5)');

                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn during Hot Works",6)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn from contact with pipework",6)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn from contact with plant installation",6)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn from hot materials",6)');
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn or scald from hot liquid",6)');
            });
        });

        checkTableExists("Controls", function(tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Controls (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, HazardId)', [], function(tx, result) {
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean floor before work commences",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean work area before work commences",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Defined routes",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Designated storage/laydown areas",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Equipment and materials safely secured",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Gritting in icy conditions",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hose and cable management",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install portable lighting",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Anti-slip paint on stairs",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Openings barriered off",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety footwear to be worn (Standard BS EN 345, steel toe cap to 200 joule, heat resistant sole to 200C)",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety shoes to be worn (Standard BS EN 345, steel toe cap to 200 joule, heat resistant sole to 200C)",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety boots issued (Standard BS EN 345, steel toe cap to 200 joule, heat resistant sole to 200C)",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety wellingtons to be worn (Standard BS EN 345, steel toe cap to 200 joule, oil and penetration resistant sole)",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Removal of redundant equipment",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Restricted handling of material on stairs",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and cleaning",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and maintenance",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Specific hazard marking",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Suitable lighting in work area",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tools and materials safely stored in containers",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of drip trays in work area",1)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",1)');

                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",2)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Close gap after items of plant are removed",2)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Close gap after lagging and cladding removal",2)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",2)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Equipment and materials safely secured",2)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Lifting plan in place",2)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance of access routes",2)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Areas below openings barriered off",2)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Netting",2)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Openings barriered off",2)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety helmet to be worn (Standard BS EN 397)",2)');

                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",3)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Controlled release of stored energy",3)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dust in work area cleared",3)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency eye wash bottles to be carried",3)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Plant washed down to control the build up of dust and debris",3)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Eye protection to be worn (Standard BS EN 166)",3)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety glasses to be worn (Standard BS EN 166, 1F grade)",3)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety goggles to be worn (Standard BS EN 166, 1B grade)",3)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety visor to be worn (Standard BS EN 166, 1B grade)",3)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Robustness of guarding confirmed",3)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and maintenance",3)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",3)');

                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",4)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Free rapping rods mechanism before inspection",4)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Guards in place and effective",4)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Isolation of machinery",4)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Controlled release of stored energy",4)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Springs to be fully discharged before starting task",4)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of sprag",4)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",4)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",4)');

                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",5)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Equipment and materials safely secured",5)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Deburr edges before work commences",5)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 388)",5)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Mechanical protection gloves to be worn (Standard BS EN 388, mechanical protection to at least 3,3,3,3)",5)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Protect edges",5)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of enclosed moving edge blade",5)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",5)');

                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",6)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",6)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance of lagging and cladding",6)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",6)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 407)",6)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Thermal hazard gloves to be worn (Standard BS EN 407, thermal protection to at least 4,3,4,2,1,1)",6)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Welding gauntlets to be worn (Standard BS EN 407, thermal protection to at least 3,1,2,1,3,1.  Standard BS EN 388, mechanical protection to at least 3,1,3,3)",6)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Screens/blankets",6)');
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",6)');
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
        dropTables: goDropTables
    };
})();
