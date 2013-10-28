steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/hows.js',
    '../models/controls.js',
    '../lib/WebSQL/db.js',
    '../views/newhazard/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Hazard', {
    },
    {
        init: function () {
            var view = $.View('//risk/views/newhazard/init.ejs');
            $('#NewHazardForm').html(view).trigger('create');
        },
        '.cancel click': function (el) {
            $.mobile.changePage("../hazards.htm", { transition: "none" });
        },
         submit: function (el, ev) {
            ev.preventDefault();
            if ($('#NewHazardForm').valid()) {
                var self = this;
                var hazard = { Name: $('#hazard').val()};
                new Risk.Models.Hazards(hazard).save(function (obj, newid) {
                    localStorage.hazardId = newid;
                    var count = 0;
                    var targetCount = $('.hows input[value!=""]').length + $('.controls input[value!=""]').length;
                    $('.hows input').each(function(){
                        if($(this).val().length > 0){
                            var how = {Name : $(this).val(), HazardId : newid};
                            new Risk.Models.Hows(how).save(function(){
                                count++;
                                if(count == targetCount){
                                $.mobile.changePage("../whos.htm");}
                            });
                        }
                    });
                    $('.controls input').each(function(){
                        if($(this).val().length > 0){
                            var control = {Name : $(this).val(), HazardId : newid};
                            new Risk.Models.Controls(control).save(function(){
                                count++;
                                if(count == targetCount){
                                    $.mobile.changePage("../whos.htm");
                                }
                            });
                        }  
                    });
                });
            }
            return false;
        }
    });
});