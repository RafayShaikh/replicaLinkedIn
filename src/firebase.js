import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyBBNi3dZjDVW9EQVP_6Dk00xuxJBRW1t8Y',
  authDomain: 'replicalinkedin.firebaseapp.com',
  projectId: 'replicalinkedin',
  storageBucket: 'replicalinkedin.appspot.com',
  messagingSenderId: '80255958929',
  appId: '1:80255958929:web:79e9645aa1ff2e852b2430',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }
