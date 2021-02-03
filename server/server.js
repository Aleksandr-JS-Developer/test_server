// test server on express

const express = require( 'express' );
let app = express();
const http = require( 'http' ).Server( app );
let cors = require( 'cors' )();
const bodyParser = require( 'body-parser' );

app.use( cors );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }));

const config = {
	port: 7359
}

app.get('/', ( req, res ) => {
	console.log( 'get "/"' );
	res.status( 200 ).sendFile( __dirname+'/possible_requsets.html' );
});

app.get('/code', ( req, res ) => {
	console.log( 'get "/code"' );
	res.status( 200 ).sendFile( __dirname+'/backend.js' );
});

app.post( '/', ( req, res ) => {
	console.log( 'post "/"' );
	res.status( 200 ).send( req.body );
});

app.post( '/delay:num', ( req, res ) => {
	console.log( `post "/delay${req.params.num}"` );
	setTimeout(()=>{
		res.status( 200 ).send( req.body );
	}, +req.params.num*1000 );
});

http.listen( config.port, () => {
  console.log( `express >>> [${config.port}]\nhttp://127.0.0.1:${config.port}` );
});