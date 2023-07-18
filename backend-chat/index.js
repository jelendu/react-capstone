const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "3f68f557-71e5-437d-8b5b-0af0be7bdb35" } }
    );
    return res.status(r.status).json(r.data);
  } catch (err) {
    if (err.response) {
      return res.status(err.response.status).json(err.response.data);
    } else {

      return res.status(500).json({ message: "An error occurred" });
    }
  }
});

app.listen(3001);
