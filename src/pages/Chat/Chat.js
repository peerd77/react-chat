import {Link} from 'react-router-dom'
import {useUserContext} from "../../hooks/useUserContext";
import ChatViewer from './ChatViewer'
import Footer from "./Footer";

import styles from './Chat.module.scss'

const Chat = () => {
    const userContext = useUserContext();
    if (userContext.user)
        return (
            <div className={styles.chat}>
                <ChatViewer/>
                <Footer/>
            </div>
        )
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
