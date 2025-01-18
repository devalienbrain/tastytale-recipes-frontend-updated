"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlinePhone,
  AiOutlineFileImage,
  AiOutlineHome,
} from "react-icons/ai"; // React icons
import img from "@/assets/joinImg.jpg";
import { useState } from "react";
import { useRouter } from "next/navigation";

export type UserData = {
  userName: string;
  email: string;
  password: string;
  phone: string;
  photoUrl: string;
  address: string;
};

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    try {
      // const response = await fetch("http://localhost:5000/api/auth/signup", {
      const response = await fetch(
        "https://tasty-tales-recipe-sharing-server.vercel.app/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.userName,
            phone: data.phone,
            photoUrl: data.photoUrl,
            address: data.address,
            email: data.email,
            password: data.password,
            role: "user", // Hardcoded as "user"
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();
      setSuccess("Registration successful!");
      setError(""); // Clear any previous errors
      console.log("Register response:", result);
      router.push("/login");
    } catch (err: any) {
      console.error(err.message);
      setError(err.message);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-white rounded-2xl">
    //   <div className="w-full text-center">
    //     <h1 className="text-4xl font-extrabold text-cyan-600 mb-5 pt-16">
    //       Register <span className="text-black"> Here</span>
    //     </h1>
    //     <div className="flex flex-col md:flex-row-reverse justify-between items-center">
    //       {/* Left Side - Image */}
    //       <div className="md:w-1/2 hidden md:block">
    //         <Image src={img} width={500} height={500} alt="Join us" />
    //       </div>

    //       {/* Right Side - Form */}
    //       <div className="md:w-1/2 w-full p-5">
    //         <form
    //           onSubmit={handleSubmit(onSubmit)}
    //           className=" p-6 rounded-xl shadow-md"
    //         >
    //           {/* Full Name */}
    //           <div className="mb-4">
    //             <label className="flex items-center text-gray-700 mb-2">
    //               <AiOutlineUser className="mr-2 text-xl" />
    //               <span className="font-semibold">Full Name</span>
    //             </label>
    //             <input
    //               type="text"
    //               {...register("userName", { required: true })}
    //               placeholder="Enter your full name"
    //               className={`input input-bordered w-full px-3 py-2 rounded-lg border ${
    //                 errors.userName ? "border-red-500" : "border-gray-300"
    //               } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
    //             />
    //             {errors.userName && (
    //               <p className="text-red-500 text-sm mt-1">Name is required.</p>
    //             )}
    //           </div>
    //           {/* Phone Number */}
    //           <div className="mb-4">
    //             <label className="flex items-center text-gray-700 mb-2">
    //               <AiOutlinePhone className="mr-2 text-xl" />
    //               <span className="font-semibold">Phone Number</span>
    //             </label>
    //             <input
    //               type="text"
    //               {...register("phone", { required: true })}
    //               placeholder="Enter your phone number"
    //               className={`input input-bordered w-full px-3 py-2 rounded-lg border ${
    //                 errors.phone ? "border-red-500" : "border-gray-300"
    //               } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
    //             />
    //             {errors.phone && (
    //               <p className="text-red-500 text-sm mt-1">
    //                 Phone Number is required.
    //               </p>
    //             )}
    //           </div>
    //           {/* Photo URL */}
    //           <div className="mb-4">
    //             <label className="flex items-center text-gray-700 mb-2">
    //               <AiOutlineFileImage className="mr-2 text-xl" />
    //               <span className="font-semibold">Photo URL</span>
    //             </label>
    //             <input
    //               type="text"
    //               {...register("photoUrl", { required: true })}
    //               placeholder="Enter your photo url"
    //               className={`input input-bordered w-full px-3 py-2 rounded-lg border ${
    //                 errors.photoUrl ? "border-red-500" : "border-gray-300"
    //               } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
    //             />
    //             {errors.photoUrl && (
    //               <p className="text-red-500 text-sm mt-1">
    //                 Photo URL is required.
    //               </p>
    //             )}
    //           </div>
    //           {/* Address */}
    //           <div className="mb-4">
    //             <label className="flex items-center text-gray-700 mb-2">
    //               <AiOutlineHome className="mr-2 text-xl" />
    //               <span className="font-semibold">Address</span>
    //             </label>
    //             <input
    //               type="text"
    //               {...register("address", { required: true })}
    //               placeholder="Enter your address"
    //               className={`input input-bordered w-full px-3 py-2 rounded-lg border ${
    //                 errors.address ? "border-red-500" : "border-gray-300"
    //               } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
    //             />
    //             {errors.address && (
    //               <p className="text-red-500 text-sm mt-1">
    //                 Address is required.
    //               </p>
    //             )}
    //           </div>

    //           {/* Email */}
    //           <div className="mb-4">
    //             <label className="flex items-center text-gray-700 mb-2">
    //               <AiOutlineMail className="mr-2 text-xl" />
    //               <span className="font-semibold">Email</span>
    //             </label>
    //             <input
    //               type="email"
    //               {...register("email", { required: true })}
    //               placeholder="Enter your email"
    //               className={`input input-bordered w-full px-3 py-2 rounded-2xl border ${
    //                 errors.email ? "border-red-500" : "border-gray-300"
    //               } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
    //             />
    //             {errors.email && (
    //               <p className="text-red-500 text-sm mt-1">
    //                 Email is required.
    //               </p>
    //             )}
    //           </div>

    //           {/* Password */}
    //           <div className="mb-4">
    //             <label className="flex items-center text-gray-700 mb-2">
    //               <AiOutlineLock className="mr-2 text-xl" />
    //               <span className="font-semibold">Password</span>
    //             </label>
    //             <input
    //               type="password"
    //               {...register("password", { required: true })}
    //               placeholder="Enter your password"
    //               className={`input input-bordered w-full px-3 py-2 rounded-lg border ${
    //                 errors.password ? "border-red-500" : "border-gray-300"
    //               } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
    //             />
    //             {errors.password && (
    //               <p className="text-red-500 text-sm mt-1">
    //                 Password is required.
    //               </p>
    //             )}
    //           </div>

    //           {/* Submit Button */}
    //           <div className="mt-6">
    //             <button
    //               type="submit"
    //               className="btn bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg w-full"
    //             >
    //               Register
    //             </button>
    //           </div>
    //           {/* Already have an account */}
    //           <p className="text-center mt-4 text-gray-700">
    //             Already have an account?{" "}
    //             <Link href="/login" className="text-cyan-500 font-semibold">
    //               Login
    //             </Link>
    //           </p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-center text-4xl font-extrabold text-cyan-600 mb-5 pt-8">
          Login to Your Account
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 hidden md:block">
            <Image
              src={img}
              width={500}
              height={500}
              alt="Login page"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="flex items-center text-gray-800 font-semibold mb-2">
                  <AiOutlineMail className="mr-2 text-xl text-cyan-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-cyan-400`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="flex items-center text-gray-800 font-semibold mb-2">
                  <AiOutlineLock className="mr-2 text-xl text-cyan-600" />
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-cyan-400`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center text-gray-700">
                  <input type="checkbox" className="mr-2" id="remember-me" />
                  Remember Me
                </label>
                <Link href="/forgot-password" className="text-cyan-500 text-sm">
                  Forgot Password?
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-center mt-3">{error}</p>
              )}
              <p className="text-center text-gray-700 mt-4">
                Don’t have an account?{" "}
                <Link href="/register" className="text-cyan-500 font-bold">
                  Sign up here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
