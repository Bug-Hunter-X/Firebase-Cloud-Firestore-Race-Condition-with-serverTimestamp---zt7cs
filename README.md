# Firebase Cloud Firestore Race Condition with serverTimestamp()

This repository demonstrates a race condition in Firebase Cloud Firestore when using `FieldValue.serverTimestamp()` with concurrent updates.  Multiple clients updating the same document may result in stale timestamps being written, leading to unexpected behavior in your application.

The `bug.js` file contains the problematic code, showing how concurrent updates can cause the issue. The `bugSolution.js` demonstrates a solution using transactions to ensure atomicity and prevent race conditions.