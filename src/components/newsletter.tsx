"use client";

import axios from "axios";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const path = usePathname();
  const isSlugPath = path.startsWith("/blogs/" || "/newsletter/");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const formBody = `userGroup=${encodeURIComponent(
        ""
      )}&email=${encodeURIComponent(email)}`;

      const res = await axios.post("YOUR NEWSLETTER API URL", formBody, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (res.status === 200) {
        setEmail("");
        toast.success("Thank you for subscribing to Luminary!");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data.message;
        toast.error(message || "An error occurred");
      } else {
        toast.error("An error occurred");
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="mt-1">
      {path === "/" ? (
        <h1 className="font-medium text-gray-900 mb-4 text-lg">
          Meditations Newsletter
        </h1>
      ) : isSlugPath ? (
        <h1 className="font-medium text-gray-900 my-4 text-lg">
          Subscribe To My Newsletter
        </h1>
      ) : null}
      <p className="text-gray-500 mt-4">
        Stay ahead of the curve with my monthly newsletter called Meditations.
        Receive valuable insights on the latest trends, techniques, and tools in
        web development and design.
      </p>
      <form className="relative" onSubmit={handleSubmit}>
        <input
          className="border w-full mt-4 px-2 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
        <button
          className="bg-gray-900 hover:bg-gray-700 inline-block top-6 text-xs right-1 text-white px-2 py-2 rounded-md absolute disabled:opacity-80"
          type="submit"
          disabled={email.length === 0}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
