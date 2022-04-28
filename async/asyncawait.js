const LoginInfo={
    username:"adwaithsamod",
    password:"Adwaith"
}


var x="adwaithsamod";
var y="Adwaith";

const UserId=LoginInfo.username;
const Pass=LoginInfo.password;



async function login(){
    try{
    const result=await Validate(UserId,Pass);
    console.log(result)
    }
    catch(error){
        console.log(error)
    }
}

async function Validate(Username,Password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Username==x && Password==y){
                resolve("Success")
            } 
            else{
                reject("Fail")
            }
        },2000)
    })
}

login();