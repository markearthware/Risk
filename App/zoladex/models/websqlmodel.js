steal('jquery/model', function () {

    $.Model('Zoladex.Models.WebSqlModel',
    {
        create: function (newobj, success, error) {
            // check model has a table name set
            this.checkTableName(error);

            newobj.id = localStorageDB.createId();

            // build sql string from object
            var sql = "INSERT into " + this.tableName + " (";
            var placeholders = "";
            var values = [];

            // loop object getting property names
            var keys = Object.keys(newobj);
            $.each(keys, function (index, value) {
                // dont want to include members previously returned by the websql stuff
                if (value != "insertId" && value != "rows" && value != "rowsAffected") {
                    sql += value;
                    if (index < keys.length - 1) sql += ", ";

                    values.push(newobj[value]);

                    placeholders += "?";
                    if (index < keys.length - 1) placeholders += ", ";
                }
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
            var keys = Object.keys(obj);
            var values = [];
            $.each(keys, function (index, value) {
                // dont want to include id, or members previously returned by the websql stuff
                if (value != "id" && value != "insertId" && value != "rows" && value != "rowsAffected") {
                    sql += value + " = ?";
                    if (index < obj.length - 1) sql += ", ";
                    values.push(obj[value]);
                }
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