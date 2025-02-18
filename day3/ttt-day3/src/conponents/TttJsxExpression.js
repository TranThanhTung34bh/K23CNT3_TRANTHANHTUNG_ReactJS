import React from 'react'

export default function TttJsxExpression() {
    // biến 
    const name ="Trần Thanh Tùng ";
    // biến đối tượng
    const user = {
        firstname:"Tùng",
        lastname:"Trần"
    }
    // hàm 
    const fullname=(user)=>{
        return user.firstname+ ' ' + user.lastname;
    }
    // element
    const element =(
        <div>
            {/* biểu thức jsx */}
            <h2>{fullname(user)}</h2>
            <hr/>
            <h3>welcome to, {name}</h3>
        </div>
    );
    // ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3>Welcome to {name}</h3>
        }else{
            return <h3>Welcome to Ft-NTU-K23CNT3</h3>
        }
    }
  return (
    <div>
            <h1> Ttt - JSX Expression</h1>
            {/*sử dụng biến element*/}
            {element}
            <hr/>
            {sayWelcome()}
            <hr/>
            {sayWelcome("Trịnh Trần Phương Tuấn ")}
        </div>
  )
}