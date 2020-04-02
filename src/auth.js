import history from './history';
var ClientOAuth2 = require('client-oauth2')

export default class Auth {
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
		//===================client-oauth2
		var self = this;
		this.auth0.credentials.getToken()
		.then(function (user) {
		console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }
		self.credentials.accessToken = user.accessToken
		self.credentials.tokenType = user.tokenType
		self.credentials.expiresIn = user.expires
		history.replace('/callback');
		})
		.catch(err => {
			console.error(err);
		})
	}
	//===================client-oauth2

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