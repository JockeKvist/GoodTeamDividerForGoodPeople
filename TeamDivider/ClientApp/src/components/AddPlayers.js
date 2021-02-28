import React, { Component, useState } from 'react';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddPlayers = (callback) => {
    const [newPlayer, setNewPlayer] = useState("");    

    const passDataToParent = () => {
        
        callback.parentCallBack(newPlayer)
    }

    return (
        <div>
            <TextField
              onChange={e => setNewPlayer(e.target.value)}
            />
            <Button onClick={passDataToParent}>Add Player</Button>
        </div>
    );
};
    


export default AddPlayers;