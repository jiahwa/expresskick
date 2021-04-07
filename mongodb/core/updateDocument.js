export function updateDocument(db, selectObj, setObj, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    const filter = selectObj || {} // { a : 2 }
    const setter = setObj || {} // { b : 1 }
    collection.updateOne(filter
      , { $set: setter }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });  
  }