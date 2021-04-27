import './ChatViewer.scss'

const ChatViewer = ({messages}) => {
    if (!messages) return 'Loading';
    const messageList = messages.map((msg,index) => <li key={index}>{msg.msg}</li>);

    return (
        <div className={'chat-viewer'}>
            <ul>
                {messageList}
            </ul>
        </div>
    )
};
export default ChatViewer;
