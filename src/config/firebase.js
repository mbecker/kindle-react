import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyD1HYH5MYcdNjTL50pgDJblOSmddXoqT_s",
    authDomain: "kindle-3f96b.firebaseapp.com",
    databaseURL: "https://kindle-3f96b.firebaseio.com",
    projectId: "kindle-3f96b",
    storageBucket: "kindle-3f96b.appspot.com",
    messagingSenderId: "363444852670"
  };
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
  });

export const volumesRef = db.collection("books");
export const updateVolume = function(key, volumeId) {
  return db.collection("volumes").doc(key).update({
    volumeId: volumeId,
  })
}
export const highlightsRef = function(volumeId){
  return db.collection("highlights").where("volume", "==", "volume/" + volumeId)
}

/*
 * Activites
 */
export const activitiesRef = db.collection("activities");