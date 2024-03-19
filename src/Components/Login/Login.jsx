import Nature from "../Image/nature.png"
import Icon from "../Image/google.png"

function Login() {
    return (
        <>

            <section className="login mt-3.5 max-lg:ml-5">
                <div className="max-w-[1010px] mx-auto flex items-center justify-between max-lg:relative">
                    <img className="w-[55%] h-[100%] max-md:w-[70%] max-sm:w-[90%]" src={Nature} alt="Image" width={720} height={900} />

                    <div className="items-center justify-between max-lg:absolute max-lg:backdrop-blur-md max-lg:bg-gray-200 max-lg:bg-opacity-50 max-lg:w-[50%] max-lg:h-[90%] max-lg:ml-[20px] max-lg:p-9 max-lg:rounded-xl max-md:w-[65%]
                    max-sm:w-[83%] max-sm:p-5 max-sm:ml-1">
                        <p className="font-roboto font-normal text-base text-[#2D3748] max-lg:text-[13px] max-sm:mt-[-20px]">Welcome back</p>
                        <h1 className="font-roboto font-bold text-[30px] text-[#1A202C] mt-[2px] max-lg:text-[19px] max-sm:mt-[-10px]">Login to your account</h1>
                        <p className="font-roboto font-normal text-base text-[#4A5568] mt-[24px] max-lg:mt-1 max-lg:text-[13px] max-sm:mt-[-3px]">Email</p>
                        <input type="email" placeholder="John.snow@gmail.com" className="border max-lg:w-[250px] max-lg:h-[35px] max-lg:text-[13px] border-gray-300 bg-white py-2 pl-[20px] rounded-md w-96 h-12 text-base font-roboto font-normal text-gray-700 mt-[11px] max-sm:mt-0 max-sm:w-[200px] max-sm:h-[20px]" />
                        <p className="font-roboto font-normal text-base text-[#4A5568] mt-[24px] max-lg:mt-1 max-lg:text-[13px] max-sm:mt-[-5px]">Password</p>
                        <input type="password" placeholder="*********" className="border max-lg:w-[250px] max-lg:mt-1 max-lg:h-[35px] max-lg:text-[13px] border-gray-300 bg-white py-2 pl-[20px] rounded-md w-96 h-12 text-base font-roboto font-normal text-gray-700 mt-[11px] max-sm:w-[200px] max-sm:h-[20px]" />

                        <div className="flex items-center justify-between mt-[28px] max-lg:mt-2">
                            <div className="flex items-center">
                                <input type="radio" className="w-[15px] h-[15px] max-lg:w-[10px] max-lg:h-[10px]" />
                                <p className="font-roboto font-normal text-base text-[#4A5568] ml-[15px] max-lg:text-[13px]">Remember me</p>
                            </div>
                            <a className="font-roboto font-normal text-base text-[#2C5282] max-lg:text-[white] max-lg:mt-1 max-lg:text-[13px] max-sm:text-[11px]" href="#link">Forgot password?</a>
                        </div>

                        <button className="max-lg:w-[250px] font-roboto font-bold text-[16px] text-[#FFFFFF]  w-96 h-12 bg-[#04C35C] rounded-[5px] mt-[27px] max-lg:mt-2 max-lg:h-[35px] max-sm:text-[13px] max-sm:w-[200px] max-sm:h-[30px]" type="button">
                            Login now
                        </button> <br />


                        <button className="font-roboto max-lg:w-[250px] font-bold text-[16px] text-[#FFFFFF]  w-96 h-12 bg-[#2D3748] rounded-[5px] mt-[27px] flex items-center justify-center gap-[11px] max-lg:mt-2 max-lg:h-[35px] max-sm:text-[13px] max-sm:w-[200px] max-sm:h-[30px]" type="button">
                            <img src={Icon} alt="Icon" /> Or sign-in with google
                        </button>

                        <p className="mt-[150px] text-center text-[ #4A5568] max-lg:mt-[20px] max-lg:ml-[-100px] max-lg:text-[13px] max-sm:text-[12px] max-sm:ml-0 max-sm:mt-[-1px]">Dont have an account?
                            <span className="text-[#2C5282]">Join free today</span>
                        </p>
                    </div>


                </div>

                <details>
                    <summary>Salom</summary>
                    <p>Xayr</p>
                    <p>Qale</p>
                </details>
            </section>

        </>
    )
}

export default Login;