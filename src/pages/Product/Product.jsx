import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";
import { Helmet } from "react-helmet-async";

const MAXIMUM_NUMBER_OF_CHARACTERS = 550;

const Product = () => {
  const { t } = useTranslation("product");

  const [data, setData] = useState("");
  const [inputs, setInputs] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [numberOfCharacters, setNumberOfCharacters] = useState(0);

  const handleChange = (e) => {
    const lengthOfCharacters = e.target.value.length;

    if (lengthOfCharacters <= MAXIMUM_NUMBER_OF_CHARACTERS) {
      setNumberOfCharacters(lengthOfCharacters);
      setInputs(e.target.value);
    } else {
      const value = e.target.value.slice(0, MAXIMUM_NUMBER_OF_CHARACTERS);
      setNumberOfCharacters(value.length);
      setInputs(value);
    }
  };

  const handleTranslate = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        "https://api-inference.huggingface.co/models/ntclai/en_vi_translation_1",
        { inputs: inputs },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer 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"
          }
        }
      );

      if (data.length > 0 && data[0].translation_text) {
        setData(data[0].translation_text);
        setError("");
      } else {
        setError(t("textError2"));
      }

      setLoading(false);
    } catch (error) {
      setError(t("textError1"));
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[800px] mx-auto my-16 min-h-[500px]">
      <Helmet>
        <title>{t("titlePage")}</title>
        <meta name="description" content="Trang chủ dự án TranslateHub" />
      </Helmet>
      <div className="p-8">
        <div className="flex items-center justify-center">
          <img src={logo} className="h-20 mr-6" alt="TranslateHub Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white md:text-5xl">
            TranslateHub
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="relative p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <textarea
                id="search"
                rows={6}
                className="w-full px-0 mb-2 text-sm text-gray-900 border-0 resize-none bg-gray-50 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 outline-0"
                placeholder={t("placeholderText")}
                required
                value={inputs}
                onChange={handleChange}
              />
              <label
                htmlFor="text"
                className="absolute text-xs text-gray-900 opacity-70 right-7 dark:text-gray-300 bottom-2"
              >
                {numberOfCharacters}/{MAXIMUM_NUMBER_OF_CHARACTERS}
              </label>
            </div>
          </div>
          <div className="flex items-center justify-end px-3 py-2">
            <button
              type="button"
              className={`inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ${
                loading ? "cursor-not-allowed" : ""
              }`}
              onClick={() => (!loading ? handleTranslate() : {})}
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
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t("translation")}</h5>
          <blockquote className="p-4 my-4 min-h-[144px] border-l-4 border-gray-300 rounded-lg shadow-xl dark:shadow-none bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            {loading ? (
              <div className="w-full animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              </div>
            ) : (
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data ? data : ""}</p>
            )}
          </blockquote>
          {error && <p className="mb-3 font-normal text-red-700 dark:text-red-400">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Product;
