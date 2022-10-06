import React from 'react'
import "./style.css"
function BasicForm() {
  return (
    <>
        <div className='body'>
            <div class="login-page">
            <div class="form">
            <h1 class="heading">Welcome</h1>
            <form>
                <br></br>
                <br></br>
                <input type="text" placeholder="Username/Email"/>
                <input type="password" id="password" placeholder="Password"/>
                <button>LOGIN</button>
                <p class="message"></p>
            </form>
        
            <form class="login-form">
                <button type="button" onclick="">SIGN UP</button>
            </form>
            </div>
        </div>
        
        <br></br>
        <br></br>
        <h6 className='footer'>Made by Harsh Chandwani</h6>
    </div>
  </>
    )
}

export default BasicForm