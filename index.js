// src/index.ts

import express from "express";

const app = express();

const port = process.env["PORT"] || 8080;

app.use(express.text());

app.use(express.static("static"));

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

// Homepage
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// GET
app.get("/get", (req, res) => {
  res
    .status(200)
    .header("x-get-header", "get-header-value")
    .send("get-response-from-compute");
});

//POST
app.post("/post", (req, res) => {
  res
    .status(200)
    .header("x-post-header", "post-header-value")
    .send(req.body.toString());
});

//PUT
app.put("/put", (req, res) => {
  res
    .status(200)
    .header("x-put-header", "put-header-value")
    .send(req.body.toString());
});

//PATCH
app.patch("/patch", (req, res) => {
  res
    .status(200)
    .header("x-patch-header", "patch-header-value")
    .send(req.body.toString());
});

// Delete
app.delete("/delete", (req, res) => {
  res.status(200).header("x-delete-header", "delete-header-value").send();
});
