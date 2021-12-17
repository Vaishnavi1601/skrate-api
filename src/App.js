import { BrowserRouter, Route, Routes } from "react-router-dom";

import './../node_modules/bulma/css/bulma.min.css';
import './commonStyles.css';

import AllMeetings from "./page/AllMeetings";
import AllUsers from './page/AllUsers';
import Home from './page/Home';
import NewMeeting from "./page/NewMeeting";
import NewUser from "./page/NewUser";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer autoClose={2000} />
      <BrowserRouter Home="/add-user">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/all-users" exact element={<AllUsers />} />
          <Route path="/all-meetings" exact element={<AllMeetings />} />
          <Route path="/add-user" exact element={<NewUser />} />
          <Route path="/add-meeting" exact element={<NewMeeting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
