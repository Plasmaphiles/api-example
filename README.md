# api-example
An example API for use in the game Plasma

# How to
## Getting started
We're going to set up a simple web server using Node.js and Express. 

Go to [Node.js](https://nodejs.org/) and download the latest (LTS) version, and install. 

I'd recommend using programming software (an IDE) to make things more convenient for you. I recommend [VS Code](https://code.visualstudio.com/), which is free and powerful. 

Once you have everything above installed, you'll make a new directory for your project, and navigate inside of that directory using the terminal. Run the command `npm init -y`
in order to generate the first file you'll need for your project. 

Open up the new `package.json` file and change the `"main"` value from `"index.js"` to `"server.js"`. 

Now make a file in our current directory named `server.js`. Inside that file, put the following code:
```javascript
console.log("Hello, World!")
```

After saving your changes, you should be able to run the following command in your terminal and get the accompanying response: 
```bash
node server.js
# Hello, World!
```

Once you have that displaying in your terminal, you are ready to create your first web server!

## Installing and Setting up Express
Node.js is the software that allows us to run Javascript locally on our computer and gives us access to many packages using a built-in tool called `NPM` which was installed alongside `Node.js`. `NPM` is similar to tools like Homebrew and Python's `PIP`. 

Express is the package we'll be using to turn our Node program into an actual web server running on our machine. We can install it as simply as running `npm install express` in the terminal. 

Once you have Express installed, paste the following code inside of `server.js` (replacing the `console.log`):
```js
const express = require('express'); // import express
const app = express(); // declare our app variable
const port = 3000; // declare our port variable

// these make handling our data requests easier
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// This actually starts the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
```

After saving your changes, run `node server.js` again. If you get `Server is running on port http://localhost:3000`, then congrats! You've correctly set up your first web server. Next will be making it do something. Use `Ctrl-C` to kill the server in your teminal. 

## Making It Do Something
In order to make our server do something, we will need to add some routes for it to listen to. Let's follow that link our terminal gave us, by going to [http://localhost:3000](http://localhost:3000) in our browser. You should see `Cannot GET /`. That is because we haven't set up any routes yet! So we'll make the `'/'` route (which is the default or home route) first,

Add the following to your code under the last `app.use()`:
```js
app.get("/", (req, res) => {
  res.send({ msg: "Hello, World!" });
});
```

Now if you kill your server in the terminal and run `node server.js` again, when you refresh your webpage you should see something like `{"msg":"Hello, World!"}`. This means that you've successfully set up your first route! Let's try adding a few more. 