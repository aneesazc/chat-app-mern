import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          SignUp
          <span className="text-blue-700"> ChatZone</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox />

          <a
            href="#"
            className="text-sm  hover:underline hover:text-white mt-2 inline-block"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


// import React from "react";
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-200">
//           SignUp
//           <span className="text-blue-700"> ChatZone</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-300">
//                 Full Name
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Full Name"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-300">
//                 Username
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-300">
//                 Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-300">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <GenderCheckbox />

//           <a
//             href="#"
//             className="text-sm  hover:underline hover:text-white mt-2 inline-block"
//           >
//             Already have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">SignUp</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;