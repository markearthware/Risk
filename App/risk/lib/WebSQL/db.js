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

        checkTableExists("Tasks", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Tasks (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, Sent BIT, DateStarted INTEGER, DateFinished INTEGER)');
        });
        
        checkTableExists("Assessments", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Assessments (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, TaskId INTEGER)');
        });

        checkTableExists("AssessmentHows", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AssessmentHows (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, AssessmentId INTEGER, HowId INTEGER)');
        });

        checkTableExists("AssessmentWhos", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AssessmentWhos (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, AssessmentId INTEGER, WhoId INTEGER)');
        });
        
            checkTableExists("AssessmentControls", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AssessmentControls (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, AssessmentId INTEGER, ControlId INTEGER)');
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
        
        checkTableExists("Hazards", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Hazards (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Slip/Trip/Fall")'); //id 1
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Falling Object")'); //id 2
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Flying Object (ejected)")'); //id 3
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Moving Machinery")'); //id 4
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Sharp Edge")'); //id 5
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Hot Surface")'); //id 6
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Vehicle (Mobile Work Equipment)")'); //id 7
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Working at Height")'); //id 8
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Fumes/Gases/Vapours")'); //id 9
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Chemical")'); //id 10
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Confined Space")'); //id 11
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Biological Hazard")'); //id 12
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Radiation")'); //id 13
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Equipment")'); //id 14
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Hand Tool")'); //id 15
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Electricity")'); //id 16
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Striking against staionary object")'); //id 17
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Lifting Object")'); //id 18
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Explosion")'); //id 19
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Weather")'); //id 20
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Lighting")'); //id 21
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Fire")'); //id 22
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Manual Handling")'); //id 23
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Noise")'); //id 24
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Vibration")'); //id 25
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Temperature")'); //id 26
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Violence")'); //id 27
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Fibres/Dust (Asbestos MMF)")'); //id 28
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Gases/Fumes/Vapours")'); //id 29
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Chemical")'); //id 30
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Bio Hazard")'); //id 31
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Radiation")'); //id 32
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Explosion")'); //id 33
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV Weather")'); //id 34
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Lighting")'); //id 35
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Temperature")'); //id 36
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Noise & Vibration")'); //id 37
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Oil")'); //id 38
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Resource Use")'); //id 39
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Waste")'); //id 40
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Odour")'); //id 41
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Fire")'); //id 42
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Dust")'); //id 43
            });
        });

        checkTableExists("Hows", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Hows (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, HazardId)', [], function (tx, result) {
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

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Being struck by other MWE",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of mobile work equipment (MWE)",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of pedestrian/vehicle interface arrangements",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling into water",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Loss of load",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Overturning",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Pedestrian being struck",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poor lighting",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Restricted vision",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Reversing movements",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Trapping of persons",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsecure load",7)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of fall arrest equipment",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of fall arrest equipment",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling from height",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling from mobile working platforms",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling from scaffold",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling from unsuitable working platforms",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling from working platform",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling into holes and excavations",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling into water",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling objects",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling through fragile surface",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling through opening",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling through skylights",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Harness trauma",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable physical attributes/capabilities",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable rescue arrangements",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Body Heat loss through emersion in water",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Carried by water current",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Entanglement with under water object",8)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Eye irritation",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Fire/explosion",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inhalation",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inhalation of Hot Work fumes",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Noise from venting",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Occupational asthma",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poisoning",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Respiratory sensitisation",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Scalding from steam",9)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Absorption",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Asphyxiation",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Biomass",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Cryptosporidium causing gastroenteritis",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn or scald from hot liquid",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Chemical burn",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Corrosion",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Explosion",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to carcinogens",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to fumes",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to oils and lubricants",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to solvents absorption",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to solvents inhalation",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to toxins",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Flammable",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ingestion",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inhalation",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Injection",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Irritation",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Long term exposure occupational dermatitis",10)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Asphyxiation",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Diving operations",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Drowning",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Entrapment",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of emergency arrangements",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Fire and explosions",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Free flowing liquids and solids",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Hot conditions",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient air",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Lack of oxygen",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poisonous gas, fume or vapour",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Pulverised fuel dust",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Residue e.g. Vanadium",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Restricted access and conditions",11)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Absorption",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Bacterial or fungal",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("E-coli",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to carcinogens",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to pathogens",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Infection",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inhalation",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Injection",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ingestion",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Legionella",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Leptospirosis known as Weils disease from contaminated water",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Psittacosis from pigeon waste",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Zoonosis from animals",12)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Contamination, in the form of gases liquid",13)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to source",13)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to sunlight",13)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorporation,  the uptake of materials by body cells",13)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Irradiation,  occurs when all or part of body is exposed",13)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Lasers",13)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Abrasion",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Amputation",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Being struck",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Crushing",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Cutting",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ejection",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Electrocution",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Entanglement",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure/lack of or position of emergency stop/s",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of equipment",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Fire/explosion",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Impact",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient guarding",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient maintenance",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Noise",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non ATEX rated",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non intrinsically safe",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Puncture",14)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Abrasion",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Amputation",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Crushing",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Cutting",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ejection",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Electrocution",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Impact",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Noise",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non ATEX rated",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non intrinsically safe",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Puncture",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Trapping",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Vibration",15)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Arcing/overheating",16)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn",16)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Electrocution",16)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to damaged electrical apparatus",16)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to incorrectly installed",16)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to live conductors",16)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Impact",17)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inadequate lighting",17)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of equipment/accessories",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Heavy load",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect lifting equipment/accessories",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect lifting techniques",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient lifting plan",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Overhead loads",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Uncertified equipment/accessories",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsecure load",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unstable load",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable physical attributes/capabilities",18)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Build up of an explosive atmosphere",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Electrical explosion through the use of the non insulated tools",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Gas cylinder flashback",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition of flammable atmosphere",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inadequate ventilation",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Lack of DSEAR arrangements",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non ATEX rated equipment",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non intrinsically safe equipment",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poorly installed and or maintained gas equipment",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Storage of explosives",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Use of explosives",19)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Heavy rain",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("High winds",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Hot/cold",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Humid",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Icy conditions",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poor visibility",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Snow/sleet/hail",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Sunburn",20)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Excessive",21)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of emergency lighting",21)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Glare",21)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient",21)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Sudden changes in levels",21)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from storage of flammable substances/materials",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from faulty electrical equipment",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from electrical overload of equipment/circuits",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from cooking equipment",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from Hot Working",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from heating",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from friction of mechanical equipment",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from chemical reaction",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from explosion",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from arson",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of vegetation",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of combustible materials",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of flammable gases/vapours",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of combustible waste materials",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of walls & ceilings",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of office furniture and carpet",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of aerosol containers",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Smoke spread from lack of structural compartmentation",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Smoke spread from abuse of compartmentation",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Smoke spread from lack of fire protected separation between floors",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Evacuation impacted by escape route not able to cope with the number of persons",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Evacuation impacted by escape route not illuminated on electrical supply failure",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Evacuation impacted by escape route not having means of alerting other people to the presence of fire",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Evacuation impacted by insufficient fire fighting arrangements",22)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Available and effective grip of load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Bulky/unwielding load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Changes in floor level including steps and stairs",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Flexibility/rigidity of load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Frequency of operations",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Hot or cold load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Hot/cold/humid conditions",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect lifting techniques",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient rest or recovery time",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poor lighting",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poor ventilation",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poorly maintained floor surfaces and other slip or trip hazards",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Restricted working space",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Restrictions caused by PPE",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Sharp edges or splinters on load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Shifting/moving weight of load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slippery surfaces of load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Stability of load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Strenuous pushing or pulling",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Twisting/stooping/reaching",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable physical attributes/capabilities",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Weather conditions",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Weight of load",23)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Created by tools and equipment",24)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Generated by plant operation",24)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Created by tools and equipment",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exceeding trigger time",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Generated by plant operation",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inadequate maintenance of equipment",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect attachments",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect use of equipment",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Low temperature leading to poor circulation",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitability of equipment",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable physical attributes/capabilities",25)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure of limbs, hands, feet and face",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to extremes",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of emergency arrangements",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of PPE",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inadequate PPE",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect work/rest regime",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable physical attributes/capabilities",26)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Effects of drugs and alcohol",27)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Mental abuse",27)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Physical harm",27)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unpredictable behaviour",27)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Verbal abuse",27)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inhalation",28)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Irritation",28)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Release due to disturbance",28)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Uncontrolled release",28)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",29)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",29)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",29)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",30)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",30)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",30)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",31)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",31)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",31)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",32)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",32)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",32)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",33)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",33)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",33)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",34)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",34)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",34)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",35)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",35)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",35)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",36)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",36)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",36)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",37)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",37)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",37)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",38)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",38)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",38)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",39)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",39)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",39)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",40)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",40)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",40)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",41)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",41)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",41)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",42)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",42)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",42)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",43)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",43)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",43)');
                
            });
        });

        checkTableExists("Controls", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Controls (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, HazardId)', [], function (tx, result) {
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

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Banksman in place",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Blind spot management",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Defined routes",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance routines",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Life jacket to be worn (Standard BS EN 396)",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use checks and inspection",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Segregation of vehicles and pedestrians",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Speed limits in place",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Traffic management arrangements in place",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",7)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Access to scaffold controlled",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Banksman in place",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference Work at Height Risk Assessment",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Equipment and materials safely secured",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Fall rescue plans in place",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Fragile surface identification",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Gates installed in openings",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Handrails or barriers in place",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Openings barriered off",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Fall arrest equipment to be used (Standard BS EN 365, general requirements)",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Fall arrest lanyards to be used (Standard BS EN 354, lanyards.  BS EN 355, energy absorbers)",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Fall restraint equipment to be used (Standard BS EN 358, fall restraint lanyard)",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Relief step to be used with safety harness",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Work positioning equipment to be used (Standard BS EN 358, work positioning lanyard)",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use checks and inspection",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Segregate fragile surface",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of Duck board/Youngman board",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",8)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Health surveillance",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Limits on exposure",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hearing protection to be worn (Standard BS EN 352)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Respiratory protective equipment to be worn",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP2 disposable face mask to be worn (Standard BS EN 149)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP3 disposable face mask to be worn (Standard BS EN 149)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Half face mask to be worn (Standard BS EN 140)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Full face mask to be worn (Standard BS EN 136)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Eye protection to be worn (Standard BS EN 166)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety glasses to be worn (Standard BS EN 166, 1F grade)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety goggles to be worn (Standard BS EN 166, 1B grade)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety visor to be worn (Standard BS EN 166, 1B grade)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Leather apron to be worn (Standard BS EN 467)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - PVC apron to be worn (Standard BS EN 467)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Ventilation of work area",9)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("All chemicals COSHH assessed",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean tools after use with COSHH assessed cleaning chemicals",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean tools after use with water",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Health surveillance",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Instruction on personnel hygiene controls",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Chemical resistant overalls to be worn (Standard BS EN 465)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - PVC apron to be worn (Standard BS EN 467)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Eye protection to be worn (Standard BS EN 166)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety glasses to be worn (Standard BS EN 166, 1F grade)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety goggles to be worn (Standard BS EN 166, 1B grade)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety visor to be worn (Standard BS EN 166, 1B grade)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Respiratory protective equipment to be worn",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP2 disposable face mask to be worn (Standard BS EN 149)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP3 disposable face mask to be worn (Standard BS EN 149)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Half face mask to be worn (Standard BS EN 140)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Full face mask to be worn (Standard BS EN 136)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Forearm length rubber latex gloves to be worn (Standard BS EN 374)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Forearm length nitrile gloves to be worn (Standard BS EN 374)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",10)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("ATEX rated safe lighting in work area",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean contaminated work area",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Communication between working party members",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Communication with personnel outside the work area",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Conditions monitored for changes in the nature of the environment",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Control access to culverts and cable tunnels",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hot environment arrangements in place",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Means of safe entry and exit",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Portable lighting 25V max",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE-disposable coveralls to be worn (Standard EN 340)",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Purging and venting",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Safety person in place",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of atmospheric monitors",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of intrinsically safe tools and equipment",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Work in accordance with Diving Operations GMI",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Work in accordance with Selected Persons Report",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Respiratory protective equipment to be worn",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP2 disposable face mask to be worn (Standard BS EN 149)",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP3 disposable face mask to be worn (Standard BS EN 149)",11)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean tools after use using COSHH assessed cleaning chemicals",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Health surveillance",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Instruction on food hygiene controls",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Instruction on personnel hygiene controls",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Isolation of Aeration Cone",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean contaminated work area",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pest control",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Chemical resistant overalls to be worn (Standard BS EN 465)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Coveralls changed after task (standard EN 340 )",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Eye protection to be worn (standard EN 166, grade S)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Needle proof gloves (standard EN ??)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP2 disposable face mask to be worn (Standard BS EN 149)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Rubber elbow length gloves to be worn ( Standard EN 388)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety wellingtons to be worn (Standard BS EN 345, steel toe cap to 200 joule, oil and penetration resistant sole)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and cleaning",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",12)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("E.ON UK Safety Rules (Radiological)",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Health surveillance",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Isolation of source",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Limits on exposure",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning lights in place",13)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency stop within operating area",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Flashback arrestors in place",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hose and cable management",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Insulation of electrical supply",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Portable appliance testing of equipment",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hearing protection to be worn (Standard BS EN 352)",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 388)",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use inspection",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Robustness of guarding confirmed",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and cleaning",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and maintenance",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use in accordance with manufacturer\'s instructions",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of ATEX rated equipment",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of intrinsically safe tools and equipment",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Vibration assessment",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",14)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hold to operate switch or trigger",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Insulation of electrical supply",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Portable appliance testing of equipment",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hearing protection to be worn (Standard BS EN 352)",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 388)",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use inspection",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and cleaning",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and maintenance",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use in accordance with manufacturer\'s instructions",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of ATEX rated equipment",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of intrinsically safe tools and equipment",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Vibration assessment",15)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Check condition of equipment",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Earths applied before work commences",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Electrical equipment checked for dead before work commences",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Insulation of electrical supply",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintain safe distance",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Portable appliance testing of equipment",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Electrical Gloves (standard EN 60903)",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Switching clothing (Standard EN ??)",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of ATEX rated equipment",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of insulated tools",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of intrinsically safe tools and equipment",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Work in accordance with Brush Gear Maintenance GMI",16)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Defined routes",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Designated storage/laydown areas",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install portable lighting",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - bump cap to be worn (standard EN 812)",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Removal of redundant equipment",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Specific hazard marking",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Suitable lighting in work area",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",17)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Lifting plan in place",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use checks and inspection on all equipment and accessories",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Sound klaxon",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Statutory Inspections valid",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of correct/tested lifting points and accessories",18)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Access to area restricted",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Area ventilated to prevent build up of explosive atmosphere",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Atmosphere monitored",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Conditions monitored for changes in the nature of the environment",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference Explosion Prevention Document",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dust in work area cleared",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Flashback arrestors in place",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Implement and maintain Explosion Prevention Document (EPD)",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintain area below Lower Explosive Limit (LEL)",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance routines",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Plant washed down to control the build up of dust and debris",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevent build up of combustible material",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Restricted access to cell room",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and cleaning",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Safe storage of explosive materials/cylinders",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Selection of cylinder gases",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of ATEX rated equipment",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of insulated tools",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of intrinsically safe tools and equipment",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Work in accordance with Selected Persons Report",19)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Conditions monitored for changes in the nature of the environment",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Gritting in snowy/icy conditions",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Health Surveillance",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install cool down area",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Limitations on work in extreme conditions",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (cold weather)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (gloves EN 388) (Thermal)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety footwear to be worn (Standard BS EN 345, steel toe cap to 200 joule, heat resistant sole to 200C)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (sun visors)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (Wellingtons EN 345, S2)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (wet weather)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Provide liquid refreshment",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Provide sun protection",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Secure loose equipment and materials",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Snow clearance",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Speed limits in place",20)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install blinds or screens",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install portable lighting",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Lighting to be in place prior to task (150 lux)",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Lux level audit",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (amber eye protection EN 166, F)",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Preventative maintenance",21)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by use of permit system for isolation",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by removal of the source of ignition",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by preventative maintenance on equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by removal of combustible material",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by the PAT testing of portable electrical equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by the ventilation of the building to prevent the build of flammable atmosphere",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by fire awareness training",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by maintenance of fire suppression systems",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by control of hot work",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by training individuals on fire hazards and controls",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by segregation of flammable liquids",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by Reduction of  volumes held of flammable substances",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by segregation of reactive chemicals",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by the use of intrincically safe tools and equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by the use of ATEX rated equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by Design of building",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through the activation of automatic fire suppression systems (e.g. sprinkler systems)",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through compartmentalisation of the area",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through activation of smoke exhaust systems",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through activation of fire doors",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through the activation of fire detection and alarm systems",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through by the evacuation of individuals from the area",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through the maintenance of emergency escape routes",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through the maintenance of emergency lighting on escape routes",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through training on evacuation drills",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through training on fire fighting equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through signed exit routes to place of safety",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reaction, evacuate area",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reaction, use of fire fighting equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reaction, implement emergency plan",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reaction, implement runoff containment measures of pollutants",22)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Competent persons trained in Manual Handling techniques",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference Manual Handling Risk Assessment",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance routines",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Cold weather thermal (standard EN ??)",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 388)",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Teamworking",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use mechanical aid",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of manual lifting aids",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of temporary lighting",23)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference Noise Risk Assessment",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install noise barrier",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Isolation from noise",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Isolation of noise source",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hearing protection to be worn (standard EN 352-3)",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reference noise map",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Time limits on exposure",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",24)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",25)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use inspection",25)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Protect against cold environment",25)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Time limits on exposure",25)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",25)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use in accordance with manufacturer\'s instructions",25)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Conditions monitored for changes in the nature of the environment",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hot environment arrangements in place",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install cool down area",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Cold weather thermal (standard EN ??)",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Cold weather thermal gloves (standard EN 388 and EN ??)",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Provide liquid refreshment",26)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",27)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Lone working arrangements in place",27)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls",27)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Security",27)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Supervision",27)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Whistle blowing ",27)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Asbestos register checked before commencing",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Damping down of material",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Disturbed or damaged material appearing to be MMMF or asbestos checked before commencing",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Encapsulate exposed areas",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Enclosure of area",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety footwear to be worn (Standard BS EN 345, steel toe cap to 200 joule, heat resistant sole to 200C)",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Disposable coveralls (Standard EN 340)",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 388)",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Respiratory protective equipment (Standard EN 140, FFP3)",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Refer to HSE guide \'Asbestos Essentials\'",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use licensed asbestos removal contractors",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",28)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emission monitoring (e.g. CEMS)",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Stack height",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("In stack heaters",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Electrostatic precipitators",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Low nox burners",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Selective catalytic reduction",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Flue gas desulphurisation",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("SO3 injection",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Ventilation of work area",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emission limits",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Venting of storage vessels",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Incineration",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Absorption",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Adsorption",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Condensers",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Settlement chambers",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Centrifugal separators",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Wet scrubbers",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Filtration",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dry scrubbers",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Operating regime",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("BAT",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Fortnightly helicopter flyover",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Zoned Areas - Smoking/phone policy",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Metering to check levels",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Flame arresters",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Notification of digging",29)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reference REACH list",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Suitable primary storage",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Double skinned tanks",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Secondary containment bund",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Temporary bunding",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Drip tray",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Spill kit",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Colour coded drains",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Locked chemical stores",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clear labelling of chemicals",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Covered storage area",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency response contract",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Smaller storage containers",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Segregation of incompatible substances",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PM schedules",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Operating procedures",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Trained/competent staff",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Neutralisation",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Shut off valves",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Effluent monitoring",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pumping equipment",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Water treatment",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dilution",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",30)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference COSHH",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Segregation of materials (e.g. biocides/pesticides/herbicides)",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Temperature control",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hygiene control",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Fuel sampling",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Shut off valves",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Secure storage",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Effluent monitoring",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Habitat control (e.g. knotweed control, ragwort pulling)",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Water treatment",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dilution",31)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",32)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Segregation of source",32)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment of source",32)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment of work area",32)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",32)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Ventilation to prevent build up of explosive atmosphere",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Atmosphere monitored",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Conditions monitored for changes in the nature of the environment",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Implement and maintain Explosion Prevention Document (EPD)",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintain area below Lower Explosive Limit (LEL)",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Access to areas restricted",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance routines",33)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Weather warning",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Flood defence systems around site",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference site Emergency Plan (flooding)",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference Business Contingency Plan, reference drawing water in drought situation",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Monitor bund levels",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment of contaminant for treatment prior to discharge",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Secure material to prevent being carried in high wind",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Secure equipment used for environmental control",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",34)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",35)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Set direction of lighting",35)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Change lighting type for less intrusive lighting",35)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Work during daylight hours",35)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Set up screening to prevent light going beyond site boundary",35)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",35)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",36)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Monitor discharge temperature",36)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevent water going outside the temperature limits",36)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",36)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Preventative maintenance of equipment",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Screening using natural barriers",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Installation of baffle mounds",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Installation of acoustic fencing",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Monitor noise at the site boundary",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",37)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",38)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Bunding of oil storage areas",38)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Installation of interceptor pits",38)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance of equipment",38)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Spill kits located locally",38)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",38)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",39)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Zero to land fill",39)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",39)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Monitor raw materials used",39)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Review alternative raw materials available",39)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Resource use kept to a minimum",39)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Waste disposed using licensed contractor",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Waste prevention",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Re-use of waste",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Recycling of waste",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Recovery of waste",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Waste collection points",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Training of people on waste segregation",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Colour coded waste collection bins",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Licensed contractor audited",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Waste stored securely",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Correct use of EWC codes",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Archived waste transfer notes and quarterly returns",40)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",41)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of air fresheners",41)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",41)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Process/waste/materials/sewage causing odour investigated",41)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Process/waste/materials/sewage causing odour monitored",41)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",42)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Site drains covered ",42)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Effluent pit manually operated to contain run-off",42)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pumping equipment",42)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Shut off valves",42)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Fire Brigade called to site to manage fire and prevent spread",42)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",43)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Material/equipment prone to dust stored indoors",43)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Activities that create dust carried out indoors",43)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dust contained preventing escape",43)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Stack emissions monitored",43)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Vehicle use monitored",43)');
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
