import React, {useState, useContext} from "react";
import { AuthContext } from "../../context/auth";
import Nav from "../MainPage/Nav" 
import Search from '../MainPage/Search'
import Repositories from '../MainPage/Repositories';
import Bot from "./Bot";

const ola = ["um", "dois", "tres"]


export const MyPage = () => {
    const { user , logout } = useContext(AuthContext)
    const [repositories, setRepositories] = useState([ ])

    const handleLogout = () => {
        console.log('logout')
        console.log(ola)
        logout()
    }

    const handleClick = () => {
        console.log('ola')
        console.log(ola)
    }


    return (
        <div id="main">
    
           <Nav /> 
            
           <Bot  />
        
        
          </div>
         )

}





export default MyPage