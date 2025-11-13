import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import usePostLogin from "./usePostLogin";
import Cookies from "js-cookie";
import useAuthStore from "../store/useAuthStore";

export default function LoginPage() {
  const { handleSubmit, register } = useForm();
//   const { mutateAsync, isLoading } = usePostLogin();
  const { token, setToken } = useAuthStore();

  if (token) {
    location.pathname = "/admin";
  }

  function submitHandler(formData) {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        Cookies.set("token", data.token, {
          expires: 7,
        });
        setToken(data.token);
      });
  }

return (
  <>
      <form
      className="w-full border-black py-[20vh] border-y-[5vh] border-x-[5vw] min-h-screen flex flex-col justify-center items-center  text-white"
      onSubmit={handleSubmit(submitHandler)}
      >
      <Box
        component="div"
        className="flex flex-col w-[80%] max-w-md mb-[10vh] shadow-2xl shadow-white border-4 border-white"
      >
        <Typography
          sx={{ padding: { md: "10px", lg: "12px" } }}
          component="label"
          id="username"
          className="mb-2 text-sm font-semibold"
        >
          username:
        </Typography>
        <TextField
          {...register("username")}
          className="border border-white rounded-md p-2 focus:outline-none focus:border-white bg-white text-white"
        />
      </Box>

      <Box
        component="div"
        className="flex flex-col w-[80%] max-w-md shadow-2xl shadow-white border-4 border-white"
      >
        <Typography
        sx={{ padding: { md: "4px", lg: "8px" } }}
          component="label"
          id="password"
          className="mb-2 text-sm font-semibold"
        >
          password:
        </Typography>
        <TextField
          {...register("password")}
          className="border border-black rounded-md p-2 focus:outline-none focus:border-black bg-white text-black"
        />
      </Box>

            <button
              type="submit"
              className="relative bg-black text-white px-10 py-3 rounded-md my-[10vh] cursor-pointer border-2 border-white font-semibold uppercase tracking-widest shadow-[4px_4px_0px_black] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150"
            >
              submit
            </button>

            <div className="inline-block border-2 border-white mt-[5vh] p-4">
              <div className="text-center text-white">johnd</div>
              <div className="text-center text-white">m38rmF$</div>
              <div>
              <a target="_blank" href="https://fakestoreapi.com/users"><p className="text-center underline">Users</p></a>
              </div>
            </div>

    </form>

  </>
);

}
