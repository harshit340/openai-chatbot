import Header from "./components/Header"
import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Notfound from "./pages/Notfound"


function App() {
  return (
    <>
      
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Chat" element={<Chat/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
     </Routes>
    </>
  )
}

export default App;
