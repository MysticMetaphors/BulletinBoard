import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { route } from 'ziggy-js';
import { appendToast } from '../../global';

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        remember: false
    })

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        appendToast('toast-append', 'success', 'Logged successfully!')
        appendToast('toast-append', 'warning', 'Fill in all fields')
        appendToast('toast-append', 'error', 'Invalid cridentials.')
    };

    return (
        <section className="bg-green-primary flex flex-row">
            <div className="z-999 w-fit h-screen flex  bg-green-primary rounded-lg md:mt-0 xl:p-0 relative">
                <div className="w-fit p-6 space-y-4 md:space-y-6 sm:p-16 min-w-lg">
                    <img src="SkillPowerInstituteLogo.png" className='h-14 w-14 self-center' alt="" />
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div className='space-y-4'>
                            <div className='w-full '>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input type="email" name="email" value={form.email} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-white focus:border-white block w-full p-2.5" placeholder="example@gmail.com"  />
                            </div>
                            <div className='w-full '>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input type="password" name="password" value={form.password} onChange={handleChange} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-white focus:border-white block w-full p-2.5"  />
                            </div>
                        </div>
                        <button type="submit" className="w-full text-black bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Sign in
                        </button>
                        <div className="flex items-center mb-0 justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" name='remember' value={form.remember} onChange={handleChange} aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50"  />
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
                        {/* <p className="text-sm font-light text-white">
                            Don’t have an account yet? <Link href={route('register')} className="font-medium text-white hover:underline">Create an account</Link>
                        </p> */}
                        <Link href={route('home')} className='absolute top-5 right-10 text-white font-semibold flex gap-2 items-center'>
                            <span className="material-symbols-rounded shrink-0 w-5 h-5 text-white transition duration-75">
                                arrow_left_alt
                            </span> Go Home
                        </Link>
                    </form>
                </div>
            </div>
            <div
                className="bg-cover w-full bg-center hidden md:block"
                style={{
                    backgroundImage:
                        "url('Featured.jpg')",
                }}
            ></div>
            <div id='toast-append' className='fixed bottom-10 right-10 space-y-4'>

            </div>
        </section>
    );
}
