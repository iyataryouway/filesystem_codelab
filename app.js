//Testing GitHub Desktop

//Import the Express and FS modules
const express = require('express');
const fs = require('fs').promises;

//Create an Express application and define the port number for the server as 2000
const app = express();
const PORT = 2000;

//Create route handler of app.js's root
app.get("/", async (req, res) => {

    try{
        //Get the content of external file
        //"example.txt" is the file being read by the fs module
        const data = await fs.readFile("example.txt", "utf-8");
        res.send(data);

        //Send the contents of file "example.txt" as response
    } catch(error){
        console.error('Error reading file:', error);
        res.status(500).send("Internal Server Error");
    }
});

//Initialize the server and listen on port specified above
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});  