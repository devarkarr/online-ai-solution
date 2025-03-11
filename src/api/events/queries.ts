import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { EventSchema } from "./schema";

const getEvents = async () => {
  const response = await axios.get("user/events");
    return EventSchema.parse(response.data);
};

export const useGetEvents = () =>
  useQuery({
    queryKey: ["get-ratings"],
    queryFn: () => getEvents(),
    select: (data) => data._data,
  });
