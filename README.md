# Multilanguage-Micro-Front-End

To whom it may concern,

I'd like to inform you that it is a pleasure to develop and help others to make Micro Front End culture much vaster.

"An architectural style where independently deliverable frontend applications are composed into a greater whole" is a definition of Micro Front End. In a simpler way of telling, each section of your website is an independent application.
I have used three languages including English, German, and Persian by i18next technology to parse languages through all applications. Also all the applications are dockerized to be used in an easier way. Make sure you are proficient in Webpack to develop this project.

Some points you have to know before using project:
- Each Application has its own branch. (Although it's good for development, but if you wanted to do the project in production mode, each application should have their own repository! Not branch.)
- If you would like to go on docker, make sure run these commands:
	-> docker build -t multilanguage_mf
	-> docker run -d -p 3000:3000 --name multilanguage_mf_app multilanguage_mf 
	(You may ask what is "-p 3000:3000" part? Actually, the number of the ports shouldn't be 3000. They are all your choice. The first port is the gateway that traffic comes to our local machine.The second port is the gateway that traffic 		comes to our Docker platform. The reason that we are doing this, is that Docker does not know anything outside itself.)
- Make sure to run npm i npm start for each application.
- Most importantly, make sure you run all the application before "appholder". Appholder should be the last application you run.

Thanks for your time and considaration, feel free to ask any questions.
Sincerely.
