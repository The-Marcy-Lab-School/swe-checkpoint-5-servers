// TODO: Import the Pet model


// TODO: Implement each controller function.
// Each controller should:
//   - Parse any needed data from req.params or req.body
//   - Call the appropriate Pet model method
//   - Send the appropriate response with the correct status code

module.exports.createPet = (req, res) => {
  // Parse the name from req.body
  // If name is missing, send a 400 response with an error message
  // Otherwise, create the pet and send a 201 response
};

module.exports.listPets = (req, res) => {
  // Get all pets and send them
};

module.exports.getPet = (req, res) => {
  // Parse the id from req.params (remember to convert to a Number!)
  // If the pet is not found, send a 404 response with an error message
  // Otherwise, send the pet
};

module.exports.updatePet = (req, res) => {
  // Parse the id from req.params and the name from req.body
  // If name is missing, send a 400 response
  // If the pet is not found, send a 404 response
  // Otherwise, send the updated pet
};

module.exports.deletePet = (req, res) => {
  // Parse the id from req.params
  // If the pet is not found, send a 404 response
  // Otherwise, send the deleted pet
};
