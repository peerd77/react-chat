import {Link} from 'react-router-dom'
import {useUserContext} from "../../hooks/useUserContext";
import ChatViewer from './ChatViewer'
import Footer from "./Footer";

import styles from './Chat.module.scss'
import {useEffect, useState} from "react";
import messageUtils from "../../utils/messageUtils";



const Chat = () => {
    const userContext = useUserContext();

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const loadedMessages = messageUtils.loadMessages();
        setMessages(loadedMessages);
    },[])

    const handleMessageSent = message => {
        const processedMessage = messageUtils.processMessage(userContext.user, message)
        const newMessages = [...messages, processedMessage];
        setMessages(newMessages);
        messageUtils.saveMessages(newMessages);// maybe should be optimised
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
