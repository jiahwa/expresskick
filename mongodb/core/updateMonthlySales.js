export function updateMonthlySales() {
    db.bakesales.aggregate( [
        {$match: {date: {$gte: startDate}},
        {$group: { _id: { $dateToString: { format: "%Y-%m", date: "$date" } }, sales_quantity: { $sum: "$quantity"}, sales_amount: { $sum: "$amount" } } },
        {$merge: { into: "monthlybakesales", whenMatched: "replace" }}
    ]);
}