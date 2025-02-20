import React from "react";
import arrow from "../../images/arrow.png";
import Event from "../UI/Event";

const UpcomingEvents = () => {
  return (
    <section className=" h-40 flex justify-between bg-blue-700 text-white">
      <div className="flex flex-col justify-center items-center p-12 w-1/4  bg-blue-600 font-md">
        <p className="text-center">Upcoming </p>
        <p className="text-center">Events</p>
        <img className="w-9" src={arrow} alt="" />
      </div>
      <div className="flex justify-between gap-6 p-6">
        <Event
          date={27}
          month={"Sept"}
          name={"Football"}
          time={"3:30pm-5:30pm"}
          desc={
            "Naparima College Grounds, Lewis Street San Fernando, Trinidad and Tobago"
          }
        />
        <Event
          date={27}
          month={"Sept"}
          name={"Football"}
          time={"3:30pm-5:30pm"}
          desc={
            "Naparima College Grounds, Lewis Street San Fernando, Trinidad and Tobago"
          }
        />{" "}
        <Event
          date={27}
          month={"Sept"}
          name={"Football"}
          time={"3:30pm-5:30pm"}
          desc={
            "Naparima College Grounds, Lewis Street San Fernando, Trinidad and Tobago"
          }
        />
      </div>
    </section>
  );
};

export default UpcomingEvents;
