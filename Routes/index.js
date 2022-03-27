const express = require('express');
const router = express.Router();
const recordController = require("../controllers/index")

router.get('/', function(req, res, next) {
    res.status(200).send(`Its working... Use POST with Request payload to include a JSON with 4 fields.
        "startDate" and “endDate” fields will contain the date in a “YYYY - MM - DD” format. You
        should filter the data using “createdAt”.
        “minCount” and “maxCount” are for filtering the data.Sum of the “count” array in
        the documents should be between “minCount” and “maxCount”.`);
})

router.post('/filter_records', recordController.record_filter);

module.exports = router