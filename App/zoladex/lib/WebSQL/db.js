var localStorageDB = (function () {

    var db = null,
    latest = 0,
    hcps = [],
    loadedCallback = null;

    function initDb(callback) {
        loadedCallback = callback;
        try {
            if (window.openDatabase) {
                db = openDatabase("zoladexDB", "1.0", "HTML 5 Database API example", 200000);
                if (db) {
                    db.transaction(function (tx) {
                        tx.executeSql('CREATE TABLE IF NOT EXISTS HealthcareProfessionals (Id unique, Title, FirstName, Surname, PracticeName, Telephone, Street, Town)', [], function (tx, result) {
                            var date = new Date();
                            var ticks = date.getTime();
                            tx.executeSql('INSERT INTO HealthcareProfessionals (Id, Title, FirstName, Surname, PracticeName, Telephone, Street, Town) VALUES (?,?,?,?,?,?,?,?)', [ticks, 'Dr', 'Mark', 'Short', 'Techno House Surgery', '09123 674738', 'Windy Lane', 'Letchworth']);
                            load();
                        });
                    });
                }
            } else {
                alert('Web Databases not supported');
            }
        } catch (e) {
            alert('error occurred during DB init, Web Database supported?');
        }
    }

    function load() {
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM HealthcareProfessionals', [], function (tx, results) {
                if (results.rows && results.rows.length) {
                    for (var i = 0; i < results.rows.length; i++) {
                        hcps.push(results.rows.item(i));
                    }
                    // fire loaded callback if not null
                    if (loadedCallback) loadedCallback();
                }
            }, function (tx) {
                alert('load error occurred, please reset DB');
            });
        });
    }

    //    function addCar(manufacturer) {
    //        var date = new Date();
    //        var ticks = date.getTime();
    //        db.transaction(function (tx) {
    //            tx.executeSql('INSERT INTO cars (id, manu) VALUES (?, ?)', [ticks, manufacturer]);
    //            clear();
    //            load();
    //        });
    //    }

    return {
        init: initDb,
        hcps: hcps
    };
})();


