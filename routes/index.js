var express = require('express');
var router = express.Router();
var jwt= require('jsonwebtoken');
var User= require('../models/users').User;
var mySecretKey = "zerDSFSDfefsd";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JWT NodeJS && AngularJS' });
});

router.post("/login", function(req, res, next) {
	
	var credentials = {
		username: req.body.username,
		password: req.body.password
	};
	
	User.findOne(credentials, function(err, user, count) {
		
		if(err)
		{
			return res.status(500).json({
				msg:"Error obteniendo al usuario"
			})
		}
		if(!user)
		{
			return res.status(404).json({
				msg:"Usuario no encontrado"
			})
		}

			var token= jwt.sign(user, mySecretKey);
			return res.status(200).json(token);
	})
});

router.post("/info", function(req, res, next){
	
	var token = null;
	var authorization = req.headers.authorization.split(" ");
	if(authorization.length === 2){
		var key = authorization[0];
		var val = authorization[1];
	
		if(/^Bearer$/i.test(key)){
			token= val.replace(/"/g, "");
			jwt.verify(token, mySecretKey, function(err, decoded){
				if(err)
			{
				res.status(401);
			}else{
				res.status(200).json(decoded);
			}
		})
	}
}else{
	
}	
	res.status(401);
})

module.exports = router;
