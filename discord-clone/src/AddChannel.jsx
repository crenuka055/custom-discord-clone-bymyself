import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useState } from "react";

const AddChannel = () => {
    const [channelName, setChannelName] = useState("");

    const createChannel = async () => {
        if(channelName.trim()) {
            await addDoc(collection(db, "channels"), {name: channelName});
            setChannelName("");
        }
    };

    return (
        <div>
            <input
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                placeholder="Channel name"
            />
            <button onClick={createChannel}>Create Channel</button>
        </div>
    );
};

export default AddChannel;