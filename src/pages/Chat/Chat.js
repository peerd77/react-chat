import {Link} from 'react-router-dom'
import {useUserContext} from "../../hooks/useUserContext";
import ChatViewer from './ChatViewer'
import Footer from "./Footer";

import styles from './Chat.module.scss'
import {useState} from "react";

const Chat = () => {
    const userContext = useUserContext();
    const [messages, setMessages] = useState([]);

    const handleMessageSent = message => {
        //todo: save on local-storage via utils
        console.log(message);
        setMessages([...messages, message])
    }

    if (userContext.user) {
        return (
            <div className={styles.chat}>
                <ChatViewer messages={messages}/>
                <Footer onMessageSent={handleMessageSent}/>
            </div>
        )
    }
    return (
        <>
            <span>Please </span>
            <Link to='/'>
                Register
            </Link>
        </>

    );
}

export default Chat;
