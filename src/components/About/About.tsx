import React from "react";
import roger from "../../images/roger.jpg";

const About = () => {
  return (
    <section className="p-12 flex flex-col px-20">
      <header className="flex justify-between gap-20">
        <div className="w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className=" text-blue-700 text-xs font-semibold">
              A MESSAGE FROM THE PRINCIPAL
            </p>
            <h1 className="text-4xl font-bold">Mr. Roger Ali</h1>
          </div>
          <p className="text-black/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <img src={roger} alt="" />
        </div>
      </header>
      <main className="flex justify-between gap-20 pt-20">
        <div>
          <p className=" text-blue-700 text-xs font-semibold">COLLEGE HYMM</p>
          <h1 className="text-4xl font-bold">Naparima College Hymm</h1>
          <br />
          <p>Our Alma Mater dear,</p>
          <p>the school we all revere,</p>
          <p>make us worthy.</p>
          <p>Help us ever to be</p>
          <p>all that we ought to be,</p>
          <p>and always proud of thee:</p>
          <p>Naparima.</p>
          <br />
          <p>To thee the best we owe</p>
          <p>with which we may endow</p>
          <p>our island home.</p>
          <p>No matter where we roam,</p>
          <p>if near or far from home,</p>
          <p>let us be always one</p>
          <p>Naparima.</p>
        </div>
        <div>
          <iframe
            width="750"
            height="422"
            src="https://www.youtube.com/embed/eb7fgyDnVvA"
            title="College Hymn"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </section>
  );
};

export default About;
