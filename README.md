# Ticket-System-Sequelized

A simple, fullstack web application fully accessible for anyone to use. The applications primary function is to display ticket issues a user enters. The user simply types out their IT issue and hits submit. The issue is then displayed on the application such that IT may view and work on it. Ultimately, after the issue at hand is resolved, IT can complete the task's text on the application. 

If you view my other project, "ticket-system-handlebars-project," you will notice their deployments look exactly the same. This is a good thing since the frontend was meant for replication. The major difference are the technologies employed, specifically Sequelize in this project, and standard MySQL in the other project.

## Usage

**[Please visit the deployed application](https://ticket-system-sequelize.herokuapp.com/)**

Once there, simply type something in the text field, then click submit. You will see it appear in a column to the left. From there, you may hit send, which will make the text appear in a right-hand column. Clicking complete will delete the text from the application. 

## Roadmap

As it stands now, it looks like a primitive landing page. I am hoping to add more details to it in the future such that it has eye-catching design with the backend features it already has in place. My biggest rule on this project is to design it purely with CSS and not Bootstrap (or any other CSS preprocessor). While Bootstrap and CSS preprocessors are generally nice, I am attempting to further my vanilla CSS skills. 

## Technologies Used
* Sequelize
* ES6
* Node
* Express
* Express Handlebars
* MySQL