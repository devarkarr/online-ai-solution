// import { ShieldOff } from "lucide-react";
import EventCard from "./components/event-card";
import { useGetEvents } from "@/api/events/queries";

const Event = () => {
  const { data } = useGetEvents();
  return (
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  ">
      <div className="flex items-center w-full flex-col space-y-2">
        <h1 className="text-2xl sm:text-3xl ">
          <span className="text-[#F48C06]">New Events</span>
        </h1>
      </div>
      {/* {!data && (
        <div className="flex flex-col items-center mt-16">
          <ShieldOff />
          <p className="text-center  text-lg col-span-12">Not Events</p>
        </div>
      )} */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-5 pb-10">
        {data?.map((d) => (
          <EventCard key={d.id} data={d} />
        ))}
      </div>
    </section>
  );
};

export default Event;
