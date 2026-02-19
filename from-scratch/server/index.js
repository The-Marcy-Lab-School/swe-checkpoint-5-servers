const express = require('express');
const path = require('path');

// TODO: Import your controllers from ./controllers/itemControllers.js


const app = express();

/////////////////////
// Middleware
/////////////////////

// TODO: Create a logRoutes middleware function that logs the method and
// originalUrl of every incoming request, along with the current time.
// Register it with app.use() so it runs for ALL requests.


// TODO: Add the express.json() middleware to parse JSON request bodies.


// TODO: Serve the public/ folder as static assets using express.static()
// Hint: use path.join(__dirname, '..', 'public') to construct the filepath


/////////////////////
// Endpoints
/////////////////////

// TODO: Define RESTful endpoints for managing items.
// You will need endpoints for:
//   - POST   /api/items      → create a new item
//   - GET    /api/items      → get all items
//   - GET    /api/items/:id  → get a single item by ID
//   - PATCH  /api/items/:id  → update an item by ID
//   - DELETE /api/items/:id  → delete an item by ID


const port = 8080;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
