import React from 'react';
import './App.css';
import Firebase from "./firebase";
import {Button} from "@material-ui/core";

const App: React.FC = () => {

    const firebaseService: Firebase = new Firebase();


    return (
        <div className="App">
            <Button variant="contained" color="primary" onClick={() => {
                firebaseService.setUsers().then(() => {});
            }}>
                Set users
            </Button>

            <Button variant="contained" color="primary" onClick={() => {
                firebaseService.getUsers();
            }}>
                Get users
            </Button>
        </div>
    );
};

export default App;
