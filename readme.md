# Where Did Those Arches Come From?

## git workflow

* Clone the repository using ~~SourceTree~~ the github desktop app. Once you have a local clone of the repository follow a strict workflow:
* Before you start working make sure you do not have any unstaged or uncommited files. 
* Create a new Branch to work on.
* Once you are happy stage all your files and then commit all your files.
* If you want to save these or share them with someone else using github, then push the new branch to the remote
* if you want the changes to be on the master branch, then checkout master and merge your previous branch into master.
* now push master to the remote.

## Running the server.
Open a command prompt (windows > command.exe), navigate to the `noonan-site` folder and run command `npm start`. This will start the node server.

Open a web browser and navigate to http://localhost:3000 and you should be up and running.