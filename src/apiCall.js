
export const Api = async () => {

	let OAuth = require('oauth');
	let header = {
		'X-Yahoo-App-Id': 'AJHvMa4i'
	};

	const YAHOO_SECRET_ID = '627c9efe98b99ae2aae69bc6890c09cfb5e38622'
	const YAHOO_CLIENT_ID = 'dj0yJmk9VVlHaFFFQmk2Q0RjJmQ9WVdrOVFVcElkazFoTkdrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWJi'
	
	let request = new OAuth.OAuth(null, null, YAHOO_CLIENT_ID, YAHOO_SECRET_ID, '1.0', null, 'HMAC-SHA1', null, header);

	return request
}







