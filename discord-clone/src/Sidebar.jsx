import {collection, onSnapshot} from "firebase/firestore";
import {db} from "./firebase";
import { useEffect, useState } from "react";


const Sidebar = () => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "channels"), (snapshot) => setChannels(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
    );
    return unsubscribe;
    }, []);


    return (
        <div>
            <h2>Channels</h2>
            {channels.map((channel) => (
                <div key={channel.id}>{channel.name}</div>
            ))}
        </div>
    );
};

export default Sidebar;