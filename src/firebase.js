import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD8pxa_G4gznNz7YxcSbbeU2m_gBVXXFFg",
    authDomain: "fun-food-friends-68375.firebaseapp.com",
    databaseURL: "https://fun-food-friends-68375.firebaseio.com",
    projectId: "fun-food-friends-68375",
    storageBucket: "fun-food-friends-68375.appspot.com",
    messagingSenderId: "996933321688"
  };
  firebase.initializeApp(config);
  export default firebase;