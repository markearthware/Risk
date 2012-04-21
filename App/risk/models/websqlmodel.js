steal('jquery/model', function () {

    $.Model('Risk.Models.WebSqlModel',
    {
        create: function (newobj, success, error) {
            // check model has a table name set
            this.checkTableName(error);

            // build sql string from object
            var sql = "INSERT into " + this.tableName + " (";
            var placeholders = "";
            var values = [];

            // loop object getting property names
            var keys = $.grep(Object.keys(newobj), function (n, i) {
                return n != "id" && n != "insertId" && n != "rows" && n != "rowsAffected";
            });
            $.each(keys, function (index, value) {
                sql += value;
                if (index < keys.length - 1) sql += ", ";

                // check for dates and convert to milliseconds
                if (newobj[value] instanceof Date) {
                    newobj[value] = newobj[value].getTime();
                }
                    
                values.push(newobj[value]);

                placeholders += "?";
                if (index < keys.length - 1) placeholders += ", ";
            });

            sql += ") VALUES(" + placeholders + ")";

            return localStorageDB.executeSql(sql, values, success, error);
        },

        update: function (id, obj, success, error) {
            // check model has a table name set
            this.checkTableName(error);

            // build sql string from object
            var sql = "UPDATE " + this.tableName + " SET ";

            // loop object getting property names
            var keys = $.grep(Object.keys(obj), function (n, i) {
                return n != "id" && n != "insertId" && n != "rows" && n != "rowsAffected";
            });

            var values = [];
            $.each(keys, function (index, value) {
                sql += value + " = ?";
                if (index < keys.length - 1) sql += ", ";

                // check for dates and convert to milliseconds
                if (obj[value] instanceof Date) {
                    obj[value] = obj[value].getTime();
                }
                values.push(obj[value]);
            });

            sql += " WHERE id=" + id;

            return localStorageDB.executeSql(sql, values, success, error);
        },

        destroy: function (id, success, error) {
            // check model has a table name set
            this.checkTableName(error);

            // build sql string from object
            var sql = "DELETE FROM " + this.tableName + " WHERE id=" + id;

            return localStorageDB.executeSql(sql, success, error);
        },

        checkTableName: function (error) {
            if (this.tableName.length < 1) {
                error("no table name set");
            }
        },

        tableName: ""
    },
  {});
})