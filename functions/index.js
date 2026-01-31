/**
 * Minimal Firebase Functions setup to avoid deployment errors.
 * This file exports one simple function so Firebase has something to deploy.
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");

// Required by Firebase to avoid backend load timeouts
setGlobalOptions({maxInstances: 10});

// A tiny placeholder function so Firebase Functions deploys successfully
exports.placeholder = onRequest((req, res) => {
  res.status(200).send("Firebase Functions are configured correctly.");
});
