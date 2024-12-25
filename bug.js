The following code snippet demonstrates an uncommon error in Firebase when using Cloud Firestore. It involves a race condition where multiple clients attempt to update a document concurrently, leading to unexpected results.  Specifically, the `FieldValue.serverTimestamp()` function is used, but due to the race condition, stale timestamps might be written to the database. The use of transactions doesn't guarantee a serial execution, especially when dealing with many writes.

```javascript
// buggy code
const updateData = async (docRef) => {
  await docRef.update({
    lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
  });
};

// Multiple clients calling updateData concurrently
```