import {useRef} from "react";
import { useParams } from "react-router-dom";
function SignInForm(){
    let txtname = useRef();
    let txtpassword = useRef();

    var arr = [];

    let {paraobj} = useParams();


    // let funSearch = () => {
    //     var city = paraobj.city;
    //     console.log(city);
    //     var data = JSON.parse(localStorage.getItem("data"));
    //     var arr = data.filter((x)=>{
    //         if(x.name === city){
    //             return x;
    //         }
    //     }) 
    //     console.log(arr);
    // }

    function funSign(){
        let formData = {
            name:txtname.current.value,
            password:txtpassword.current.value
        }
        arr.push(formData);
        localStorage.setItem("data",JSON.stringify(arr));
        console.log(formData);
    }
    return(
        <div>
            Username:<input type="text" ref={txtname}></input><br></br>
            password:<input type="text" ref={txtpassword}></input><br></br>
            <p>here is ur value {paraobj}</p>
            <input type="button" value="submit" onClick={funSign}></input>
            {/* <input type="button" value="search" onClick={funSearch}></input> */}
        </div>
    )
}
export default SignInForm;