To run the application successfully: 
1. git-clone <respository address> in your command terminal in your desired file destination

2. open your cloned repository with any IDE as per your wish.

3. then open your normal terminal or integrated IDE terminal and type command "npm install". This will install all the required dependencies that are mentioned in 'package.json' file.
This might take some time depending on your internet connection.

4. Perform step 3 in 'backend' folder. Make sure that your command terminal is pointing toward the backend folder like '/backend'. Repeat step 3.

5. Now in backend folder create '.env' file (Remember: No name of file, just .env only).

6. Then you can add your person credential of databases or authentication key.

7. Now to connect your database with your application backend, firstly create mongoDb cluster on official MongoDb atlas. You will be creating a new user along with password, then after creating cluster, just go to connect option in main UI and extract the URL of your cluster, there is a section <password> ; replace it with your user password.

8. For google authentication ID, refer video related to : Connecting google OAuth authentication with react.
