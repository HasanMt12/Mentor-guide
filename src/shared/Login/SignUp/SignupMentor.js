import React, { useContext, useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../../hooks/useToken';
import login from '../../../assets/loginPhoto.jpg'

const Signup = () => {
     const {register, handleSubmit , formState: {errors} } = useForm();
     const { signUp ,updateUser, signInWithGoogle}= useContext(AuthContext)
     const [registerError, setRegisterError] = useState('')
     const [createdUserEmail, setCreatedUserEmail] = useState('')
 
      const [token] = useToken(createdUserEmail);
      const navigate = useNavigate()
  if (token) {
      navigate('/')
  }
  const handleSignUp = data => {
      setRegisterError('')

      console.log(data);

      signUp(data.email, data.password)

          .then(result => {
              const user = result.user;
              console.log(user);
              toast.success('user register successfully')

              const userInfo = {
                  displayName: data.name
              }
                
              updateUser(userInfo)
                  .then(() => {
                     saveUser(data.name, data.email, data.role, data.desTitle , data.time , data.location)
                    })
                  .catch(error => console.log(error));
          })
          .catch(error => {
              console.log(error)
              setRegisterError(error.message)
          });

  }



  
  const saveUser = (name, email, role, desTitle , time , location) => {
      const user = {
          name,
          email,
          role,
          desTitle,
          time , location
      };
      fetch('https://product-sell-server.vercel.app/users', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)
          }).then(res => res.json())
          .then(data => {
              console.log('test', data);

              setCreatedUserEmail(email)

          })
        
  }

 
 const handleGoogleSignin = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
    
    //   navigate(from, { replace: true })
    })
  }

    return (
        <div className = 'grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 my-6 py-3 ' >
       
             <img className='w-[65%] mx-auto' src={login} alt=''></img>
             <div className='w-[95%] px-6 flex justify-center items-center'>
             <div className='py-4  w-[80%] mx-auto rounded-lg  border-dotted border-[0.5px] border-gray-300  text-gray-800' >
              <div className='flex px-8 justify-between items-center'>
                <h2 className=' text-lg font-semibold my-4 text-[#A84448]'>Login Mentor Hub</h2>
                <Link to='/signupMentor'>
                    <h2 className=' text-lg cursor-pointer font-semibold my-4 text-[#A84448]'>Are You Mentor</h2>
                    </Link>
                </div> 
                <form onSubmit={handleSubmit(handleSignUp)} >
                
                    <div className="form-control px-8 w-full ">
                      
                        <input type="text" placeholder='Name' {...register("name" ,
                       { required: "name is required"}
                        )}
                       
                           className="rounded-lg w-full p-3 border-[1px]  border-gray-400 text-[#0D0D0D]"/>
                            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control px-8 w-full my-2 ">
                     
                        <input type="email" placeholder='Email'{...register("email" , {
                            required: "write a valid email"
                        })} 
                       
                           className="rounded-lg w-full p-3 border-[1px] border-gray-400 text-[#0D0D0D] "/>
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    
                    <div className="form-control px-8 w-full my-2 ">
                     
                        <input type="text" placeholder='category'{...register("desTitle" , {
                            required: "write a valid email"
                        })} 
                       
                           className="rounded-lg w-full p-3 border-[1px] border-gray-400 text-[#0D0D0D] "/>
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control px-8 w-full my-2 ">
                     
                        <input type="text" placeholder='time slot'{...register("time" , {
                            required: "write a valid email"
                        })} 
                       
                           className="rounded-lg w-full p-3 border-[1px] border-gray-400 text-[#0D0D0D] "/>
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control px-8 w-full my-2 ">
                     
                        <input type="text" placeholder='location'{...register("location" , {
                            required: "write a valid email"
                        })} 
                       
                           className="rounded-lg w-full p-3 border-[1px] border-gray-400 text-[#0D0D0D] "/>
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                           
                <select {...register("role", {
                        required: "select role"
                    })}className="select ml-9 hidden rounded-lg  text-gray-900 w-[85%] ">
                    <option  value="mentor" className='text-gray-900  w-full' >Mentor</option>
                    
                </select>

                    {/* <div className="col-span-full ml-8">
              <label htmlFor="photo" className="text-sm">
                Photo
              </label>
              <input
                type="file"
                {...register("img", {
                  required: "Photo is Required",
                })}
                className="w-full  rounded-md   focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-90"
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div> */}
                    <div className="form-control w-full px-8 my-2">
                       
                        <input type="password" placeholder='Password' {...register("password" , {
                            required: "password is required",
                             minLength: {value: 6 , message: "password must be 6 character "},
                                 pattern: { value: /(?=.*[!@#$&*])(?=.*[0-9])/, message: ' Password must have one special characters' }
                        })}
                       
                          className = "rounded-lg w-full p-3 border-[1px] border-gray-400 text-[#0D0D0D]" / >
                      {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                      
                    </div>
                        <div className='w-full px-8 '>
<input className='rounded-lg hover:bg-[#940A0A] bg-[#F6B461] cursor-pointer w-full p-3 border-[1px] border-gray-400 text-[#5A0101] hover:text-[#0D0D0D]'
value="Sign up"
type="submit"/>
                        </div>

                    
                    {registerError && <p className='text-red-500'>{registerError}</p>}
                </form>
                       <p className = 'text-center mt-2 ' >Already have an account? <Link className='text-[#A84448]
                       ' to="/login"> Login</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Signup;