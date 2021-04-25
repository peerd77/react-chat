import {useUserContext} from "../../hooks/useUserContext";

const Chat = () => {
    const userContext = useUserContext();
    if (userContext.user)
        return userContext.user.username
     return (
         <div>no name</div>
     );
}

export default Chat;
