import React, {useState} from 'react';
import image from '../src/image.png';
import {FaFacebook, FaTwitter, FaGoogle} from 'react-icons/fa';


const LoginForm = ()=>{
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");

  const handleSubmit = ()=>{
    const data = {
      email: email,
      password: password
    }
    alert(JSON.stringify(data));
  };
  
    return (

        <div className='Form'>
            <section className='contain'> 

            <h1>Welcome Back</h1>

             <form  onSubmit={handleSubmit}>
             <p>Your Email</p>
            <div className="in"> 
            <input type="email" name="email" placeholder="Email address" onChange={(e)=>{setEmail(e.target.value)}} />

            <p>Password</p>
            <input type="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>

            <div className="check">
            <input type = "checkbox" name="checkbox" placeholder="Checkbox" />
            <p>Keep me logged in</p>

            <p>Forgot Password?</p>  

          </div>

            <button type = "submit" className="btn">Login</button> 
                   
                   <div className='or'>

                  <hr/><span>or</span><hr/>
                       
                        </div>

            <div  className='socials'>
              <FaFacebook />
              <FaTwitter />
              <FaGoogle />
            </div>
            </form>
            </section>
            

            <div className= "girl">
              <img src={image} alt="image" />
            </div>
        </div>
    )
}
export default LoginForm;