const allowedOrigins = [
  /*put where your app domain accessing the backend will go here*/
  "https://www.my-domain-here.com",
  /*take these out after dev*/ "http://127.0.0.1:5500",
  "http://localhost:3500",
];

module.exports = allowedOrigins;
