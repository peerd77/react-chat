import './ChatViewer.scss'
import {useEffect, useRef} from "react";

const ChatViewer = ({messages}) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        // For some reason calling scrollIntoView()
        // with { behavior: "smooth" }
        // causing to scroll fail on send
        // when clicking on mouse
        messagesEndRef.current?.scrollIntoView()
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
