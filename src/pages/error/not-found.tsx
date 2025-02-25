import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-screen space-y-6 max-w-6xl mx-auto flex flex-col justify-center items-center overflow-hidden">
      <h1 className="text-4xl font-semibold text-[#57007B]">Page Not Found</h1>
      <Button className="bg-[#57007B]">
        <Link to="/">
          <p>Back to home</p>
        </Link>
      </Button>
    </section>
  );
};

export default NotFound;
