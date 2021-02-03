const port = 7359;
const ip = '127.0.0.1';
const _server = `http://${ip}:${port}`;
const _headers = {
    'Access-Control-Allow-Hseaders': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
    'Access-Control-Allow-Origin': 'no-cors',
    'Content-Type': 'application/json'
}
export const request = async ( url, method = 'GET', data = null ) => {
    try {
        let body;
        if ( data !== null ) {
            body = JSON.stringify( data );
        }
        const response = await fetch( _server + url, {
            method,
            headers: _headers,
            body
        });
        return await response.text();
    } catch ( e ) {
        console.warn( e );
    }
}

export default request;