steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../models/practice.js',
    '../lib/WebSQL/db.js',
    '../views/hcp_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpAdd', {
    },
    {
        init: function () {


        },
        
        loadData: function () {
            var locsdef = Zoladex.Models.Practice.findAll();
            var params = Zoladex.QSUtils.getParams();
            $.when(locsdef).done(function(locsres) {
                // process view
                var locsid = params.locid ? params.locid : -1;
                var view = $.View('//zoladex/views/hcp_addedit/init.ejs', { id: "",
                    Title: "",
                    FirstName: "",
                    Surname: "",
                    PracticeName: "",
                    Number: "",
                    Email: "",
                    Street: "",
                    Town: "",
                    County: "",
                    Postcode: "",
                    Locs: locsres,
                    LocsId: locsid
                });
                $('#NewHcpForm').html(view).trigger('create');
            });  
        },
        
        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#NewHcpForm').valid()) {
                steal.dev.log('insert hcp form is valid, attempting to save to database...');

                var params = el.formParams();

                var hcpDataStructure = { Title: params.Title, FirstName: params.FirstName, Surname: params.Surname, PracticeName: params.PracticeName, Telephone: params.Telephone, Email: params.Email, Street: params.Street, Town: params.Town, County: params.County, Postcode: params.Postcode };

                new Zoladex.Models.Hcp(hcpDataStructure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }
            return false;
        },
        onInsertSuccess: function (obj,newid) {
            
            var params = Zoladex.QSUtils.getParams();

            if (params.onsubmit) {

                if (params.onsubmit == 0) {
                    //go back to add new appointment
                    $.mobile.changePage('../calendar/patientappointmentnew.htm?hcpid='+newid, 'flip', false, true);
                }
                else if (params.onsubmit == 1) {
                    //go back to edit appointment
                    $.mobile.changePage('../calendar/patientappointmentedit.htm?hcpid='+newid+'&id=' + params.id, 'flip', false, true);
                }
            }
            else { //standard procedure
                $.mobile.changePage('hcplist.htm', 'pop', false, true);
            }
        },
        '#PracticeName change': function () {
            if ($("#PracticeName option:selected").val() == 0) {
                $.mobile.changePage('practicenew.htm?onsubmit=2', 'flip', false, true);
            }
        },
        onInsertFail: function () {

            steal.dev.log('professional has not been added');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }
    });
});