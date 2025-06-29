import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import ForgotPassword from "./pages/ForgotPassword"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"
import { ToastContainer, Bounce } from 'react-toastify';


function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/profile" element ={<Profile />} />
          <Route path="/sign-in" element ={<SignIn />} />
          <Route path="/sign-up" element ={<SignUp/>} />
          <Route path="/forgot-password" element ={<ForgotPassword />} />
          <Route path="/offers" element ={<Offers />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        />
    </>
  )
}

export default App
