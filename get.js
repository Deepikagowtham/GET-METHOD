http = require('http');
url = require('url');
querystring = require('querystring');

function sam(request, response) {
    if (request.url.includes('/login')) {
        console.log('URL ' + request.url + ' received.');

        var path = url.parse(request.url).pathname;
        console.log('Request for ' + path + ' received.');
        var query = url.parse(request.url).query;
        console.log("QUERY IS:");
        console.log(query);

        qs = querystring.parse(query);
        console.log("QS IS:");
        console.log(qs);
        var name = qs["username"];
        var email = qs["email"];
        var mobile = qs["mobile"];
        var age = qs["age"];

        response.write('<html><head><title>Registration Confirmation</title><style>body {font-family: Arial, sans-serif;background-image: url("https://i.pinimg.com/564x/a0/7d/a3/a07da3b4654f09734a370932cba6ce6d.jpg");background-size: cover;}</style></head><body>');
        response.write("<h1 style='color: white; text-align: center;'>Registration Successful</h1>");
        response.write("<br><br><h3 style='color: white;'>WELCOME " + name + "</h3>");
        response.write("<br><p style='color: white;'><strong>" + name + "</strong>, of age <strong>" + age + "</strong>, with email id <strong>" + email + "</strong> has been registered successfully with your mobile number: <strong>" + mobile + "</strong></p>");
        response.write('</body></html>');
        response.end();
    } else {}
}
http.createServer(sam).listen(8888);
console.log('Server has Started…….');
