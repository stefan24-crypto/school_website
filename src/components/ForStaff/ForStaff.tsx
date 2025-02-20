import React from 'react';
import Bubble from '../UI/Bubble';

const ForStaff = () => {
    return (
      <section className="p-12 flex flex-col px-20">
        <header>
          <h1 className="text-4xl font-bold">For Staff</h1>
          <p className="text-black/60 pt-8">
            Staff of Naparima College can find links to your online systems,
            links of interest from the Ministry of Education and other entities.
          </p>
        </header>
        <main className="p-6 flex justify-between w-1/2 pt-12 font-semibold">
          <Bubble link="https://termreports.naparimacollege.link/">
            Staff Portal Login
          </Bubble>
          <Bubble link="https://classroom.google.com/">
            Google Classroom Login
          </Bubble>
          <Bubble link="https://mail.google.com/mail/u/0/#inbox">
            School Email
          </Bubble>
        </main>
      </section>
    );
};

export default ForStaff;