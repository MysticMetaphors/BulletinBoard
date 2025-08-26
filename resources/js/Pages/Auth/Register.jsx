import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { route } from 'ziggy-js';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <section className="bg-green-primary">
            <div className="z-999 w-full h-screen flex bg-green-primary rounded-lg md:mt-0 xl:p-0">
                <div className="w-fit p-6 space-y-4 md:space-y-6 sm:p-16 min-w-lg relative">
                    <img src="SkillPowerInstituteLogo.png" className='h-14 w-14 self-center' alt="" />
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                        Create an account
                    </h1>
                    <form className="space-y-2 md:space-y-4" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="example@gmail.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                            <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                        </div>
                        <button type="submit" className="w-full mt-2 text-black bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Create an account
                        </button>
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
                            Already have an account? <Link href={route('login')} className="font-medium text-primary-600 hover:underline">Sign In</Link>
                        </p>
                    </form>
                    <Link href={route('home')} className='absolute top-5 right-10 text-white font-semibold flex gap-2 items-center'>
                        <span className="material-symbols-rounded shrink-0 w-5 h-5 text-white transition duration-75">
                            arrow_left_alt
                        </span> Go Back
                    </Link>
                </div>
                <div
                    className="bg-cover w-full bg-center hidden md:block"
                    style={{
                        backgroundImage:
                            "url('Featured.jpg')",
                    }}
                ></div>
            </div>

        </section>
    );
}
