import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

function App(props) {
    return (
      <div className="app-wrapper">
          <Header/>
          <Navbar friends={props.state.friendsData.friends}/>
          <div className="app-wrapper-content">
              <Routes>
                  <Route path="/profile" element={
                      <Profile
                        profilePages={props.state.profilePages}
                        dispatch={props.dispatch}
                      />}/>
                  <Route path="/dialogs/*"
                         element={<Dialogs
                           state={props.state.dialogPages}
                         />}
                  />
              </Routes>
          </div>

      </div>
    );
}

export default App;
