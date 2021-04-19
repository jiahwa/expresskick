export function removeDocument(db, selectObj, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Delete document where a is 3
    const filter = selectObj || {}; // { a : 3 }
    collection.deleteOne(filter, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(result);
    });    
  }