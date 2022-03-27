var service = require('../services/index');

module.exports.record_filter = function (req, res, next) {
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
    const maxCount = Number(req.body.maxCount);
    const minCount = Number(req.body.minCount);
    // Checks Request Payload
    if (req.body.startDate == undefined || startDate.toDateString() === "Invalid Date"){
        res.send({code: 1, msg: "startDate value is invalid"});
        return;
    }
    if (req.body.endDate == undefined || endDate.toDateString() === "Invalid Date"){
        res.send({code: 1, msg: "endDate value is invalid"});
        return;
    }
    if (maxCount == undefined || isNaN(maxCount)) {
        res.send({code: 1, msg: "maxCount value is not a number or undefined"});
        return;
    }
    if (minCount == undefined || isNaN(minCount)) {
        res.send({code: 1, msg: "minCount value is not a number or undefined"});
        return;
    }
    service.record_filter(startDate, endDate, maxCount, minCount, function (response) {
        res.send({code: 0, msg: "Success", records: response});
    })
}
