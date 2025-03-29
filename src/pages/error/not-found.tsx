import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="dark:bg-gray-900">
      <section className="h-[70vh] space-y-6 max-w-6xl mx-auto flex flex-col justify-center items-center overflow-hidden">
        <h1 className="text-4xl font-semibold text-[#F48C06]">404 Not Found</h1>
        <Button className="bg-[#F48C06]">
          <Link to="/">
            <p>Back to home</p>
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default NotFound;
