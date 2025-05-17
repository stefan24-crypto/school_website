import React from 'react';
import Bubble from '../UI/Bubble';

const ForStudent = () => {
    return (
      <section className="p-12 flex flex-col px-20">
        <header>
          <h1 className="text-4xl font-bold">For Students</h1>
          <p className="text-black/60 pt-8">
            Get access all your online systems, Google Classroom, School Email,
            Student Portals and other links of interest.
          </p>
        </header>
        <main className="flex flex-col justify-between w-1/2 pt-12">
          <div>
            <h2 className="text-xl font-bold py-8">
              Application Form for entry into Lower 6 2024/2025
            </h2>
            <Bubble link="https://naparimacollege.org/wp-content/uploads/2016/11/Naparima-College-Lower-6-Application-Form-2024.pdf">
              Application Form
            </Bubble>
            <p className="text-black/60 pt-8">
              Deadline for submission of this form via
              lower6application@nc.edu.tt or drop off at the school’s main
              office is Friday 23rd August, 2024.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold py-8">
              Query Form for the 2024 CXC Examinations
            </h2>
            <Bubble link="https://naparimacollege.org/wp-content/uploads/2016/11/Naparima-College-2024-Examinations-Query-Form.pdf">
              Query Form
            </Bubble>
          </div>
          <div>
            <h2 className="text-xl font-bold py-8">CXC Registration Forms</h2>
            <div className="flex gap-8">
              <Bubble link="https://naparimacollege.org/wp-content/uploads/2024/09/CAPE-Form-Upper-6-2025.pdf">
                Upper 6
              </Bubble>
              <Bubble link="https://naparimacollege.org/wp-content/uploads/2024/09/CAPE-Form-Lower-6-2025.pdf">
                Lower 6
              </Bubble>
              <Bubble link="https://naparimacollege.org/wp-content/uploads/2024/09/CSEC-Form-2025-1.pdf">
                CSEC
              </Bubble>
            </div>
            <p className="text-black/60 pt-8">
              <h2 className="font-bold">INSTRUCTIONS:</h2>
              <ul>
                <li>Click on the respective registration form above.</li>
                <li>Save it to your desktop.</li>
                <li>Open with Adobe Acrobat Reader.</li>
                <li>Fill out the form as accurately as possible.</li>
                <li>Digitally sign the form (if possible).</li>
                <li>
                  Print the form and submit on or before the deadline date to
                  your Form Teacher.
                </li>
              </ul>
              <h2 className="font-bold">
                Deadline for Submission: Friday 30th August, 2024.
              </h2>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold py-8">CSEC and CAPE Timetables</h2>
            <div className="flex gap-8">
              <Bubble link="https://www.cxc.org/examinations/csec/timetables/">
                CSEC
              </Bubble>
              <Bubble link="https://www.cxc.org/examinations/cape/timetables/">
                CAPE
              </Bubble>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold py-8">
              Co and Extra Curricular Activities
            </h2>
            <div className="grid gap-8 grid-cols-3">
              <Bubble link="https://www.youtube.com/watch?v=6wIv1Lm_DLE">
                Lets Go to Naps
              </Bubble>
              <Bubble link="https://docs.google.com/forms/d/e/1FAIpQLSd5--Z2cEGRzRLx4mqfRuHTqh2tc-iAy4tJCyruF8S3PM26pQ/closedform">
                Big Brother Programme
              </Bubble>
              <Bubble link="https://classroom.google.com/c/MzA1MDE4NzY1MDcy?cjc=flkxgdu">
                Chess Club
              </Bubble>
              <Bubble link="https://classroom.google.com/c/NDA3NjEwMDU0NDM4?cjc=bebviii">
                Geography Club
              </Bubble>
              <Bubble link="https://classroom.google.com/c/MjI2Nzc2NjkzNTMz?cjc=gs5cg3j">
                Indian Cultural Club
              </Bubble>
              <Bubble link="https://chat.whatsapp.com/J7nVIS4pbvSFPyZk0IuGT3">
                Interact Club
              </Bubble>
              <Bubble link="https://chat.whatsapp.com/FhpHrLRnGjIGABv2RAYYgW">
                Literary and Debating Society
              </Bubble>
              <Bubble link="https://classroom.google.com/c/MzA1MzAwMzQxNjIz?cjc=cm4euh4">
                RSC IT Club
              </Bubble>
              <Bubble link="https://classroom.google.com/c/NDA3NjAxNzkwNTE4?cjc=qjqg2s4">
                Sign Language Choir
              </Bubble>
            </div>
          </div>
        </main>
      </section>
    );
};

export default ForStudent;