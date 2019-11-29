import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCpM9p2QlXFRMF8_QQn58Z72gTt_XMWqBk",
    authDomain: "my-home-ziqzzaq.firebaseapp.com",
    databaseURL: "https://my-home-ziqzzaq.firebaseio.com",
    projectId: "my-home-ziqzzaq",
    storageBucket: "my-home-ziqzzaq.appspot.com",
    messagingSenderId: "941457921663",
    appId: "1:941457921663:web:4ad3d8fefe159cf05bd14a",
    measurementId: "G-ETRY5M7ZDM"
};

class Firebase {
    public db: firebase.database.Database;
    public siemanko: any;
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        this.db = firebase.database();
    }

    public getUsers(): void {
        this.db.ref('users').on('value', (snapshot) => {
            this.siemanko = snapshot.val();
            console.log('ss', this.siemanko);
        });
    }

    public setUsers(): Promise<any> {
        return this.db.ref('users/user1').set('Szymon');
    }
}

export default Firebase;