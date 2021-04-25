import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Registration from "./pages/Registration/Registration";
import Chat from "./pages/Chat/Chat";


function App() {
    return (
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

    );
}

export default App;
