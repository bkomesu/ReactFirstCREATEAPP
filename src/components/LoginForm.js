import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <form class="center" >
            <div class="container border border-dark rounded">
            <h3 style={{textAlign: 'center'}}> Log In </h3>
              <div class="p-1">
                  <label for="uname" class="px-2"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="uname" required/>
              </div>
              <br/>
              <div class="p-1">
                  <label for="psw" class="px-2"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required/>
              </div>
              <br/>
              <div style={{textAlign: 'center'}}>
                  <span class="px-2"><button type="submit" class="px-3 test">Login</button></span>
                  <label>
                    <input type="checkbox" checked="checked" name="remember"/> Remember me
                  </label>
              </div>
            </div>
                  
            </form>
        </div>
    }
}

