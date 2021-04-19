export function findDocuments (db, selectObj, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    const filter = selectObj || {} // {'a': 3}
    collection.find(filter).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }