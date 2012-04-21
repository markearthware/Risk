//js zoladex/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('zoladex/zoladex.html', {
		markdown : ['zoladex']
	});
});