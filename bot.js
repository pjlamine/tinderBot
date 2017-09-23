// password: Mikegetspussy
// email: mike_tinder_mike@outlook.com
// id: 100015521700862
// user token: EAABtx7GVqQQBAH7aZCO3MaflK6L2VxYt5mUkKG87ei5RiplXQhctJrvYL9Gx7OCpwwdGRKGwRZBmsuONB0ajKhvwpZACyQsRGJRMyEZB6Bzieb3KdFnllUN4EvKORTml7aFLGO5gj2n3ox0U120NoBgzRaBvv3eRU7jPeVf1eHHF4WnbCFRUC8f9JpSvWNsZD


var tinder = require('tinderjs');
var client = new tinder.TinderClient();

var userToken = "EAABtx7GVqQQBAMQ6bF2SslQZBw9MZBeBlZAentkdnMWoC5Ovv48xJr67LfSROsieiyfmIOGF4gWYaOUAnKy7ynz1orXTcrOZCfeyYDDJeHvLtdwJXsJZBTPpwcV7Yb2YPFwuJZAwgK7ipPe7bsEhKocBM0NV6h9s1CcdZCXGxZCmrwZDZD";
var userid = "238900436637345";

client.authorize(
  userToken,
  userid,
  function() {
    client.getRecommendations(10, function(error, data){
      console.log(data.results);
    });
  });
// });
