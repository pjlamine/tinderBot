var tinder = require('tinderjs');
var client = new tinder.TinderClient();

fb_usertoken = 'EAABtx7GVqQQBAH7aZCO3MaflK6L2VxYt5mUkKG87ei5RiplXQhctJrvYL9Gx7OCpwwdGRKGwRZBmsuONB0ajKhvwpZACyQsRGJRMyEZB6Bzieb3KdFnllUN4EvKORTml7aFLGO5gj2n3ox0U120NoBgzRaBvv3eRU7jPeVf1eHHF4WnbCFRUC8f9JpSvWNsZD';
fb_id = 100015521700862;

var connection = new facebookConnectionFactory.createConnection(accessGrant);
var facebook = connection.getApi();
var fields = new ArrayList;
fields.add([ "id", "email",  "first_name", "last_name" ]);
var userProfile = new User();
userProfile = facebook.fetchObject("me", userProfile.class, fields);

client.authorize(
	fb_usertoken, 
	fb_id,
	function() {
    	client.getRecommendations(10, function(error, data){
      		console.log(data.results);
      	});
    }
);
