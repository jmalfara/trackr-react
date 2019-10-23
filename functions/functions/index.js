// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

exports.appendOnCreateData = functions.firestore.document('transactionRequests/{id}').onCreate((snap, context) => {
  return snap.ref.set({
    createdAt: new Date().getTime(),
    status: "processing"
  }, {merge: true});
});
