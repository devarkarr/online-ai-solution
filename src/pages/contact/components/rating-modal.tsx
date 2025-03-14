import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import clsx from "clsx";
import { useState } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { RatingPayload } from "@/api/about-us/interface";
import { useRating } from "@/api/about-us/mutation";

type Props = {
  opened: boolean;
  close: () => void;
  userId: string;
  resetUserId: () => void;
};

const formSchema = z.object({
  userId: z.string(),
  rating: z.number().min(1, {
    message: "Job title is required",
  }),
  desc: z.string().min(1, {
    message: "Description is required",
  }),
});

const RatingModal = ({ opened, close, userId, resetUserId }: Props) => {
  const [rating, setRating] = useState(0);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: userId,
      desc: "",
      rating: 0,
    },
  });

  console.log(form.getValues());
  const ratingMutation = useRating();
  function onSubmit(values: RatingPayload) {
    ratingMutation.mutate(
      { ...values, userId: userId },
      {
        onSuccess: (data) => {
          toast.success(data._metadata.message, {
            position: "top-center",
            style: {
              background: "#21c389",
              color: "#fff",
            },
          });
          form.reset();
          resetUserId();
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
      }
    );
  }
  return (
    <Dialog open={opened} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rating</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </DialogDescription>
        </DialogHeader>
        <div>
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
                name="desc"
                render={({ field }) => (
                  <FormItem className=" col-span-full">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Enter Description"
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
                className="w-full col-span-full"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RatingModal;
