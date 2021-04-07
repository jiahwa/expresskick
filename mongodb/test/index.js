//testing Views
// create
db.createCollection()
db.createView()
// collMod
db.getCollection()
db.getCollectionInfos()
db.getCollectionNames()
// find
// distinct
// count
db.collection.find()
db.collection.findOne()
db.collection.countDocuments()
db.collection.estimatedDocumentCount()
db.collection.count()
db.collection.distinct()

//testing On-Demand Materialized Views

db.monthlybakesales.find().sort( { _id: 1 } ) 
// results:
// [{ "_id" : "2018-12", "sales_quantity" : 2, "sales_amount" : NumberDecimal("60") },
// { "_id" : "2019-01", "sales_quantity" : 3, "sales_amount" : NumberDecimal("90") }]

db.monthlybakesales.find().sort( { _id: 1 } )
// results:
// [{ "_id" : "2018-12", "sales_quantity" : 2, "sales_amount" : NumberDecimal("60") },
// { "_id" : "2019-01", "sales_quantity" : 3, "sales_amount" : NumberDecimal("90") },
// { "_id" : "2019-02", "sales_quantity" : 4, "sales_amount" : NumberDecimal("100") }]

