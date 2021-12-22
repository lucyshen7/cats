const fs = require('fs'); // async control flow

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  // console.log('breedDetailsFromFile calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's callback. It has the data.");
    if (!error) {
      functionToRunWhenThingsAreDone(data); // Pass data into callback instead of returning it directly
    }
    if (error) {
      functionToRunWhenThingsAreDone(null);
    }
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed); // print out details correctly.
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed); // pass two arguments into breedDetailsFromFile: breed string and a callback function

module.exports = breedDetailsFromFile;