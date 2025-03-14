import EventCard from "./components/event-card";
import { useGetEvents } from "@/api/events/queries";

const Event = () => {
  const { data } = useGetEvents();
  return (
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  ">
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-24 h-1 gallery-bar"></div>
        <h1 className="text-2xl sm:text-3xl">Featured Events</h1>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-5 pb-10">
        {data?.map((d) => (
          <EventCard key={d.id} data={d} />
        ))}
        {(data?.length as number) < 0 && (
          <p className="text-center  text-lg col-span-12">Not Events</p>
        )}
      </div>
    </section>
  );
};

export default Event;
