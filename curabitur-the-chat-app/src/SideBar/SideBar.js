import React, { useEffect, useState } from 'react';
import './SideBar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from './SideBarOption/SideBarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../Hosting/Firebase';
import { useStateValue } from '../DataLayerConfig/StateProvider';

function SideBar() {
    let [{ user }] = useStateValue();
    const [channels, setChannels] = useState([]);

    // Run it only when SideBar component loads.
    useEffect(() => {
        db.collection('Rooms')
            .onSnapshot(( snapshot ) => {
                setChannels(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().Name
                })));
            });
        
        // Note that onSnapshot will get called EVERYTIME there is change in collection
    }, []);

    return (
        <div className="sideBar">
            <div className="sideBar__header">
                <div className="sideBar__info">
                    <h2>Some Demo Channel</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>

            <div className="sideBar__options">
                <SideBarOption Icon={InsertCommentIcon} title="Threads" />
                <SideBarOption Icon={InboxIcon} title="Mentions & Reactions" />
                <SideBarOption Icon={DraftsIcon} title="Saved Items" />
                <SideBarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
                <SideBarOption Icon={PeopleAltIcon} title="People & User Groups" />
                <SideBarOption Icon={AppsIcon} title="Apps" />
                <SideBarOption Icon={FileCopyIcon} title="File Browser" />
                <SideBarOption Icon={ExpandLessIcon} title="Show less" />
                <hr />
                <SideBarOption Icon={ExpandMoreIcon} title="Channels" />
                <hr />
                <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel" />
                {/* Connect to DB and retrieve list of channels added */}
                {channels.map((channel) => (
                    <SideBarOption 
                        key={channel.id}
                        title={channel.name}
                        id={channel.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default SideBar;
