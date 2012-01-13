steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/practiceB.js',
    '../lib/WebSQL/db.js',
    '../views/practice_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PracticeAdd', {
    },
    {
        init: function () {

            $.validator.setDefaults({
                errorPlacement: function (error, element) {
                    $(element).attr({ "title": error.text() });
                },
                highlight: function (element) {

                    $(element).removeClass("textinput");
                    $(element).addClass("errorHighlight");
                },
                unhighlight: function (element) {

                    $(element).removeClass("errorHighlight");
                    $(element).addClass("textinput");
                }
            });

            var view = $.View('//zoladex/views/practice_addedit/init.ejs', { id: "",
                Name: ""
            });

            $('#NewPracticeForm').html(view);
        },
        submit: function (el, ev) {
            ev.preventDefault();

            if ($('#NewPracticeForm').valid()) {
                steal.dev.log('insert practice form is valid, attempting to save to database...');

                var params = el.formParams();

                var practiceDataStructure = {
                    County: params.County,
                    Email: params.Email,
                    Postcode: params.Postcode,
                    Name: params.Name,
                    Street: params.Street,
                    Telephone: params.Telephone,
                    Town: params.Town
                };

                new Zoladex.Models.PracticeB(practiceDataStructure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }

            return false;
        },
        onInsertSuccess: function (obj, newid) {


            if (localStorage.onsubmit) {

                localStorage.locid = newid;
                if (localStorage.onsubmit == 0) {
                    //go back to add new appointment
                    $.mobile.changePage('../calendar/patientappointmentnew.htm', 'flip', false, true);
                }
                else if (localStorage.onsubmit == 1) {
                    //go back to edit appointment
                    $.mobile.changePage('../calendar/patientappointmentedit.htm', 'flip', false, true);
                }
                else if (localStorage.onsubmit == 2) {
                    //go back to new hcp
                    $.mobile.changePage('../hcp/hcpnew.htm', 'flip', false, true);
                }
                else if (localStorage.onsubmit == 3) {
                    //go back to edit hcp
                    $.mobile.changePage('../hcp/hcpedit.htm', 'flip', false, true);
                }
                else if (localStorage.onsubmit == 4) {
                    //go back to edit hcp
                    localStorage.locid2 = newid;
                    localStorage.locid = "";
                    $.mobile.changePage('../hcp/hcpnew.htm', 'flip', false, true);
                }
                else if (localStorage.onsubmit == 5) {
                    //go back to edit hcp
                    localStorage.locid2 = newid;
                    localStorage.locid = "";
                    $.mobile.changePage('../hcp/hcpedit.htm', 'flip', false, true);
                }
            }
            else { //standard procedure
                $.mobile.changePage('practicelist.htm', 'pop', false, true);
            }
        },
        onInsertFail: function () {
            steal.dev.log('practice has not been added');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }
    });
});