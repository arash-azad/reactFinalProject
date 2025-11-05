import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .max(10, "Name is too long")
    .min(3, "Name is too short"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function LastNews() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    setSuccess(true);
    reset({ name: "", email: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="w-[65vw] px-[10vw] py-[5vh] rounded-[40px] border-2 border-white bg-black mx-auto p-6 space-y-6 text-white my-[20vh]">
      <div className="p-6 rounded-lg text-center space-y-4">
        <h2 className="text-2xl font-bold">Latest News</h2>
        <p className="text-gray-black">
          Subscribe to our newsletter to get the latest updates!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-3 mt-4"
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="text-white p-3 border border-gray-300 rounded w-full sm:w-2/3"
          />
          {errors.name && (
            <p className="text-red-400 text-sm">{errors.name.message}</p>
          )}

          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="text-white p-3 border border-gray-300 rounded w-full sm:w-2/3"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}

          <button
            type="submit"
            className="bg-black cursor-pointer border-2 border-white text-white px-5 py-3 rounded hover:bg-white hover:text-black transition mt-2"
          >
            Subscribe
          </button>
        </form>

        {success && (
          <p className="text-green-400 text-sm mt-3">
            submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
}
