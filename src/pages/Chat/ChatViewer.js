import './ChatViewer.scss'

const ChatViewer = ({messages}) => {
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
            </ul>
        </div>
    )
};
export default ChatViewer;
