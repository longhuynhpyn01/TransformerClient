import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/data");
      // const response = await axios.get('localhost:8000/api/data');
      setData(response.data.message);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleTranslate = async () => {
    console.log("input", input);

    const response = await axios.post(
      "http://127.0.0.1:8000/api/data",
      { input: input },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log("response postData:", response);
    setData(response.data.message);
  };

  return (
    <div className="max-w-[800px] mx-auto my-16 min-h-[500px]">
      <div className="p-8">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-6 h-26" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white md:text-5xl">
            Flowbite
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your search
              </label>
              <textarea
                id="search"
                rows={4}
                className="w-full px-0 text-sm text-gray-900 border-0 bg-gray-50 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 outline-0"
                placeholder="Enter the text to be translated..."
                required
                defaultValue={""}
                value={input}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-end px-3 py-2">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              onClick={handleTranslate}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="border-t dark:border-gray-600" />

        <div className="mb-12">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Translation</h5>
          <blockquote className="p-4 my-4 border-l-4 border-gray-300 rounded-lg shadow-xl dark:shadow-none bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
              {data
                ? data
                : "Flowbite is just awesome. It contains tons of predesigned components and pages starting from loginscreen to complex dashboard. Perfect choice for your next SaaS application."}
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Home;
