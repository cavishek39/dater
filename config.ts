import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCHDtoCJWwMWfJ9clRgYT-tDnP6kIATrlM',
  authDomain: 'dater-e4f62.firebaseapp.com',
  projectId: 'dater-e4f62',
  storageBucket: 'dater-e4f62.appspot.com',
  messagingSenderId: '976645881698',
  appId: '1:976645881698:web:0127cce1dbfd64147cb63b',
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const auth = getAuth()
const storage = firebase.storage()
const db = getFirestore()
export { firebase, auth, storage, db }
