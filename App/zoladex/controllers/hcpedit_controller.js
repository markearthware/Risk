steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../models/jobrole.js',
    '../lib/WebSQL/db.js',
    '../views/hcp_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpEdit', {
        },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();

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
        submit: function (el, ev) {

            ev.preventDefault();

            var params = el.formParams();

            var structure = { SecondaryPracticeId: params.PracticeName2, PrimaryPracticeId: params.PracticeName, JobRole: params.JobRole, id: params.id, Title: params.Title, FirstName: params.FirstName, Surname: params.Surname, Telephone: params.Telephone, Email: params.Email, Notes: params.Notes };

            if ($('#EditHcpForm').valid()) {
                steal.dev.log('insert hcp form is valid, attempting to save to database...');
                new Zoladex.Models.Hcp(structure).save(this.callback(this.onUpdateSuccess), this.callback('onUpdateFail'));
            }

            return false;
        },

        loadData: function () {

            //get query string params
            var params = Zoladex.QSUtils.getParams();
            var practiceName = null;
            var practiceres = null;
            var hcpres = null;
            var rolesdef = Zoladex.Models.JobRole.findAll();
            var hcpdef = Zoladex.Models.Hcp.findOne(localStorage.hcpId ? localStorage.hcpId : params.id);
            var practicesdef = Zoladex.Models.Practice.findAll({ id: params.id });
            var self = this;
            localStorage.hcpId = "";

            $.when(hcpdef, practicesdef, rolesdef).done(function (hcpres, practicesres, rolesres) {
             
                var view = $.View('//zoladex/views/hcp_addedit/init.ejs', {
                    id: hcpres.id,
                    Title: localStorage.Title ? localStorage.Title : hcpres.Title,
                    FirstName: localStorage.FirstName ? localStorage.FirstName : hcpres.FirstName,
                    Surname: localStorage.Surname ? localStorage.Surname : hcpres.Surname,
                    Telephone: localStorage.Telephone ? localStorage.Telephone : hcpres.Telephone,
                    Email: localStorage.Email ? localStorage.Email : hcpres.Email,
                    Notes: localStorage.Notes ? localStorage.Notes : hcpres.Notes,
                    Locs: practicesres,
                    PLocId: localStorage.locid ? localStorage.locid : (localStorage.PracticeNameId ? localStorage.PracticeNameId : hcpres.PrimaryPracticeId),
                    SLocId: localStorage.locid2 ? localStorage.locid2: (localStorage.PracticeNameId2 ? localStorage.PracticeNameId2 : hcpres.SecondaryPracticeId),
                    Roles: rolesres,
                    RoleId: localStorage.jrid ? localStorage.jrid : (localStorage.JobRole ? localStorage.JobRole : hcpres.JobRole)
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

                var form = $('#EditHcpForm');

                form.html(view);

                form.trigger('create');

                $.mobile.hidePageLoadingMsg();
            });
        },

        onUpdateSuccess: function () {
            steal.dev.log('edit worked');
            $.mobile.changePage('hcpdetails.htm?id=' + $('#id').val());
        },

        onUpdateFail: function () {

            steal.dev.log('edit no worked');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        },

        '#JobRole change': function () {
            if ($("#JobRole option:selected").val() == -1) {
                localStorage.onsubmit = 1;
                localStorage.hcpId = $('#id').val();

                //save user input from above fields
                this.SaveCurrentFormState();

                $.mobile.changePage('dialog/jobrolenew.htm', 'flip', false, true);

            }
        },

        '#PracticeName change': function () {
            if ($("#PracticeName option:selected").val() == -1) {
                localStorage.hcpId = $('#id').val();
                localStorage.onsubmit = 3;

                this.SaveCurrentFormState();
                
                $.mobile.changePage('practicenew.htm', 'flip', false, true);
            }
        },

        '#PracticeName2 change': function () {
            if ($("#PracticeName2 option:selected").val() == -1) {
                localStorage.hcpId = $('#id').val();
                localStorage.onsubmit = 5;
                //save user input from above fields
                this.SaveCurrentFormState();

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