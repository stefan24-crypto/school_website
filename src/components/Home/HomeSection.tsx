import React from "react";
import Navbar from "../Navbar/Navbar";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import UpcomingEvents from "./UpcomingEvents";
import { useAppSelector } from "../../store/hooks";
import { BasicChat } from "@ebereplenty/chatbot";

const HomeSection = () => {
  return (
    <section>
      <header className="bg-hero-pattern bg-no-repeat bg-center bg-cover relative text-center mx-auto flex flex-col h-screen">
        <Navbar />
        <main className="h-full w-full flex justify-center items-center">
          <h1 className="text-white align-middle items-center font-serif text-8xl">
            Naparima College In The World
          </h1>
        </main>
        <div className="w-full bg-gradient-to-b from-black/5 via-black/70 border-none to-black h-52"></div>
      </header>
      <footer className="bg-black text-white p-10 flex-col flex gap-4">
        <p className=" text-blue-700 text-xs font-semibold">LATEST ARTICLES</p>
        <h2 className="text-3xl font-bold  ">
          Keep Updated with the Latest News and Events
        </h2>
        <main className="flex gap-4 text-xl pt-12">
    
          <div className="w-1/2 flex items-start justify-center">
            <img src={image1} alt="" className="w-full max-w-lg" />
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <h2 className="font-bold">
              Another Fine Addition to the Naparima Collection
            </h2>
            <p className="font-light text-white/70">
              We are proud to announce that a team of five Naparima College
              students recently participated in the Arthur Lok Jack Business
              Tournament, a simulated business environment hosted on the CESIM
              platform from February to April.
            </p>
          </div>
        </main>
        <main className="flex gap-4 text-xl pt-12">
          <div className="w-1/2 flex flex-col gap-3">
            <h2 className="font-bold">
              Another Fine Addition to the Naparima Collection
            </h2>
            <p className="font-light text-white/70">
              We are proud to announce that a team of five Naparima College
              students recently participated in the Arthur Lok Jack Business
              Tournament, a simulated business environment hosted on the CESIM
              platform from February to April.
            </p>
          </div>
          <div className="w-1/2 flex items-start justify-center">
            <img src={image2} alt="" className="w-full max-w-lg" />
          </div>
        </main>
      </footer>
      <UpcomingEvents />
    </section>
  );
};

export default HomeSection;
