![Allergenius: Allergic Reaction Logging App](client/src/assets/images/allergenius_logo_gold.png) 

## Intro
[Allergenius](https://allergenius-demo.herokuapp.com) is an allergic reaction logging app designed to allow users to track symptoms as well as foods they have consumed. Users can then share this information with a healthcare professional in order to facilitate a diagnosis of what food(s) they are allergic to.  
  
## Design Process
At the begining of our design process, we decided which features would be part of our MVP (most viable product) and which features would be part of Phase 2 or Phase 3 of development. Github Projects was used in order to create the tasks that all the team members worked on.  
  
## Individual Contributions
Although we all helped in nearlye very area of the app, our main duties includes:
- [Erin Clancy](https://github.com/noplanetnoparty): User authentication, Heroku setup, debugging, and styling.
- [Kayla Himmelberger](https://github.com/kaylahimmel): React components and forms, documentation, debugging, and styling.
- [Sarah Lopriore](https://github.com/sarahlopriore): React pages, implementing the reaction calendar, Heroku setup, and debugging.
- [Nicholette Sams](https://github.com/nicholettesams): backend MySQL schema, routes, documentation, debugging, and implementing the calendar export to CSV functionality.
  
## Technologies Used
- [HTML5](developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Bootstrap](https://getbootstrap.com)
- [Javascript](https://www.javascript.com)
- [Express.js](https://expressjs.com)
- [Node.js](https://nodejs.org/en/docs)
- [React.js](https://reactjs.org)
- [Moment.js](http://momentjs.com)
- [MySQL](https://github.com/mysqljs/mysql#readme)
- [Sequelize](https://github.com/sequelize/sequelize#readme)
- [JSON Web Tokens](https://jwt.io)
- [Bcrypt package](https://github.com/kelektiv/node.bcrypt.js#readme)
- [Axios package](https://github.com/axios/axios) 
- [Express Router](https://github.com/mciparelli/express-router#readme)
- [Cors](https://github.com/expressjs/cors#readme)
- [BodyParser](https://github.com/expressjs/body-parser#readme)
- [DotEnv](https://github.com/motdotla/dotenv#readme)
- [Github Projects](https://help.github.com/articles/about-project-boards)  
  
## Using Allergenius

#### Register and Sign In
Visit [Allergenius](https://allergenius-demo.herokuapp.com) and register for an account. For authentication purposes, sign in immediately after registration is required.

![](client/src/assets/gifs/register+sign_in.gif)  

#### Setup Profile
After signing in, you will be automatically redirected to your profile setup page.  Add your name and any known food allergies.

![](client/src/assets/gifs/profile_setup.gif)  

#### Edit Profile Information
After initial setup, you can update your profile information as needed by clicking the "My Profile" link in the navigation bar.

![](client/src/assets/gifs/profile_edit.gif)  

#### Adding Reactions
Select "Add Reaction" from the navigation bar or click the "Add Reaction" button on the home page.  Fill out the form with the details about your reaction and click "Submit".

![](client/src/assets/gifs/reaction_add.gif)  

#### Viewing Reactions
Once submitted, your reaction will then appear on the home page calendar.  Use the calendar to view reactions by month, week or day.  To view the details of a reaction, click on the reaction in the calendar.  If needed, you can delete the reaction, then click the "Back" button to return to the home page calendar.  Select "Home" from the navigation bar at any time to return to the home 

![](client/src/assets/gifs/reaction_view+delete.gif)  

#### Exporting Reactions
On the home page, click the "Export Reactions to .CSV" button to export all reactions entered to a comma delimited file. (For easiest viewing, open with Microsoft Excel, Google Sheets, Open Office Calc, or similar program.)

![](client/src/assets/gifs/download.gif)  
  
## Future Development
Our thoughts for future development include:
- incorporating MyFitnessPal and/or other third-party APIs to automatically pull in user's food intake and activity data rather than asking the user to input those manually
- adding the option to export reactions to PDF as well as CSV
- styling the CSV and PDF exports in a more readable format
- creating filter options for the calendar export option so that users can choose a date range to export as well as the ability to export all reactions
- adding the ability to upload photos of reactions to be included in the exported file for medical professionals
- building a graph of reactions so user can see patterns over time
- adding the option to modify reactions as well as delete them
- including notification functionality that asks the user 4 hours after logging a reaction whether they are still experiencing the symptoms
- allowing the user to delete their profile and all data from the app
- adding a resources section that includes educational tips and links to external sites
- changing the logic so users can rate the severity of each type of symptom they're experiencing rather than give an overall severity rating
- incorporating sliding range bars rather than radio buttons for better UX