import React, { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <section className="bg-green-primary">
            <div className='h-screen grid grid-flow-row grid-cols-1 md:grid-cols-2'>
                <div className="z-999 w-full flex bg-green-primary rounded-lg md:mt-0 xl:p-0">

                    <div className="w-full p-6 space-y-4 md:space-y-6 sm:p-16">
                        <img src="SkillPowerInstituteLogo.png" className='h-14 w-14 self-center' alt="" />
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div className='flex gap-5'>
                                <div className='w-full'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-white focus:border-white block w-full p-2.5" placeholder="example@gmail.com" required />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-white focus:border-white block w-full p-2.5" required />
                                </div>
                            </div>
                            <button type="submit" className="w-full text-black bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Sign in
                            </button>
                            <div className="flex items-center mb-0 justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-white">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-white hover:underline">Forgot password?</a>
                            </div>

                            <div class="inline-flex relative items-center justify-center w-full">
                                <hr class="w-full h-px my-1 bg-gray-200 border-0" />
                                <span class="absolute px-3 font-medium text-white bg-green-primary -translate-x-1/2 left-1/2">or</span>
                            </div>
                            <div className='flex gap-5 justify-between'>
                                <button type="button" class="w-full border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700">
                                    <svg className="w-6 h-6 mr-2" viewBox="0 0 488 512">
                                        <path fill="#4285F4" d="M488 261.8c0-17.6-1.5-34.6-4.4-51H249v96h134.1c-5.8 31.2-23.1 57.6-49.1 75.4v62h79.4c46.4-42.8 73.6-105.8 73.6-182.4z" />
                                        <path fill="#34A853" d="M249 492c67 0 123.4-22.2 164.5-60l-79.4-62c-22.2 15-50.5 23.8-85.1 23.8-65.4 0-120.8-44.2-140.7-103.2H28.1v64.8C69.4 443 151.8 492 249 492z" />
                                        <path fill="#FBBC05" d="M108.3 295.6c-4.8-14.2-7.5-29.4-7.5-45s2.7-30.8 7.5-45V141H28.1c-15.6 31.4-24.6 66.8-24.6 103s9 71.6 24.6 103l80.2-51.4z" />
                                        <path fill="#EA4335" d="M249 97.2c35.5 0 67.2 12.2 92.3 36.2l69.3-69.3C372.2 28 315.8 0 249 0 151.8 0 69.4 49 28.1 141l80.2 62c19.9-59 75.3-103 140.7-103z" />
                                    </svg>
                                    Sign in with Google
                                </button>
                            </div>
                            <p className="text-sm font-light text-white">
                                Don’t have an account yet? <a href="#" className="font-medium text-white hover:underline">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
                {/* <img src="SkillPowerInstituteLogo.png" className='h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' alt="" /> */}
                <div
                    className="bg-cover bg-center hidden md:block"
                    style={{
                        backgroundImage:
                            "url('https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/482219309_1045637674269840_5920472226303271557_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGzn71yNtSy8HOh2I_O8Vz8HY4m80D40ykdjibzQPjTKZpJtN36d2evh2y3N-5k6evm4BKgJ8LnHyJGyghASUnC&_nc_ohc=4ZghrvHQOn0Q7kNvwGH2u2w&_nc_oc=AdlhRmzC8CO8DrFWjxCVD7wca1mYXG9XOzKXtAuirjZ97-Spvcb0jrwjCxQKkoYAS_8&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=enUnsvuNsTqf2D4VzADa6g&oh=00_AfXwoaEFn8TPDDDy1D_hVrasD9EdxAmtgs-xT6Sf_I6gPQ&oe=68B18AFD')",
                    }}
                ></div>

            </div>
        </section>
    );
}
