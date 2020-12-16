import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBOoowaNm4YZHo_ZmB8aQ-HuKgr4Z2tB3A',
	authDomain: 'wow-picnic.firebaseapp.com',
	databaseURL: 'https://wow-picnic.firebaseio.com',
	projectId: 'wow-picnic',
	storageBucket: 'wow-picnic.appspot.com',
	messagingSenderId: '1051052255900',
	appId: '1:1051052255900:web:c002b2497e0bf0e0991b59',
});

const db = firebaseApp.firestore();

export { db };
