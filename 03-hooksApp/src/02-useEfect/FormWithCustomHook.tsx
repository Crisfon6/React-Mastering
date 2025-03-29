import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log("formState changed");
  }, [formState.email]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Form With Custom Hook
        </h1>
        <hr className="border-t-2 border-gray-200 mb-6" />
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={formState.name}
            name="name"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={formState.email}
            name="email"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={formState.password}
            name="password"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onInputChange}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer" onClick={onResetForm}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
