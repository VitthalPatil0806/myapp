import {useState} from "react";
import Cookie from "js-cookie";
function LoginForm(){

    let [txt,setTxt] = useState();
    let [pass,setPass] = useState();

    function textchange(event){
        setTxt(event.currentTarget.value);
    }

    function passchange(event){
        setPass(event.currentTarget.value);
    }

    function login(){
        let obj = JSON.parse(localStorage.getItem("data"));
        for(let i=0;i<obj.length;i++){
            if(obj[i].name === txt && obj[i].password === pass){
                console.log("login successful");
                Cookie.set("color","white",{expires:2});
                var cookoeval = Cookie.get("color");
                console.log(cookoeval);
            }
            else{
                console.log("login failed");
            }
        }
    }

    return(
        <div>
            Username:<input type="text" onChange={textchange}></input><br></br>
            password:<input type="text" onChange={passchange}></input><br></br>
            <input type="button" value="login" onClick={login}></input>
        </div>
    )
}
export default LoginForm;