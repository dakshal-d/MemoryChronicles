import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import SignupPage from "../pages/SignupPage";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";

export default function AllRoutes(){

    return <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/register" element={<SignupPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/contactus" element={<ContactUs />}></Route>
        <Route exact path="/notes" element={<PrivateRoute><NotesPage /></PrivateRoute>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>

    </Routes>
}