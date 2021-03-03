const fs = require("fs");
const path = require("path");

const DATAPATH = path.dirname(require.main.filename) + "/static/starting_data_json.json";

function getTracts() {
  const rawdata = fs.readFileSync(DATAPATH);
  const StaticData = JSON.parse(rawdata);
  return StaticData;
}

exports.addSalesTracts = (req, res) => {
  try {
    const { tract_info, sales } = req.body;
    const { tracts } = getTracts();
    const keys = Object.keys(tracts);
    const newno = Number(keys.slice(-1)[0]) + 1;

    const newTracks = {
      tracts: {
        ...tracts,
        [newno]: {
          tract_info: tract_info,
          sales: sales,
        },
      },
    };

    fs.writeFileSync(DATAPATH, JSON.stringify(newTracks));
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(402).send(error);
  }
};

exports.deleteData = (req, res) => {
  try {
    const { id } = req.params;
    const { tracts } = getTracts();

    delete tracts[id];

    const newTracks = {
      tracts: {
        ...tracts,
      },
    };

    fs.writeFileSync(DATAPATH, JSON.stringify(newTracks));
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(402).send(error);
  }
};

exports.getAllData = (req, res) => {
  try {
    const { tracts } = getTracts();
    res.status(200).json(tracts);
  } catch (error) {
    res.status(402).send(error);
  }
};
