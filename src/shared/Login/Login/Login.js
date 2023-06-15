import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

 import useToken from '../../../hooks/useToken';
import login from '../../../assets/loginPhoto.jpg'
const Login = () => {
    
       const { register, formState: { errors }, handleSubmit } = useForm();
        const { signIn ,signInWithGoogle }= useContext(AuthContext)
        const [signInError, setSignInError] = useState('');
        const [signInUserEmail, setSignInUserEmail] = useState('');
        const [token] = useToken(signInUserEmail);
        const location = useLocation();
        const navigate = useNavigate();

        const form = location.state?.form?.pathname || '/';
        
        if(token){
            navigate(form, {replace: true});
        }

         const handleLogin = data =>{
            
            console.log(data);
            setSignInError('');
             signIn(data.email, data.password)
            .then(result=>{
                const user = result.user;
                console.log(user);

                setSignInUserEmail(data.email)
                
                
            })
            .catch(error=> {
                console.log(error.message)
                setSignInError(error.message);
            });
        
        }

        const handleGoogleSignin = () => {
            signInWithGoogle().then(result => {
                console.log(result.user)
                //     setSignInUserEmail(data.email);
                //   navigate(from, { replace: true });
            })
        }

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 my-6 p-12'>
            <img className='w-[80%] mx-auto' src={login} alt=''></img>
           <div className = 'w-[95%] px-6 flex justify-center items-center' >
        <div className='py-4  w-[80%] mx-auto rounded-lg  border-dotted border-[0.5px] border-gray-300  text-gray-800'>
                <h2 className='ml-8 text-xl my-4 text-[#A84448]'>Login Mentor Hub</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                
                    <div className="form-control w-full px-8 ">
                      
                        <input type="email" 
                        {...register("email" , {
                            required: "Email Address is required"
                            })} className=" rounded-lg w-full p-3 border-[1px] border-gray-400 text-[#0D0D0D]"/>
                             {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full px-8 mt-4">
                      <input type="password" 
                        {...register("password" , {
                            required:"password required",
                            minLength: {value: 6 , message:'password must be 6 character or longer'}
                            })} placeholder="" className="rounded-lg w-full p-3 border-[1px] border-gray-400 text-[#0D0D0D]"/>
                        <label className="label"><span className="label-text text-gray-100">Forgot password</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                            <div className='w-full px-8' >
                    <input className='rounded-lg hover:bg-[#940A0A] bg-[#F6B461] cursor-pointer w-full p-3 border-[1px] border-gray-400 text-[#5A0101] hover:text-[#0D0D0D]' value="Login" type="submit"></input> 
                   </div> 
                   <div>
                        {signInError && <p className='text-gray-100'>{signInError}</p>}
                    </div>
                </form>

                   
                <div className="divider mx-8">OR</div>
                <div className='px-8'>
                    <button onClick={handleGoogleSignin} className='rounded-lg  w-full p-3 border-[1px] border-gray-400  text-[#A84448]'>CONTINUE WITH GOOGLE</button>
                </div>
               
             <p className= 'text-center mt-2 '> Don 't have an account? <Link className='text-[#A84448]' to="/signup"> sign Up</Link></p>
            </div>
           </div>
            
         
        </div>
    );
};

export default Login;