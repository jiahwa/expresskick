export function indexCollection(db, selectObj, callback) {
    const filter = selectObj || {} // { "a": 1 }
    db.collection('documents').createIndex(
        filter,
        null,
        function(err, results) {
          console.log(results);
          callback();
      }
    );
  };