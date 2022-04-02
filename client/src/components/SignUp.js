import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import firebase from '../utils/firebase'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";



export default function Login() {

  const {
    formState: { errors },
  } = useForm()

  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  
  return (
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an Account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="fname"
                    type="fname"  
                    name="fname"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="lname"
                    type="lname"  
                    name="lname"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="emailAddress"
                    type="email"  
                    name="email"
                    value={email}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.email && (
                    <div className="mt-2 text-xs text-red-600">
                      {errors.email.message}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setPass(e.target.value)}
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.password && (
                    <div className="mt-2 text-xs text-red-600">
                      {errors.password.message}
                    </div>
                   )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={email === "" || password === ""}
                  onClick={async (e) =>{
                    e.preventDefault();
                    await createUserWithEmailAndPassword(auth, email, password).then(async function (firebaseUser) {
                      if(firebaseUser) {
                        console.log(firebaseUser)
                        localStorage.setItem("User", firebaseUser.user.email)
                      }
                  })}
                  } 
                >
                  Sign up
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                </div>
              </div>

              <div className="mt-6">
                <div>
                  <Link to={'/'}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign Up</span>

                      <p className="" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        Sign In
                      </p>

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}