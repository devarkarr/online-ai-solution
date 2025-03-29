// import { ShieldOff } from "lucide-react";
import { ShieldOff } from "lucide-react";
import EventCard from "./components/event-card";
import { useGetEvents } from "@/api/events/queries";
import { Skeleton } from "@/components/ui/skeleton";

const Event = () => {
  const { data, isPending } = useGetEvents();
  return (
    <div className="dark:bg-gray-900">
      <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  ">
        <div className="flex items-center w-full flex-col space-y-2">
          <h1 className="text-2xl sm:text-3xl ">
            <span className="text-[#F48C06]">New Events</span>
          </h1>
        </div>
        {!data && (
          <div className="flex flex-col items-center mt-16">
            <ShieldOff />
            <p className="text-center  text-lg col-span-12">No Record</p>
          </div>
        )}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-5 pb-10">
          {isPending
            ? new Array(6).fill(0).map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <Skeleton className="h-[250px]  rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-[250px]" />
                    <Skeleton className="h-6 w-[200px]" />
                  </div>
                </div>
              ))
            : data?.map((d) => <EventCard key={d.id} data={d} />)}
        </div>
      </section>
    </div>
  );
};

export default Event;
