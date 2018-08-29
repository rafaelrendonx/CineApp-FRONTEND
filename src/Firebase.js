import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDNUtFt3hdB77vvjDGIGjtS1XU37l0c6pc",
    authDomain: "netflix-clone-9ae3d.firebaseapp.com",
    databaseURL: "https://netflix-clone-9ae3d.firebaseio.com",
    projectId: "netflix-clone-9ae3d",
    storageBucket: "netflix-clone-9ae3d.appspot.com",
    messagingSenderId: "420265179844"
  };

  export default firebase.initializeApp(config);