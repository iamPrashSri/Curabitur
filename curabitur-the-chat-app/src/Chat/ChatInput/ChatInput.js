import React, { useState } from 'react';
import { useStateValue } from '../../DataLayerConfig/StateProvider';
import db from '../../Hosting/Firebase';
import './ChatInput.css';
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {

    let [input, setInput] = useState("");
    let [{ user }] = useStateValue();
    let sendMessage = event => {
        event.preventDefault();

        if( channelId ){
            db.collection('Rooms')
                .doc(channelId).collection('Messages').add({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp,
                    user: user.displayName,
                    userImage: user.photoURL
                });
        }
    };
    return (
        <div className="chatInput">
            <form>
                <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`} />
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput;
