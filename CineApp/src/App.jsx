import { useState } from "react"

import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"
import { GoogleLogin, googleLogout} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import LogoutButton from "./components/LogoutButton";

const App = () => {
    const [profile, setProfile ] = useState(null);
    const [isLogged, setisLogged] = useState(false);
    
    const responseMessage = (response) => {
      setisLogged(true);
      const decoded = jwtDecode(response.credential);
      setProfile(decoded);
  };
  const errorMessage = (error) => {
      console.log(error);
  };

  const logOut = () => {
    googleLogout();
    setisLogged(false);
    setProfile(null);
};
  
  return (
    <div className="box-border h-screen flex-col justify-start items-center">
    <Header 
      user={profile} 
      isLogged= {isLogged} 
      button={
      <LogoutButton onClick={logOut}/>
      } 
    />
      {isLogged ?
      <div>
        <Outlet/>
      </div>
      :
      <div className="flex justify-center mt-20">
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>
      }  
    
  </div>
  )
}

export default App
