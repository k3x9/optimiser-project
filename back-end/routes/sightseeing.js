const router = require("express").Router();
const keys = require("../keys.json");
const { google } = require("googleapis");

router.post("/register", async (req, res) => {
  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  const gsapi = google.sheets({ version: "v4", auth: client });

  const values = [];
  const newEntry = [];
  const obj = req.body;
  for(var i in obj) newEntry.push(obj[i]);

  values.push(newEntry);

  const resource = {
    values,
  }

  const add = {
    spreadsheetId: "1Fv3dUpOXdrgXnjZA0liaIlvplp6DifcIjP9E2sdoWY4",
    range: "Sightseeing!A1",
    valueInputOption: "USER_ENTERED",
    resource,
  };

  try {
    const result = await gsapi.spreadsheets.values.append(add);
    console.log(`${result.data.updates.updatedCells} cells appended.`);
    res.json({ success: "Successfully registered" });
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
});

module.exports = router;
