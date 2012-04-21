//steal/js zoladex/scripts/compress.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('zoladex/scripts/build.html',{to: 'zoladex'});
});
