// load('zoladex/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("zoladex/zoladex.html","zoladex/out")
});
