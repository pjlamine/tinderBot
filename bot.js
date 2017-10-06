

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
