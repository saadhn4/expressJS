import express from "express";

const app = express();

const PORT = 5000;

//it has 2 parameters; 1st "routing" 2nd arrow function
//app.get()
//req: You getting data from client
//res: You sending data to client
//clients can be: browser, postman
// / == 192.168.68.54: 5000
// /saad == 192.168.68.54: 5000/saad
app.get("/", (req, res) => {
  try {
    res.send("Hello World");
  } catch (error) {
    console.log(error);
  }
});

app.get("/cfi", (req, res) => {
  try {
    res.send("Hii");
  } catch (error) {
    console.log(error);
  }
});

//it accepts 2 parameters
//1st is port number
//2nd is arrow function
//the variable PORT stores my port number
app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});

//Routing is a path/route to access to in browser

/*

//1. create an express server
//2. access in browser with ip address:PortNumber
//3. IP address can be different, if youre using a different WiFi connection

*/
