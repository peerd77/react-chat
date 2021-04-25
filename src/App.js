import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Registration from "./pages/Registration/Registration";
import Chat from "./pages/Chat/Chat";
import {ProvideUser} from "./hooks/useUserContext";


function App() {
    return (
        <ProvideUser>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/chat/">
                            <Chat/>
                        </Route>
                        <Route path={'/'}>
                            <Registration/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ProvideUser>

    );
}

export default App;
