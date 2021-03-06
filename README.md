# hospital_system

This project is built with React, Node.js and Oracle Autonomous Database.

## How To Run This Project 

Open the terminal, clone the repository to your computer by executing 
`git clone https://github.com/shiyunlian/hospital_system.git`

Follow the instructions below to download Oracle instant client to your computer and modify the path of the client in index.js in the server folder if necessary:
https://docs.google.com/document/d/1Zo0S7QFLrWXvEcEAAirp4IrvEJjxkdcFQPxCCmfJ8sw/edit?usp=sharing

Note: the Oracle Autonomous Database used in this project is set up in the Oracle Cloud with a 30 days free trial access. The expiration date is 8/12/2021. After expiration date, you need to set up your own Oracle Autonomous Database in the Oracle Cloud, follow the instructions here: https://www.oracle.com/database/technologies/appdev/quickstartnodejs.html#windows-tab and modify the connection attributes and client path in index.js in server folder, then populate the data to your Oracle Autonomous Database using the sql files (createTable.sql and populateData.sql) in the db folder from server folder. 

Execute `cd hospital_system` to get into the project directory. To run the project properly, you need to start the server first, then start the client.

To run server side, execute `cd server` to get into the server directory, execute `npm i` to install the required dependencies, execute `npm start`

To run client side, execute `cd client` to get into the client directory, execute `npm i` to install the required dependencies, execute `npm start`

The demo can be viewed here: https://drive.google.com/file/d/1VfFSuSl80JTJlvibo4uLEpWlom18Pkj9/view?usp=sharing


## Division of work

https://docs.google.com/document/d/1bPy1zE5PnfrTF63Dy_T4Y0mqN1PgBk35sJe-V50cIlg/edit?usp=sharing
