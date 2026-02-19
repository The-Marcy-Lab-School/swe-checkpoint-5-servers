// TODO: Import the Item model


// TODO: Implement each controller function.
// Each controller should:
//   - Parse any needed data from req.params or req.body
//   - Call the appropriate Item model method
//   - Send the appropriate response with the correct status code

const createItem = (req, res) => {
  // Parse the name from req.body
  // If name is missing, send a 400 response with an error message
  // Otherwise, create the item and send a 201 response
};

const listItems = (req, res) => {
  // Get all items and send them
};

const getItem = (req, res) => {
  // Parse the id from req.params (remember to convert to a Number!)
  // If the item is not found, send a 404 response with an error message
  // Otherwise, send the item
};

const updateItem = (req, res) => {
  // Parse the id from req.params and the name from req.body
  // If name is missing, send a 400 response
  // If the item is not found, send a 404 response
  // Otherwise, send the updated item
};

const deleteItem = (req, res) => {
  // Parse the id from req.params
  // If the item is not found, send a 404 response
  // Otherwise, send the deleted item
};

module.exports = {
  createItem,
  listItems,
  getItem,
  updateItem,
  deleteItem,
};
