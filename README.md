# Multilanguage-Micro-Front-End

To whom it may concern,

This project is a sample of how Micro Frontend environment works. 

"Micro Frontend is a type of architecture where a web application is divided into different modules"

A definition of Micro Frontend. In a simpler way, each section of a website or React component would be able to be a single application, with its own frontend and backend.

In this project, I have used i18next technology to bring three languages including Persian, English, and German to the project and parse them through all the applications. Each app is dockerized to be used easier (Because you need to run npm i npm start in all the apps).

If you would like to go on docker, make sure to run these commands:
- -> docker build -t multilanguage_mf
- -> docker run -d -p 3000:3000 --name multilanguage_mf_app multilanguage_mf 
- (The number of ports shouldn't be 3000 but could be. They are all your choice. The first port is the gateway that traffic comes to our local machine. The second port is the gateway where traffic comes to our Docker platform. The reason that we are doing this, is that Docker does not know anything outside itself.)

To work with Micro Frontend and manage the environment, you need to be professional at Webpack bundler. Make sure to read each app's webpack.config.js to understand the project better.

Each application should have its own repository or domain in deployment mode!

Make sure to run npm i npm start for each application. (Each app should be up on the a port or domain).

Most importantly, make sure you run all the applications before "appHolder". AppHolder should be the last application you must run.


Thanks for your time and considaration, feel free to ask any questions.
Sincerely.
