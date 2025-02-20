import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);


  const onSubmitHanlder = (e:React.FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
    e.preventDefault();
  }

  const goBackHandler = () =>{
    setSubmitted(false);
  };

  return (
    <section>
      <header className="bg-hero-pattern bg-no-repeat bg-center bg-cover relative text-center mx-auto flex flex-col h-screen bg-opacity-25">
        <Navbar />
        {submitted ? (
          <main className="h-full w-full flex justify-center items-center flex-col gap-10">
            <h1 className="text-5xl font-bold text-white">
              Thank You For Submitting Your Message
            </h1>
            <button
              className="px-4 py-2 bg-blue-700 text-white rounded-md w-32 "
              onClick={goBackHandler}
            >
              Go Back
            </button>
          </main>
        ) : (
          <main className="h-full w-full flex justify-center items-center">
            <div className="w-1/2">
              <h1 className="text-white font-bold text-6xl pb-12">
                Send us a Message
              </h1>
              <form action="submit" onSubmit={onSubmitHanlder}>
                <div className="flex justify-between gap-20">
                  <div className="flex flex-col gap-5 w-full">
                    <label
                      className="flex justify-start text-white/70"
                      htmlFor=""
                    >
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      className=" bg-transparent border-b outline-none text-white w-full"
                    />
                    <label
                      className="flex justify-start text-white/70"
                      htmlFor=""
                    >
                      Email
                    </label>
                    <input
                      required
                      type="text"
                      className=" bg-transparent border-b outline-none text-white w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-5 w-full">
                    <label
                      className="flex justify-start text-white/70"
                      htmlFor=""
                    >
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      className=" bg-transparent border-b outline-none text-white w-full"
                    />
                    <label
                      className="flex justify-start text-white/70"
                      htmlFor=""
                    >
                      Reason For Contact
                    </label>
                    <input
                      required
                      type="text"
                      className=" bg-transparent border-b outline-none text-white w-full"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="flex justify-start text-white/70 pt-6"
                    htmlFor=""
                  >
                    Message
                  </label>
                  <textarea
                    required
                    className="max-h-48 bg-transparent border-b outline-none text-white w-full"
                    name=""
                    id=""
                  ></textarea>
                </div>
                <div className="flex justify-end pt-6">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-700 text-white rounded-md w-32"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </main>
        )}

        <div className="w-full bg-gradient-to-b from-black/5 via-black/70 border-none to-black h-52"></div>
      </header>
    </section>
  );
};

export default Contact;
