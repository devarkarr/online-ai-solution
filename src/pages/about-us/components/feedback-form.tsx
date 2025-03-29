import { RatingPayload } from "@/api/about-us/interface";
import { useRating } from "@/api/about-us/mutation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  rating: z.number().min(1, {
    message: "Rating is required",
  }),
  name: z.string().min(1, {
    message: "name is required",
  }),
  feedback: z.string().min(1, {
    message: "Feedback is required",
  }),
});

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: "",
      rating: 0,
      name: "",
    },
  });

  const ratingMutation = useRating();

  function onSubmit(values: RatingPayload) {
    ratingMutation.mutate(values, {
      onSuccess: (data) => {
        toast.success(data._metadata.message, {
          position: "top-center",
          style: {
            background: "#21c389",
            color: "#fff",
          },
        });
        form.reset();
        setRating(0);
        close();
      },
      onError: (error) => {
        const errMsg =
          error instanceof AxiosError
            ? error.response?.data._metadata.message
            : "Something went wrong!";
        toast.success(errMsg, {
          position: "top-center",
          style: {
            background: "#E52020",
            color: "#fff",
          },
        });
      },
    });
  }

  return (
    <div className="dark:bg-gray-950 p-5 rounded-2xl border shadow-sm">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl">Feedback Form</h1>
        <p className="text-sm text-gray-500">
          WE VALUE YOUR OPINION. PLEASE LEAVE YOUR FEEDBACK BELOW.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-4 w-full grid grid-cols-2 mt-7"
        >
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem className=" col-span-full">
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    {new Array(rating).fill(0).map((_, i) => (
                      <FaStar
                        onClick={() => {
                          field.onChange(i);
                          setRating(i);
                        }}
                        key={i}
                        size={27}
                        className="cursor-pointer text-[#b93f7e]"
                      />
                    ))}
                    {new Array(5 - rating).fill(0).map((_, i) => (
                      <FaRegStar
                        onClick={() => {
                          field.onChange(rating + i + 1);
                          setRating((prev) => prev + i + 1);
                        }}
                        key={i}
                        size={27}
                        className={clsx(`cursor-pointer`)}
                      />
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className=" col-span-full">
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem className=" col-span-full">
                <FormLabel>Your Feedback</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="say your feedback..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={ratingMutation.isPending}
            type="submit"
            className="w-full col-span-full bg-[#F48C06] hover:bg-[#F48C06]"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FeedbackForm;
