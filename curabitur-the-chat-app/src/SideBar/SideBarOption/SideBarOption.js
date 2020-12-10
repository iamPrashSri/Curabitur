import React from 'react';
import { useHistory } from 'react-router-dom';
import db from '../../Hosting/Firebase';
import './SideBarOption.css';

function SideBarOption({ Icon, title, id, addChannelOption }) {

    let history = useHistory();
    let addChannel = () => {
        let channelName = prompt('Please enter channel name');
        if( channelName ){
            db.collection('Rooms')
                .add({
                    Name: channelName
                });
        }
    };

    let selectChannel = () => {
        if( id ){
            history.push(`/room/${id}`);
        } else {
            history.push('title');
        }
    };

    return (
        <div className="sideBarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sideBarOption__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className="sideBarOption__channel">
                    <span className="sideBarOption__hash">#</span> {title}   {/* If icon is not passed, consider it as a channel */}
                </h3>
            )}
        </div>
    )
}

export default SideBarOption;
