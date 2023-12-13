import React from "react";
import Alert from '@mui/material/Alert';

export default function AuthModelInput({ register, isSignIn ,errors}) {
  return (
    <>
    {errors.length?(<Alert severity="errors">{errors}</Alert>):("")}
      {isSignIn ? null:(
        <div className="flex">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 `}
              placeholder="Zaara"
              {...register("first_name", {
                required: true,
                pattern: /^[a-zA-Z]+$/,
              })}
            />
          </div>
          <div className="w-2"></div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Shajal"
              {...register("last_name", {
                required: true,
                pattern: /^[a-zA-Z]+$/,
              })}
            />
          </div>
        </div>
      ) }
      <div>
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          {...register("password", { required: true })}
        />
      </div>
      {isSignIn ? null:(
        <div>
          <label
            htmlFor="password1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            confirm password
          </label>
          <input
            type="password"
            name="password1"
            id="password1"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register("password1", { required: true })}
          />
        </div>
      )}
      <div className="flex items-start">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
      </div>
    </>
  );
}
