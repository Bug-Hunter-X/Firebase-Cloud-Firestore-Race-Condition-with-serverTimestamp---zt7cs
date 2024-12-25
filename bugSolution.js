To solve the race condition, transactions should be used to ensure that the updates are atomic. This guarantees that only one update succeeds at a time.  Here's an example:

```javascript
// Solution code
const updateData = async (docRef) => {
  await firebase.firestore().runTransaction(async (transaction) => {
    const doc = await transaction.get(docRef);
    if (!doc.exists) {
      throw new Error("Document does not exist!");
    }
    transaction.update(docRef, {
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    });
  });
};

// Multiple clients calling updateData concurrently
```
This approach ensures that the `serverTimestamp` is properly updated, even with concurrent writes.  The transaction guarantees that reads and writes are performed atomically.