const client = reqire('twilio')(acountSid, authToken);

const twilioNumber = process.env.twilio_number;
const myNumber = process.env.my_number;
let  bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use (bodyParser.json () );

//to send message
const client = newTwilio.RestClient(Account_SID, Auth_Token);
		client.messages
		.create( {
			body: 'Hello there this message is from mr. Dejenes Company',
			to: '+4531888524',
			from: '+4592453492',
		})
		.then(message => console.log(message.body));

 //to receive message
const MessagingResponse = require("twilio").twiml.MessagingResponse;

         app.post('/sms', (req, res) => {
const twiml = new MessagingResponse();
	  twiml.message('Recieving all incoming calls!');

	  res.writeHead(200, {'content-type': 'text/xml'});
      res.end(twiml.toString());
  });