load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('risk/scripts/build.html',{to: 'risk'});
});
