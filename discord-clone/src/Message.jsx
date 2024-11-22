import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import {db, auth} from './firebase';
import { useEffect, useState } from "react";

const Chat = ({channelId}) => {
    const [message, setMessage] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const q = query(
            collection(db, 'channels/${channelId}/messages'),
            orderBy("timestamp")
        );

        const unsubscribe = onSnapshot(q, (snapshot) =>
            setMessage(snapshot.docs.map((doc) => doc.data()))
        );
        
        return unsubscribe;
    }, [channelId]);

    const sendMessage = async () => {
        if (newMessage.trim()) {
            await addDoc(collection(db, 'channels/$(channelId}/messages'), {
                text: newMessage,
                user: auth.currentUser.displayName,
                Timestamp: new Date(),
            });
            setNewMessage("0");
        }
    };

    return (
        <div>
            <div>
                {message.map((msg, idx) => (
                    <p key={idx}>
                        <strong>{msg.user}: </strong>
                        {msg.text}
                    </p>
                ))}
            </div>
            <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;