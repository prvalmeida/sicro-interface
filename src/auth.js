// import auth0 from 'auth0-js';
import history from './history';

// var http = require('http')
// var querystring = require ('query-string')
var ClientOAuth2 = require('client-oauth2')

export default class Auth {
//===================auth0-js
//   Please use your own credentials here
//   auth0 = new auth0.WebAuth({
//     domain: 'protected-atoll-74095.herokuapp.com/o/',
// 	clientID: 'H5jZEvO12CCCurMFgc1dSnWFcMneYEJhCBj2Tjn2',
// 	redirectUri: 'https://protected-atoll-74095.herokuapp.com/o/token/',
//     //redirectUri: process.env.NODE_ENV === 'development' ? '' : 'https://appbaseio-apps.github.io/reactivesearch-auth0-example/callback',
//     // audience: 'https://divyanshu.auth0.com/userinfo',
// 	responseType: 'token',
// 	// responseMode: 'form_post',
// 	scope: 'read',
//   });
	// auth = false;
//===================auth0-js

//===================simple-oauth2
	// credentials = {
	// 	client: {
	// 	  id: 'H5jZEvO12CCCurMFgc1dSnWFcMneYEJhCBj2Tjn2',
	// 	  secret: 'TwCW5jGmjE1QKIhIseLQ3aSLfw1WJT7e3GwIhNLKMS8BjhgV30vohvxG55chT9lCD1GBtvM0lE3v03UIdV0JOgMhTIcb9IFktBmSTBSEILrz6nbfeKPKDVOe3N5sEQv2'
	// 	},
	// 	auth: {
	// 	  tokenHost: 'https://protected-atoll-74095.herokuapp.com',
	// 	  tokenPath: '/o/token/'
	// 	}
	//   };

	// run = async ()  => {
	// 	console.log(`this.credentials: ${JSON.stringify(this.credentials)}`)
	// 	const oauth2 = require('simple-oauth2').create(this.credentials);
	// 	console.log(`auth0: ${JSON.stringify(oauth2)}`)
		
	// 	const tokenConfig = {
	// 		username: 'admin',
	// 		password: 'trabalho123',
	// 	};
		
	// 	try {
	// 		const result = await oauth2.ownerPassword.getToken(tokenConfig);
	// 		console.log(result)
	// 		const accessToken = oauth2.accessToken.create(result);
	// 	} catch (error) {
	// 		console.log('Access Token Error', error.message);
	// 		console.log('stack:', error.stack);
	// 	}
	// }
	//===================simple-oauth2

	//===================client-oauth2
	auth0 = new ClientOAuth2({
		clientId: 'H5jZEvO12CCCurMFgc1dSnWFcMneYEJhCBj2Tjn2',
		clientSecret: 'TwCW5jGmjE1QKIhIseLQ3aSLfw1WJT7e3GwIhNLKMS8BjhgV30vohvxG55chT9lCD1GBtvM0lE3v03UIdV0JOgMhTIcb9IFktBmSTBSEILrz6nbfeKPKDVOe3N5sEQv2',
		accessTokenUri: 'https://protected-atoll-74095.herokuapp.com/o/token/',
		scopes: ['read', 'write']
	  })
	
	credentials = {}
	//===================client-oauth2

	   
  login = () => {
	console.log(`login started!!`)
	//===================simple-oauth2
	// await this.run()
	//===================simple-oauth2

	//===================http-request
	// const req = http.request(this.options, (res) => {
	// 	console.log(`STATUS: ${res.statusCode}`);
	// 	console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
	// 	res.setEncoding('utf8');
	// 	res.on('data', (chunk) => {
	// 	  console.log(`BODY: ${chunk}`);
	// 	});
	// 	res.on('end', () => {
	// 	  console.log('No more data in response.');
	// 	});
	//   });
	  
	//   req.on('error', (e) => {
	// 	console.error(`problem with request: ${e.message}`);
	//   });
	//   req.write('https://protected-atoll-74095.herokuapp.com/o/token', this.postData);
	//   req.end();
	//===================http-request

	// history.replace('/callback');

	//===================auth0-js
	// console.log(`this.auth0: ${this.auth0}`)
	// this.auth0.authorize();
	//===================auth0-js

	//===================client-oauth2
	var self = this;
	this.auth0.credentials.getToken()
	.then(function (user) {
	  console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }
	//   console.log (user.expiresIn())
	  self.credentials.accessToken = user.accessToken
	  self.credentials.tokenType = user.tokenType
	  self.credentials.expiresIn = user.expires
	  history.replace('/callback');
	})
	//===================client-oauth2
  }

  // parses the result after authentication from URL hash
  handleAuthentication = () => {
	  //===================auth0-js
    // this.auth0.parseHash((err, authResult) => {
	//   console.log(`authResult: ${JSON.stringify(authResult)}`)
    //   if (authResult && authResult.accessToken && authResult.idToken) {
    //     this.setSession(authResult);
    //     history.replace('/home');
    //   } else if (err) {
    //     history.replace('/home');
    //     console.log(err);
    //   }
	// });
	//===================auth0-js

	//===================client-oauth2
	this.setSession(this.credentials);
	//===================client-oauth2

	console.log("handleAuthentication")
  }

  // Sets user details in localStorage
  setSession = (authResult) => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
	history.replace('/home');
	//===================client-oauth2
  }

  // removes user details from localStorage
  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
	history.replace('/home');
  }

  // checks if the user is authenticated
  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
	return new Date().getTime() < expiresAt;
	// console.log(this.auth)
	// return this.auth
  }
}