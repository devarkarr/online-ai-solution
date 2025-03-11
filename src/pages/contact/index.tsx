import Logo from "@/assets/contact/logo.svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import countries from "world-countries";
import { toast } from "sonner";
import { ContactPayload } from "@/api/contact-us/interface";
import { useContactUsMutation } from "@/api/contact-us/mutation";
import { AxiosError } from "axios";
import RatingModal from "./components/rating-modal";
import { useState } from "react";
import useStore from "@/store/useStore";
// import sendEmail from "@/service/email";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string().min(9, {
    message: "Phone must be at least 9 characters.",
  }),
  country: z.string().min(1, {
    message: "Country is required",
  }),
  companyName: z.string().min(1, {
    message: "Country Name is required",
  }),
  jobTitle: z.string().min(1, {
    message: "Job title is required",
  }),
  jobDetail: z.string().min(1, {
    message: "Job Detail is required",
  }),
});

const countryOptions = countries.map((country) => ({
  value: country.cca2, // Country code
  label: country.name.common, // Country name
}));

const Contact = () => {
  const [opened, setOpened] = useState(false);
  const { setUser } = useStore();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      country: "",
      jobTitle: "",
      jobDetail: "",
    },
  });

  const useContact = useContactUsMutation();
  function onSubmit(values: ContactPayload) {
    useContact.mutate(values, {
      onSuccess: (data) => {
        toast.success(data._metadata.message, {
          position: "top-center",
          style: {
            background: "#21c389",
            color: "#fff",
          },
        });
        form.reset();
        setUser({ userId: data._data.id });
        setOpened((prev) => !prev);
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
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  pb-10">
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-10 h-1 gallery-bar"></div>
        <h1 className="text-2xl sm:text-3xl">Contact Us</h1>
      </div>
      <div className="w-full flex max-sm:flex-col justify-center gap-7 my-12 items-center">
        <div className="text-center space-y-4 w-full sm:w-[50%]">
          <div className="space-y-3 flex flex-col items-center">
            <img src={Logo} alt="" />
            <h4 className="text-lg md:text-2xl">Ai-Solution</h4>
          </div>
          <h5>Contact us</h5>
          <p className="w-60 mx-auto text-slate-500 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <p className="text-slate-500">+923183561921</p>
        </div>
        <div className="w-full sm:w-[50%] p-5 sm:p-7 border rounded-lg">
          <h1 className="text-xl md:text-2xl font-medium text-center">
            Contact Our team
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="gap-4 w-full grid grid-cols-2 mt-7"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter phone"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        {countryOptions.map((country) => (
                          <SelectItem key={country.label} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter job title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobDetail"
                render={({ field }) => (
                  <FormItem className=" col-span-full">
                    <FormLabel>Job Detail</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Enter job detail"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={useContact.isPending}
                type="submit"
                className="w-full col-span-full"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <RatingModal opened={opened} close={() => setOpened(false)} />
    </section>
  );
};

export default Contact;
