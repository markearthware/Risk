steal("funcunit").then(
    "./cleanup_test.js"
)
 .then(
            "./hcpTests/hcpadd_test.js"
).then(
            "./hcpTests/practiceadd_test.js"
).then(
            "./patientappointmentTests/patientappointmentadd_test.js",


            "./progressTests/psaTests/psalevelsadd_test.js",

            
            "./progressTests/symptomTests/symptomadd_test.js"
).then(

// all the add tests have to have run first for edit / delete to work
            
            "./patientappointmentTests/patientappointmentedit_test.js",
             "./navBarTests/hcpbutton_test.js",
            "./navBarTests/calendarbutton_test.js",
            "./navBarTests/progressbutton_test.js",
            "./navBarTests/supportbutton_test.js",



//hcp tests
            "./hcpTests/practicelistbutton_test.js",
//"./hcpTests/practicelocalstorage_test.js",
            "./hcpTests/practiceedit_test.js",
            
            "./hcpTests/practicedetailspage_test.js",
            


            "./progressTests/symptomTests/symptomlist_test.js",

            "./progressTests/symptomTests/symptomedit_test.js",


            "./progressTests/psaTests/psalevels_test.js",


            "./hcpTests/hcplistbutton_test.js",
            
            "./hcpTests/hcpdetailspage_test.js",

            "./hcpTests/hcpedit_test.js"
).then(          
            "./hcpTests/practicedelete_test.js",
            "./patientappointmentTests/patientappointmentdelete_test.js",
            "./hcpTests/hcpdelete_test.js"
);