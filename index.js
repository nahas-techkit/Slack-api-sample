const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    const { data } = await axios.post(
      "https://hooks.slack.com/services/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",
      {
        text: message,
      }
    );
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});


app.get("/", async (req, res) => {
  try {
    const { message } = req.body;
    const { data } = await axios.get(
      "https://hooks.slack.com/services/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/users.list",
      {
        text: message,
      }
    );
    console.log(data);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.listen(3001, () => {
  console.log("connected");
});
