import { useState } from "react"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {db} from "../firebase"
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password:""
    })
    const {name, email, password } = formData;
    const navigate = useNavigate()

    function handleChange(e){
        setFormData(prevState => ({
            ...prevState, [e.target.id]:e.target.value,

        }))
    }

    async function handleSubmit(e){
        e.preventDefault()

        try {
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            updateProfile(auth.currentUser,{
                displayName:name
            })
            const user = userCredential.user;
            const formDataCopy = {...formData};
            delete formDataCopy.password;
            formDataCopy.timestamp = serverTimestamp();

            await setDoc(doc(db, "users", user.uid), formDataCopy)
            toast.success("Sign up was successful.")
            navigate("/")

        } catch (error) { 
            toast.error("Something went wrong with registration.")
        }
    }
  return (
    <section>
        <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl max-auto">
            <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6" >
                <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5fGVufDB8fDB8fHww" alt="key"  
                className="w-full rounded-2xl"
                />
            </div>
            <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                <form onSubmit={handleSubmit}>
                  <input type="text"
                    id="name" 
                    value={name} 
                    onChange={handleChange} placeholder="Full name" 
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
                    />
                    <input type="email"
                    id="email" 
                    value={email} 
                    onChange={handleChange} placeholder="Email Address" 
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
                    />
                    <div className="relative mb-6">
                        <input type= {showPassword ? "text" : "password" }
                        id="password" 
                        value={password} 
                        onChange={handleChange} placeholder="Password" 
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                    />
                    {showPassword ? <FaEyeSlash className="absolute right-3 top-4 text-xl cursor-pointer"
                    onClick={()=> setShowPassword(prev => !prev)}
                    /> :<FaEye className="absolute right-3 top-4 text-xl cursor-pointer"
                    onClick={()=> setShowPassword(prev => !prev)}/>}
                    </div>
                    <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                        <p className="mb-6">have an account?
                            <Link to= "/sign-in"
                            className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">Sign in</Link>
                        </p>
                        <p><Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">Forgot-password</Link></p>
                    </div>
                    <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 " type="submit">Sign Up</button>
                <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                    <p className="text-center font-semibold mx-4">OR</p>
                </div>
                <OAuth/>
                </form>
                
            </div>
        </div>
    </section>
  )
}

export default SignUp