import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {googleLogin,createUser} = useContext(AuthContext)

    const [registerError, setRegisterError] = useState('')
    // const [success, setSuccess] = useState('')

    // create user
    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password,name)
        setRegisterError('')
        // setSuccess('')

        // error handling
        if(password.length < 6){
            setRegisterError('Password should be At Least 6 characters or longer')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have one upperCase')
            return;
          }
          if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)) {
            setRegisterError('Your password should have one Special Character')
            return;
          }

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            Swal.fire(
                'Register Successfully',
                'You clicked the button!',
                'success'
              )
            
        })   
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
        })
    }


    // google login
    const handleGoogle = () =>{
        googleLogin()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div className="hero mt-16 pb-8">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input border-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input border-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input border-black" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white">Register</button>
                        </div>
                        <div className="form-control mt-6">  
                         <button onClick={handleGoogle} className="btn w-full  bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white"> <FcGoogle className='text-[31px]'></FcGoogle> Register With Google</button>
                        </div>
                        <p className='text-center'>Already have an account?<Link to='/login' className="font-bold ml-2">Login</Link></p>
                        {
                            registerError && <p className='text-center'>{registerError}</p>
                        }
                        {/* {
                            success && <p className='text-center text-white'>{success}</p>
                        } */}
                    </form>
                    
                </div>
            </div>
    );
};

export default Register;