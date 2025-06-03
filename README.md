# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.










































<!-- Welcome + Logout -->
<!-- import { Link, useNavigate } from 'react-router'

export default function Home() {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('user'));
	
  return (
	  <>
		<div className='mt-50 w-full flex flex-row justify-center items-center gap-5'>
			  {user ? (
				    <>
						<span className="text-lg font-semibold">Welcome, {user.name}</span>
						<button 
							className="btn btn-soft btn-error"
							onClick={() => {
							localStorage.removeItem('user');
							navigate('/signin');
							}}>
							Logout
						</button>
                    </>
                ) : (
				<>
				<Link to="/signin"><button className="btn btn-soft btn-primary">Sign In</button></Link>
				<Link to="/signup"><button className="btn btn-soft btn-accent">SignUp</button></Link>
				</>
                )}
       </div> -->









<!-- Signup -->
<!-- import  { useState } from 'react';




import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
   
    if (!name.trim() || !email.trim() || !password.trim()) {
      Swal.fire('Error', 'Please fill in all fields.', 'error');
      return;
    }

    if (name.trim().length < 5) {
      Swal.fire('Error', 'Name must be at least 5 characters long.', 'error');
      return;
    }

    if (password.trim().length < 8) {
      Swal.fire('Error', 'Password must be at least 8 characters long.', 'error');
      return;
    }

    try {
      await axios.post('https://68382fb12c55e01d184c5076.mockapi.io/Users', {
        name,
        email,
        password,
      });

      Swal.fire('Success', 'Account created successfully!', 'success').then(() => {
        navigate('/signin');
      });
    } catch  {
      Swal.fire('Error', 'Registration failed. Try again.', 'error');
    }
  };

  return (
	  <div className='mt-20 w-full flex flex-col justify-center items-center gap-5'>
		        <labe>Full Name</labe>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
			      placeholder="Full Name"
			      className='border-1 rounded-2xl w-80 p-2'
                />
               
          <label>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
			      placeholder="Email Address"
			      className='border-1 rounded-2xl w-80 p-2'
                />
              
         <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
			      placeholder="Password"
			      className='border-1 rounded-2xl w-80 p-2'
                />
              
                <button
			       onClick={handleSignup}
		           className="btn btn-soft btn-accent"> Sign Up </button>
        

              <div className="mt-4 text-sm text-gray-600"> Already have an account?
                <Link to="/signin"><button className="btn btn-soft btn-primary">Sign In</button></Link>
             </div>
      
    </div>
  );
}



 -->
<!-- Signin -->
<!-- import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';

export default function Signin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = async () => {
    if (!name.trim() || !password.trim()) {
      Swal.fire('خطأ', 'الرجاء إدخال الاسم وكلمة المرور.', 'error');
      return;
    }

    try {
      const res = await axios.get('https://68382fb12c55e01d184c5076.mockapi.io/Users');
      const users = res.data;

      const matchedUser = users.find(
        (user) => user.name === name && user.password === password
      );

      if (matchedUser) {
       
        localStorage.setItem('user', JSON.stringify(matchedUser));
        
        Swal.fire('تم بنجاح', 'مرحباً بعودتك!', 'success').then(() => {
        navigate('/');
		});
		  
      } else {
        Swal.fire('خطأ', 'الاسم أو كلمة المرور غير صحيحة.', 'error');
      }
    } catch {
      Swal.fire('خطأ', 'حدث خطأ ما، حاول مرة أخرى لاحقاً.', 'error');
    }
  };

  return (
    <div className='mt-20 w-full flex flex-col justify-center items-center gap-5'>
		        <labe>Full Name</labe>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
			      placeholder="Full Name"
			      className='border-1 rounded-2xl w-80 p-2'
                />
               
     
              
         <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
			      placeholder="Password"
			      className='border-1 rounded-2xl w-80 p-2'
                />
              
                <button
			       onClick={handleSignin}
		            className="btn btn-soft btn-primary"> Sign  In</button>
        

              <div className="mt-4 text-sm text-gray-600"> Don't  have an account?
                <Link to="/signup"><button className="btn btn-soft btn-accent">Sign Up</button></Link>
             </div>
      
    </div>
  );
}
 -->