import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        let isUserloggedIn = localStorage.getItem('login');
        if(!isUserloggedIn){
            navigate('/login');
        } 
    },[])
    return (
        <Component/>
    )
}

export default Protected;