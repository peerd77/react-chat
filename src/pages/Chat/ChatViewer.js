import './ChatViewer.scss'

const ChatViewer = ({messages}) => {
    const messageList = messages.map((msg,index) => <li key={index}>{msg}</li>);

    return (
        <div className={'chat-viewer'}>
            <ul>
                {messageList}
            </ul>
        </div>
    )
};
export default ChatViewer;
