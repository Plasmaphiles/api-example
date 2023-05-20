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

Now you should be able to run the following command in your terminal and get the accompanying response: 
```bash
$ node server.js
Hello, World!
```

Once you have that displaying in your terminal, you are ready to create your first web server!

## Installing and Setting up Express
Node.js is the software that allows us to run Javascript locally on our computer and gives us access to many packages using a built-in tool called `NPM` which was installed alongside `Node.js`. `NPM` is similar to tools like Homebrew and Python's `PIP`. 

Express is the package we'll be using to turn our Node program into an actual web server running on our machine. We can install it as simply as running `npm install express` in the terminal. 

Once you have Express installed, paste the following code inside of `server.js` (replacing the `console.log`):
```js
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
```

After saving your changes, run `node server.js` again. If you get `Server is running on port 3000!`, then congrats! You've correctly set up your first web server. Next will be making it do something. 