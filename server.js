const express = require("express");
const app = express();
const port = 3000;

// these make handling our data requests easier
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ msg: "Hello, World!" });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:3000`);
});
