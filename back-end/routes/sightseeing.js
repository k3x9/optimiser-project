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

router.post("/search", async (req, res) => {
  function getLatitude_Longitude(url) {
    const regex = /cp=([^~]+)~([^&]+)/;
    const match = url.match(regex);
    if (match && match.length >= 3) {
      const latitude = parseFloat(match[1]);
      const longitude = parseFloat(match[2]);
      return { latitude, longitude }; 
    }
    return null;
  }

  async function getCoordinates(searchQuery) {
      return new Promise((resolve, reject) => {
      const val = getLatitude_Longitude(searchQuery);
      if(val != null){
          resolve(val);
          return;
      }
      const apiKey = 'AsuibzSItSJ_ZJ5VJXuND9tchNXu-VttAfuDvkrOt-xrFHbfY3Ax6mdAio8bEZ1H';
      let encode = encodeURIComponent(searchQuery);
      const url = 'https://dev.virtualearth.net/REST/v1/Locations?query='+encode+'&key='+apiKey;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.resourceSets.length > 0 && data.resourceSets[0].resources.length > 0) {
          const location = data.resourceSets[0].resources[0].point.coordinates;
          const latitude = location[0];
          const longitude = location[1];
          resolve({latitude, longitude});
        } else {
          alert('No result');
        }
      })
      .catch(error => {
        alert('Error: '+error);
      });
      });
  }

  async function go(op1, op2, op3){
    return new Promise((resolve, reject) => {
      const location_url = op1;
      const time_req = op2;
      const money_left = op3;

      var money_column = 3;
      var rating_column = 2;
      var location_column = 1;

      getCoordinates(location_url).then((l) => {
      var origins = [{'latitude': l.latitude, 'longitude': l.longitude}];
      const apiKey = 'AIzaSyAH40WbN-BiJgoquzgWw3_hPzuM6VMdZ4c';
      const spreadsheetId = '1Fv3dUpOXdrgXnjZA0liaIlvplp6DifcIjP9E2sdoWY4';
      const range = 'Sightseeing';
      var data = [];
      var destinations = [];
      async function getData() {
      try {
          const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/' + range + '?key=' + apiKey;
          await fetch(url).then(response => {
              if (response.ok) {
              return response.json();
              }
          })
          .then(datas => {
              const rows = datas.values;
              if (rows.length) {
              rows.forEach((row) => {
                  if(row[location_column] != 'Location'){
                      data.push(row);
                      let lalon = getLatitude_Longitude(row[location_column]);
                      destinations.push({'latitude': lalon.latitude, 'longitude': lalon.longitude});
                      data[data.length-1].push(lalon.latitude);
                      data[data.length-1].push(lalon.longitude);
                      data[data.length-1][money_column] = parseFloat(data[data.length-1][money_column]);
                      data[data.length-1][rating_column] = parseFloat(data[data.length-1][rating_column]);
                  }
              });

              } else {
              alert('No data found.');
              }
          })
          .catch(error => {
              alert('Error:', error.message);
          });
          
      } catch (error) {
          alert('Error retrieving data from the spreadsheet:', error.message);
      }
      }
      getData().then(() => {
          const post_data = {
              origins: origins,
              destinations: destinations,
              travelMode: 'driving',
              timeUnit: 'minute',
          };
          
          const api_key = 'AsuibzSItSJ_ZJ5VJXuND9tchNXu-VttAfuDvkrOt-xrFHbfY3Ax6mdAio8bEZ1H'
          const apiEndpoint = 'https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?key='+api_key;
      
          fetch(apiEndpoint, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(post_data)
          }).then(response => response.json()).then(distance_matrix => {
              var result = distance_matrix['resourceSets'][0]['resources'][0]['results'];
              const indices = Array.from({ length: data.length}, (_, index) => index);

              //sorting
              indices.sort((a,b) => {
                  if(data[b][rating_column] != data[a][rating_column])
                      return data[b][rating_column] - data[a][rating_column];
                  else if(data[a][money_column] != data[b][money_column])
                      return data[a][money_column] - data[b][money_column];
                  else
                      return result[a]['travelDuration'] - result[b]['travelDuration'];
              });
              
              const answer = {'Name': [], 'Location': [], 'Rating': [], 'Money': [], 'Opening-Time': [], 'Closing-Time': [], 'TravelDuration': []};
              let cnt = 0;
              for(let i = 0; i < indices.length && cnt < 10; i++){
                  if(result[indices[i]]['travelDuration'] <= time_req && data[indices[i]][money_column] <= money_left){
                      answer['Name'].push(data[indices[i]][0]);
                      answer['Location'].push(data[indices[i]][1]);
                      answer['Rating'].push(data[indices[i]][2]);
                      answer['Money'].push(data[indices[i]][3]);
                      answer['Opening-Time'].push(data[indices[i]][4]);
                      answer['Closing-Time'].push(data[indices[i]][5]);
                      answer['TravelDuration'].push(result[indices[i]]['travelDuration']);
                      cnt++;
                  }
              }
              resolve(answer);
              return;
          })
          .catch(error => {
            alert('Error1' + error);
          });
      });
      });
    });
  }

  try {
    await go(req.body.Location, req.body.Time, req.body.Money).then((final_answer) => {
      res.json({ success: 'Done3' , result: JSON.stringify(final_answer)});
    });
  } catch (error) {
    console.error(error);
    res.json({ success: 'Error '+error });
  }
});

module.exports = router;
