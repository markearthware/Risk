steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../models/hcppractice.js',
    '../models/jobrole.js',
    '../lib/WebSQL/db.js',
    '../views/hcp_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpAdd', {
        },
    {
        init: function () {

            $.validator.setDefaults({
                errorPlacement: function (error, element) {
                    $(element).attr({ "title": error.text() });
                },
                highlight: function (element) {
                    if ($(element).is('select')) {
                        element = $(element).prev().parent().children(":first");
                        $(element).removeClass("textinput");
                        $(element).addClass("errorHighlight");
                    }
                    else {
                        $(element).removeClass("textinput");
                        $(element).addClass("errorHighlight");
                    }
                },
                unhighlight: function (element) {

                    if ($(element).is('select')) {
                        element = $(element).prev().parent().children(":first");
                        $(element).removeClass("errorHighlight");
                        $(element).addClass("textinput");
                    }
                    else {
                        $(element).removeClass("errorHighlight");
                        $(element).addClass("textinput");
                    }
                }
            });

            this.loadData();
        },


        loadData: function () {
            var locsdef = Zoladex.Models.Practice.findAll();
            var rolesdef = Zoladex.Models.JobRole.findAll();
           
            $.when(locsdef, rolesdef).done(function (locsres, rolesres) {
                // process view
                var view = $.View('//zoladex/views/hcp_addedit/init.ejs',
                { 
                    id: "",
                    Title: localStorage.Title ? localStorage.Title : "",
                    FirstName: localStorage.FirstName ? localStorage.FirstName : "",
                    Surname: localStorage.Surname ? localStorage.Surname : "",
                    Telephone: localStorage.Telephone ? localStorage.Telephone : "",
                    Email: localStorage.Email ? localStorage.Email : "",
                    Notes: localStorage.Notes ? localStorage.Notes :"",
                    Locs: locsres,
                    PLocId: localStorage.locid ? localStorage.locid : (localStorage.PracticeNameId ? localStorage.PracticeNameId : -1),
                    SLocId: localStorage.locid2 ? localStorage.locid2 : (localStorage.PracticeNameId2 ? localStorage.PracticeNameId2 : -1),
                    Roles: rolesres,
                    RoleId: localStorage.jrid ? localStorage.jrid : (localStorage.JobRole ? localStorage.JobRole : -1)
                });

                //clear local storage variable which have been used
                localStorage.locid = "";
                localStorage.locid2 = "";
                localStorage.jrid = "";
                localStorage.Title = "";
                localStorage.Surname = "";
                localStorage.FirstName = "";
                localStorage.JobRole = "";
                localStorage.Telephone = "";
                localStorage.Email = "";
                localStorage.Notes = "";
                localStorage.PracticeNameId = "";
                localStorage.PracticeNameId2 = "";

                $('#NewHcpForm').html(view).trigger('create');
            });
        },

        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#NewHcpForm').valid()) {
                steal.dev.log('insert hcp form is valid, attempting to save to database...');

                var params = el.formParams();

                var hcpDataStructure = { SecondaryPracticeId: params.PracticeName2, PrimaryPracticeId: params.PracticeName, JobRole: params.JobRole, Title: params.Title, FirstName: params.FirstName, Surname: params.Surname, Telephone: params.Telephone, Email: params.Email, Notes: params.Notes };

                new Zoladex.Models.Hcp(hcpDataStructure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));

            }
            return false;
        },


        onInsertSuccess: function (obj, newid) {

            var params = Zoladex.QSUtils.getParams();

            if (params.onsubmit) {

                if (params.onsubmit == 0) {
                    //go back to add new appointment
                    localStorage.hcpId = newid;
                    $.mobile.changePage('../calendar/patientappointmentnew.htm', 'flip', false, true);
                }
                else if (params.onsubmit == 1) {
                    //go back to edit appointment
                    $.mobile.changePage('../calendar/patientappointmentedit.htm?hcpid=' + newid + '&id=' + params.id, 'flip', false, true);
                }
            }
            else { //standard procedure
                $.mobile.changePage('hcplist.htm', 'pop', false, true);
            }
        },

        onInsertFail: function () {

            steal.dev.log('professional has not been added');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        },

        '#JobRole change': function () {
            if ($("#JobRole option:selected").val() == -1) {
                localStorage.onsubmit = 0;
                this.SaveCurrentFormState();
                $.mobile.changePage('dialog/jobrolenew.htm', 'flip', false, true);
            }
        },

        '#PracticeName change': function () {
            if ($("#PracticeName option:selected").val() == -1) {
                this.SaveCurrentFormState();
                localStorage.onsubmit = 2;
                $.mobile.changePage('practicenew.htm', 'flip', false, true);
            }
        },

        '#PracticeName2 change': function () {
            if ($("#PracticeName2 option:selected").val() == -1) {
                this.SaveCurrentFormState();
                localStorage.onsubmit = 4;
                $.mobile.changePage('practicenew.htm', 'flip', false, true);
            }
        },

        SaveCurrentFormState: function () {
            localStorage.Title = $("#Title option:selected").val();
            localStorage.Surname = $("#Surname").val();
            localStorage.FirstName = $('#FirstName').val();
            localStorage.JobRole = $("#JobRole option:selected").val();
            localStorage.Telephone = $('#Telephone').val();
            localStorage.Email = $('#Email').val();
            localStorage.Notes = $('#Notes').val();
            localStorage.PracticeNameId = $("#PracticeName option:selected").val();
            localStorage.PracticeNameId2 = $("#PracticeName2 option:selected").val();
        }

    });
    });