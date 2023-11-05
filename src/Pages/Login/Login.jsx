import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const {googleLogin,signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const [loginError, setLoginError] = useState('')

    // sign in 
    const handleSignIn = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        setLoginError('')

        signIn(email,password)
        .then(result =>{
            console.log(result.user)
            navigate(location?. state? location.state : '/')
            // setSuccess('You Are Login Successfully ')
            Swal.fire(
                'Login Successfully',
                'You clicked the button!',
                'success'
              )
            
        })
        .catch(error =>{
            console.error(error)
            setLoginError('Please Provide a Right Password')
        })
    }

     // google sign in
     const handleGoogle = ()=>{
        googleLogin()
        .then(result =>{
            navigate(location?. state? location.state : '/')
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className="hero lg:my-16 pb-12 mt-12">
            <div className="card bg-gradient-to-r from-[#FF3300] to-[#FF8938] flex-shrink-0 w-full max-w-sm shadow-2xl">
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Your Password" className="input" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-white text-[#FF3300]">Login</button>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleGoogle} className="btn w-full bg-white text-[#FF3300]"> <FcGoogle className='text-[31px]'></FcGoogle> Login With Google</button>
                    </div>
                    <p className='text-center text-white'>Don’t have an account?<Link to='/register' className="font-bold text-white ml-2">Register</Link></p>
                    {
                        loginError && <p className="text-white text-center">{loginError}</p>
                    }
                </form>

            </div>
        </div>
    )
};

export default Login;