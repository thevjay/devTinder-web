# DevTinder

- Create the React app
- Remove unecessary files
- Install Tailwind CSS
- Component UI daisyUI
- Install daisy UI
- Add NavBar component to App.jsx
- Create a NavBar.js separate the component file
- Install react-router-dom
-

- H/W
- - Create BrowserRouter > Routes > Route=/  Body > RouteChildren
- - Create an Outlet in your body Component
- - Create the Footer 

- - install the axios
- - install cors in backend => add middleware to with configurations: origin, credentioals:true
- - Whenever you're making API call so pass { withCreatials: true}
- - Install Redux toolkit -offial doc

- - install react-redux + @reduxjs/toolkit => configureStore => Provider => createSlice => add reducer to store
- - Login and see if your data is coming properly in the store
- - NavBar should update as soon as user logs in
- - Refactor our code to add constants file + create a components folder
- - You should not be access other routes without login
- - If taken is not present, redirect user to login page
- - LogOut feature
- - Profile
- - Get the feed and add the feed in the store
- - build the user card on feed

- - Edit Profile Featues
- - Show Toast Message on save of profile
- - New Page - See all my connections
- - New Page - See all my Connection Requests
- - Feature -Accept/Reject Connection Request

Remainig:
- send/ignore the user card from Feed
- Signu New user
- E2E Testing


- Body 
- - NavBar
- - Router/ => Feed
- - Router=/login => Login
- - Router=/connections => Connections
- - Router=/profile => Profile



















# AWS
## Deployment

- sign up on AWS
- Launch instance
- chmod 400 <secret>.pem
- ssh commad ssh -i "devTinder-secret.pem" ubuntu@ec2-43-204-96-49.ap-south-1.compute.amazonaws.com
- install Node version 20.11.0
- connected to commad

- - Install nvm Node Version 16.7.0
- - node -v
- - Git clone https clone link copy frontend
- - Git clone https clone link copy backend
- ls show folder

# how to run the production
- - once again ssh run
- - cd to go frontend project
- - cd devTinder-web/
- - npm install after
- - npm run build
- - ls
  - - shows folder we can see the dist folder or build folder
  - - we using nginx to host our frontend project
  ## install the nginx
    - - first  install the system dependence ## sudo apt update 
    - - it will update the ubuntu versions
    - - sudo apt install nginx
    - - starting the nginx command
    - - sudo systemctl start nginx
    - - sudo systemctl enable nginx
    - - Copy code from dist(build files) to /var/www/html/
