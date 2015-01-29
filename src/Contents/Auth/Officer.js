Officer = {
	login : function(profile,auth_type,cb)
	{
		if (auth_type=="cas") {
			/*
			profile.username
			*/
			if (!profile.username) cb({});
			var mail=profile.username.toLowerCase();
			console.log(mail);
			cb({}});
		};
		
	}
};

module.exports = Officer;