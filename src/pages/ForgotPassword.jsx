import { useState } from "react"
import { Link } from "react-router";
import OAuth from "../components/OAuth";
import { fetchSignInMethodsForEmail, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const [email, setEmail] = useState("")

    function handleChange(e){
        setEmail(e.target.value);
    }
    
    async function handleSubmit(e){
        e.preventDefault()
        try{
            const auth = getAuth()

            const methods = await fetchSignInMethodsForEmail(auth, email);

            if (methods.length === 0) {
                // no sign‑in methods → email not registered
                toast.error("No account found with that email address.");
                return;
            }
            await sendPasswordResetEmail(auth, email)
            toast.success("Email was sent")
        }
        catch(error){
            toast.error("could not sent reset password")
        }
    }

  return (
    <section>
        <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl max-auto">
            <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6" >
                <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5fGVufDB8fDB8fHww" alt="key"  
                className="w-full rounded-2xl"
                />
            </div>
            <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                <form onSubmit={handleSubmit}>
                    <input type="email"
                    id="email" 
                    value={email} 
                    onChange={handleChange} placeholder="Email Address" 
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
                    />
              
                    <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                        <p className="mb-6">Don't have an account?
                            <Link to= "/sign-up"
                            className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">Register</Link>
                        </p>
                        <p><Link to="/sign-in" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">Sign in instead</Link></p>
                    </div>
                    <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 " type="submit">Send reset password</button>
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


export default ForgotPassword