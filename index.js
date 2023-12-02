// TODO: Include packages needed for this application
// Inquirer (node package manager) import
const inquirer = require("inquirer");
// File system module (node package manager) import
const fs = require("fs");
// Importing classes from ./lib/shapes directory
const {Circle, Square, Triangle} = require("./lib/shapes.js");

//scnconst { writeFile } = require("fs/promises");

//const questions = [
//    function init(){

// TODO: Create an array of questions for user input
function generateLogo() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "Please enter up to 3 characters that will be displayed on the logo:",
        name: "text",
        // CHECKING TEXT INPUT 
        validate: function (textLogo) {
          if (textLogo.length <= 3 && textLogo.length !== 0) {
            return true;
          } else if (textLogo.length === 0) {
            console.log("Please enter 1 to 3 characters");
            return false;
          } else {
            console.log("Please enter no more than 3 characters");
            return false;
          }
        },
      },
      {
        type: "input",
        message:
          "Please select a COLOR or HEXADECIMAL code for the TEXT that is displayed on the logo:",
        name: "textColor",
      },
      {
        type: "input",
        message:
          "Please select a COLOR or HEXADECIMAL code for the SHAPE fill color that is displayed for the logo:",
        name: "shapeColor",
      },
      {
        type: "list",
        message:
          "Please select a SHAPE from the list below using the down arrow key and strike enter:",
        name: "shape",
        choices: ["Square", "Circle", "Triangle"],
      },
    ])
    .then((response) => {
      let img;
      switch (response.shape) {
        case "Square":
          img=new Square(
            response.text, response.textColor, response.shapeColor
          );
          
          break;
        case "Triangle":
          img=new Triangle(
            response.text, response.textColor, response.shapeColor
          );
          
          break;
        case "Circle":
          img=new Circle(
            response.text, response.textColor, response.shapeColor
          );
          
          break;
      
        default:
          break;
      }
      const final = img.render();
      console.log(response);
      writeToFile(`./Examples/${response.shape}.svg`,final) 
    });

  // TODO: Create a function to write the data input to a  file


  function writeToFile(fileName, data) {
    //console.log("Writing [" + data + "] to file [" + fileName + "]");
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Generate logo  is WORKING!!");
      return;
    });
  }
}

// Function call to generate logo app
generateLogo();
