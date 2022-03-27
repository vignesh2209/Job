var recordSchema = require('../Models/records');

module.exports.record_filter = async function (startDate, endDate, maxCount, minCount, callback) {
    const records_list = await recordSchema.aggregate([
        { $project: {totalCounts: {$sum: "$counts"}, value: 1, key: 1, createdAt: 1}},
        { $match: { $and: [
            {createdAt: {$gte: startDate}},
            {createdAt: {$lte: endDate}},
            {totalCounts: {$gte: minCount}},
            {totalCounts: {$lte: maxCount}}
        ]}},
    ]);
    callback(records_list);
}
