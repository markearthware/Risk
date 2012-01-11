steal('jquery/controller',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/controller/view',
    '../models/jobrole.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.JobRoleAdd', {
    },
    {
        init: function () {
        },

        '#confirmYes click': function (el) {

            if ($('#Name').val().length < 1) {
                $('.ui-dialog').dialog('close');
                return;
            }

            var structure = { Name: $('#Name').val() };

            new Zoladex.Models.JobRole(structure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        },
        onInsertSuccess: function (obj, jrid) {

            if (localStorage.onsubmit == 0) {
                //go back to add new appointment
                localStorage.onsubmit = "";
                localStorage.jrid = jrid;
                $.mobile.changePage('../hcpnew.htm', 'flip', false, true);
            }
            else if (localStorage.onsubmit == 1) {
                //go back to add new appointment
                localStorage.onsubmit = "";
                localStorage.jrid = jrid;
                $.mobile.changePage('../hcpedit.htm', 'flip', false, true);
            }

        },
        onInsertFail: function () {
            alert("fail");
        }
    });
});