const custom404 = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>404 - Not Found</title>
  <style>
    body {
      background-color: #f8f8f8;
      text-align: center;
      font-family: sans-serif;
      padding: 5rem;
    }
    h1 {
      font-size: 5rem;
      margin-bottom: 1rem;
      color: #ff4c4c;
    }
    p {
      font-size: 1.5rem;
      color: #555;
    }
    a {
      display: inline-block;
      margin-top: 2rem;
      padding: 10px 20px;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
    }
    a:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
  <h1>404</h1>
  <p>Sorry, the page you are looking for does not exist.</p>
  <a href="/">Go Back Home</a>
</body>
</html>
`;
module.exports = custom404