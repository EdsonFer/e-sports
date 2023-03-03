import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  console.log("alo");
});

app.listen(3333);
