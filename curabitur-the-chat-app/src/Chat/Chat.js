import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../Hosting/Firebase';
import ChatMessage from './ChatMessage/ChatMessage';
import ChatInput from './ChatInput/ChatInput';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if( roomId ){
            db.collection('Rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => (
                    setRoomDetails(snapshot.data())
                ));
        }

        db.collection('Rooms')
            .doc(roomId)
            .collection('Messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => (
                setRoomMessages(snapshot.docs.map(doc => doc.data())
            )));
    }, [roomId]);
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.Name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4> 
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <ChatMessage 
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>

            <ChatInput 
                channelName={roomDetails?.Name}
                channelId={roomDetails?.id}
            />
        </div>
    )
}

export default Chat;
