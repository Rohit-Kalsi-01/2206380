const express = require('express');
const app = express();

// ✅ Logging Middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${url}`);
  next(); // Pass control to next middleware or route
};

// ✅ Use the middleware
app.use(logger);

// ✅ Sample route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});