import './ChatViewer.scss'
import {useEffect, useRef} from "react";

const ChatViewer = ({messages}) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);


    if (!messages) return 'Loading';
    const messageList = messages.map((msg, index) => (
        <li
            style={{'color': msg.color}}
            key={index}
        >
            {msg.msg}
        </li>
    ));

    return (
        <div className={'chat-viewer'}>
            <ul>
                {messageList}
                <li ref={messagesEndRef} />
            </ul>

        </div>
    )
};
export default ChatViewer;
