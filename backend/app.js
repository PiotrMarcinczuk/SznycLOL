const express = require("express");
const axios = require("axios");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const allowedOrigins = process.env.ALLOWED_ORIGINS;
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin, like mobile apps or curl requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(bodyParser.json());
const baseUrl = "https://europe.api.riotgames.com";
const http = axios.create({
  headers: {
    "X-Riot-Token": process.env.RIOT_API_KEY,
  },
});
app.post("/api/getPuuid", async (req, res) => {
  const { nickname, tag } = req.body;
  try {
    const response = await http.get(
      `${baseUrl}/riot/account/v1/accounts/by-riot-id/${nickname}/${tag}`
    );
    res.json(response.data);
  } catch (e) {
    res.status(e.response ? e.response.status : 500).json({
      message: "Error while fetching puuid from Riot API",
      error: e.message,
    });
  }
});

app.post("/api/getChampionMastery", async (req, res) => {
  const { puuid, region } = req.body;
  let tempRegion = region;
  if (region === "EUNE") tempRegion = "eun1";
  if (region === "EUW") tempRegion = "euw1";

  try {
    const response = await http.get(
      `https://${tempRegion}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`
    );
    res.json(response.data);
  } catch (e) {
    res.status(e.response ? e.response.status : 500).json({
      message: "Error while fetching champion mastery from Riot API",
      error: e.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
