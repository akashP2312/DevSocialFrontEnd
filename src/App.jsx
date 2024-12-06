import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import Login from './components/Login.jsx'
import Feed from './components/Feed.jsx'
import Profile from "./components/Profile.jsx";



function App() {

  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body></Body>} >
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/feed" element={<Feed></Feed>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  )
}

export default App;
