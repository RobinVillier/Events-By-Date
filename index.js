import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://byabbe.se/on-this-day/";
const date = new Date();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
  let { day, month, action } = req.body;
  if (month[0] == 0) month = month [1]

  if (!day) day = date.getDate();
  if (!month) month = date.getMonth() + 1;

  let formatted_date = getDate(day, month)

  try {
    const result = await axios.get(`${API_URL}/${month}/${day}/${action}.json`);
    const data = result["data"][action].reverse()

    res.render("index.ejs", { selectedAction: action, data: data, date: formatted_date});
  } catch (error) {
    console.error(error);
    res.render("index.ejs", { selectedAction: null });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


function getDate (day, month) { 
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    return `${monthNames[month - 1]}, ${day}`;
}