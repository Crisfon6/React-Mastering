import { useForm } from "react-hook-form";

interface IForm{
    name: string;
    email: string;
    password: string;
}

export const ReactHookForm = () => {
    const {register, handleSubmit, formState} = useForm<IForm>();
    const onSubmit = (data: IForm) => {
        console.log(data);
        console.log(formState);
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Form With Use Form library
            </h1>
            <hr className="border-t-2 border-gray-200 mb-6" />
            <div className="flex flex-col gap-4">
              <input
                {...register("name")}
                type="text"
                placeholder="Name"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                {...register("email")}
                type="email" 
                placeholder="Email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Password" 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer" onClick={handleSubmit(onSubmit)}>
                Submit
              </button>
            </div>
          </div>
        </div>
      );
}