- - after  the commands code in dist folder is contain build files to nginx http server to /var/www/html/
- - for the check the file is existing or not 
- - cd /var/www/html/
- - ls
- - cd 
- - cd devTinder-web/
  - -   `    `      ` :sudo scp -r dist/* /var/www/html/ enter
  - - ls
- - in the instance have public address in aws
- - Enable port :80 of your instance nginx
    - - to go the security settings
    - - we found the security group
    - - click
    - - we found a in the security Inbound rules
    - - we add the ruls
    - - Edit inbound rules
    - - add a rule button
    - - type Custome TCP   range  0.0.0.0 save the rules
- - to use the address to run browser is live the server 

  ## backend
  - - first we go to cd devTinder backend
  - allowed ec2 instance public Ip on mongodb server
  - npm install pm2 -g
  - pm2 start npm -- start
  - pm2 logs
  - pm2 list , pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
  - change the name : pm2 start npm --name "bend" -- start
  - 
  - - npm install 
  - - npm 
      "start": "node server.js",  --> Production level command 
    "dev":"nodemon server.js"     --> development level command
  - - we using npm run start
  - - sudo nano .env
  - - successfull
  - - but it is not work 
  - - Edit inbound rules
  - - custom TCP  port range 7777 allow in 0.0.0.0
  - - after the run server it will run live
  - - then we refresh the server it won't work error
  - - behend the server run the npm start for ever to install the pm2
  - - install the pm2
  - - npm install pm2 -g
  - - via start pm2 to start
  - - command pm2 start npm --start
  - - pm2 start npm -- start is imp
  - - if any errors we see the below command enter
  - - pm2 logs
  - - suppose we clear the error
  - - pm2 flush npm
  - - pm2 list
  - - name of processer to change the name
  - - pm2 stop npm
  - - pm2 delete npm
  - - we can give custom name
  - - pm2 start npm --name "devTinder-backend -- start
  - - 
  ## connect the frontend and backend
  - - Frontend = http://43.204.96.49/
  - - Backend = http://43.204.96.49:7777/

  - - map the domain name = devtinder.com => 43.204.96.49
  - - DNS mapping

  - - Frontend = devtinder.com
  - - Backend = devtinder.com:7777 => devtinder.com/api
  - - 
# Nginx config:
  - - how to edit or access the nginx config file
  - - sudo nano /etc/nginx/
  - - sudo nano /ect/nginx/sites-available/default enter
  - - it will take the config file to the edit
  - - in the config file in side server object 
  - - - we have a [server_name 43.204.96.49]
  - - below the rules
  - - - nginx config
  - - - to add the -> 
        server_name 43:204:96.49;
        location /api/ {
        proxy_pass http://localhost:7777/; # Pass the request to the Node.js app
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
  - - save and exit the config
  - - re start the nginx
  - - - sudo systemctl restart nginx

  - - Modify the BASEURL in frontend project to "/api"

- - long back 
- - in frontend project like devTinder-web and update the local vs code to github
- - devTinder$ -> git pull
- - refresh the serevr is  not work
- - again we do npm run build
- - 

- - sudo scp -r dist/* /var/www/html


# Adding a Custom Domain Name
- GoDaddy Domain  name server
- - go to the GoDaddy purchased the domain name devtinder.in
# # CLOUDFLARE
- - login / signup  and add a new domain name
- - change the nameservers on godaddy and point it to cloudflare
- - wait for sometime till your nameservers are updated
- - DNS record: A devtinder.in 43.204.96.49
- - Enable SSL  for server


- - and dashborad and add a domain name button
- - quick scan for DNS records
- - select 0 free plan
- - set up
- - configure for 




# Real Time Chart using Websocket(Socket.io)
- Build the UI for a chat window on /chat/:targetUserId
- Setup socket.io in backend
- npm i socket.io

- FRONTEND SOCKET SET UP
- npm i socket.io-client
- Initialise the chat
- createSocketConnection
- Listen to events
- HomeWork: improve the UI
- HomeWork: Fix Security Bug - Can i send messages to a person who is not my friend?
- auth in web sockets
- Honework: fix bug - if i'm not friend, then i should not be able to send message

- Homework: feat: Show Green Symbol when online??? - [last Seen 2 hours ago]
- Homework: Limit messages when fetching from DB Pagination
- Project Ideas : Tic tac too game
- Project Ideas : Chess
- 


# After the socket the Production 
- cd devTinder backend code
- git pull
- pm2 list
- npm i
- pm2 list
- pm2 restart 0
- pm2 flushed
- pm2 logs

- cd devTinder-web frontend
- git pull 
- npm i
- npm run build
- sudo scp -r dist/* /var/www/html commad want  reverse search  clt+r

## Frontend
  - npm install -> dependencies install
  - npm run build
  - sudo apt update
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - copy code from dist(build files) to /var/www/html/
  - sudo scp -r dist/* /var/www/html/
  - Enable port 80 your instance 


## Backend
- - update the mongodb password
- - allowed ec2 instance public IP on mongodb server
- - installed npm install pm2 -g
- - pm2  start npm -- start
- - pm2 log
- - pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>



# Sending Emails via SES
- Creat a IAM user
- Give Access to AmazonSESAccess
- Amazon SES: Create an Identity
- Verify your domain name
- Verify an email address identity
- Install AWS SDK -V3
- code Example
- Setup SesClient
- Access Credentials should be created in IAM under Security credentials tab
- Add the creadentials to the env file
- write code for SESClient
- write code for Sending email address
- Make the email dynamic by passing more params to the run function

# Razorpay Payment Gateway Integration
- Sign up on Razorpay & complete KYC
- created a UI for premium page
- Creating an API for create order in backend
- added my key and secret in env file
- Intialized Razorpay in utils
- creating order on Razorpay
- create schema and model
- saved the order in payments collection
- make the API dynamic
- Setup Razorpay webhook on your live API
