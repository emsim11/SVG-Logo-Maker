const inquirer = require('inquirer');
const Questions = require('./Questions')
const SetShape = require('./SetShape');
const { writeFile } = require('fs/promises');

class CLI {
    run() {
        return inquirer
            .prompt(Questions)
            .then((answers) => {
                const LogoContent = SetShape(answers);
                writeFile('./Examples/Logo.svg', LogoContent);
            })
            .catch((err) => {
                if(err) {
                    console.log(err);
                    console.log('Oops! An error ocurred while creating Logo file: ', err);
                } else {
                    console.log('Success! The SVG Logo has been generated in the Examples Folder.');
                }
            });
    }
}

module.exports = CLI;