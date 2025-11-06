import {
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useGetAllProducts from "../hooks/useGetAllProducts";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Cookies from "js-cookie";
import useAuthStore from "../store/useAuthStore";
import { useValueStore } from "../store/useValueStore";

export default function AdminPage() {
  const { data } = useGetAllProducts();
  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit, reset, register } = useForm();
  const { setToken } = useAuthStore();

        function handleLogout() {
          Cookies.remove("token");
          setToken(null);
          location.pathname = "/login";
        }
        const { inputValue, setInputValue } = useValueStore();
        const [tempValue, setTempValue] = useState("");
      
        const handleSubmitInput = (e) => {
        e.preventDefault();
        setInputValue(tempValue);
        setTempValue("");
        };

  if (!data) {
    return <>loading...</>;
  }
    console.log(data);



  return (
    <> 
    <div className="w-full flex justify-center my-[5vh]" ><button onClick={handleLogout}className=" cursor-pointer bg-black text-white px-4 py-2 rounded-md border border-black m-4 w-[30vw]">
        <p style={{fontSize:"calc(8px + 1.5vw)"}}>Logout</p>
        </button></div>
          <div className="w-full flex justify-center" ><form
        onSubmit={handleSubmitInput}
        className=" my-[10vh] flex justify-center items-center gap-2 mt-6 bg-white w-fit py-[5vh] px-[5vw] rounded-4xl"
      >
        <input
          type="text"
          placeholder="Enter Code..."
          className="border border-gray-400 rounded px-3 py-2 w-[40vw] "
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md border border-black w-[30vw] cursor-pointer"
        >
            <p style={{fontSize:"calc(8px + 1.5vw)"}} >
          Submit
            </p>
        </button>
      </form></div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>title</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => {
                  setIsOpen(true);
                  reset({
                    title: row.title,
                  });
                }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.rating.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {isOpen && (
        <div className="w-[500px] h-[500px] bg-slate-200 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg border-1">
          <form>
            <label htmlFor="">title</label>
            <input className="border-2" type="text" {...register("title")} />
          </form>
        </div>
      )}
    </>
  );
}
