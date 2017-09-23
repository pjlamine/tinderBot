// password: Mikegetspussy
// email: mike_tinder_mike@outlook.com
// id: 100015521700862
// user token: EAABtx7GVqQQBAH7aZCO3MaflK6L2VxYt5mUkKG87ei5RiplXQhctJrvYL9Gx7OCpwwdGRKGwRZBmsuONB0ajKhvwpZACyQsRGJRMyEZB6Bzieb3KdFnllUN4EvKORTml7aFLGO5gj2n3ox0U120NoBgzRaBvv3eRU7jPeVf1eHHF4WnbCFRUC8f9JpSvWNsZD


var tinder = require('tinderjs');
var client = new tinder.TinderClient();

client.authorize(
  <fb user token>,
  <fb user id>,
  function() {
    client.getRecommendations(10, function(error, data){
      console.log(data.results);
    });
  });
});
