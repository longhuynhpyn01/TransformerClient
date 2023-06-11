import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow-md bg-gray-50 md:flex md:items-center md:justify-between md:p-8 dark:bg-gray-800 dark:border-gray-600">
      {/* <span className="text-gray-500 text-md sm:text-center dark:text-gray-400"> */}
      <span className="text-center text-gray-600 dark:text-gray-400 font-">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 font-medium text-gray-500 text-md dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>

    // <div>
    //     <footer className="m-4 bg-white rounded-lg shadow dark:bg-gray-900">
    //         <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
    //             <div className="sm:flex sm:items-center sm:justify-between">
    //                 <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
    //                     <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
    //                     <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    //                 </a>
    //                 <ul className="flex flex-wrap items-center mb-6 font-medium text-gray-500 text-md sm:mb-0 dark:text-gray-400">
    //                     <li>
    //                         <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
    //                     </li>
    //                     <li>
    //                         <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
    //                     </li>
    //                     <li>
    //                         <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
    //                     </li>
    //                     <li>
    //                         <a href="#" className="hover:underline">Contact</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //             <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    //             <span className="block text-gray-500 text-md sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    //         </div>
    //     </footer>
    // </div>
  );
};

export default Footer;
