const router = require("express").Router();
const { getAllData, addSalesTracts, deleteData } = require("./controllers/manageData");

router.post("/addSalesTracts", addSalesTracts);
router.delete("/deleteData/:id", deleteData);
router.get("/getAllData", getAllData);

module.exports = router;
