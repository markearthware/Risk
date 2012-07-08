//js risk/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
    DocumentJS('risk/risk.html', {
        markdown: ['risk']
	});
});