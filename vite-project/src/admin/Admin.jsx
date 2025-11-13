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
import useDeleteProduct from "../hooks/useDeleteProduct";
import usePutEditProduct from "../hooks/usePutEditProduct";

export default function AdminPage() {
  const { data, refetch } = useGetAllProducts();
  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit, reset, register } = useForm({
    defaultValues:{
      title:"",
      id:0,
      price:0
    }
  });
  const { setToken } = useAuthStore();
  const {mutateAsync}=useDeleteProduct();
  const {mutateAsync:editProductMutation}=usePutEditProduct();
  const { inputValue, setInputValue } = useValueStore();
  const [tempValue, setTempValue] = useState("");

  function handleLogout() {
    Cookies.remove("token");
    setToken(null);
    location.pathname = "/login";
  }

  const handleSubmitInput = (e) => {
    e.preventDefault();
    setInputValue(tempValue);
    setTempValue("");
  };

  async function handleDelete(product){
    await mutateAsync(product.id);
    refetch();
  }

  if (!data) {
    return <>loading...</>;
  }

  return (
    <> 
      <div className="w-full flex justify-center my-[5vh]">
        <button onClick={handleLogout} className="cursor-pointer bg-black text-white px-10 py-5 rounded-md border border-black m-4 w-fit">
          <p style={{fontSize:"calc(25px + 1.5vw)"}}>Logout</p>
        </button>
      </div>

      <div className="w-full flex justify-center">
        <form
          onSubmit={handleSubmitInput}
          className="my-[10vh] flex justify-center items-center flex-col lg:flex-row gap-2 mt-6 bg-black w-fit py-[5vh] px-[5vw] rounded-4xl"
        >
          <input
            type="text"
            placeholder="Enter Code..."
            className="border border-white h-full text-white rounded px-3 py-2 w-[70vw] lg:w-[40vw]"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black h-full text-white px-4 py-2 rounded-md border border-white w-[70vw] lg:w-[30vw] cursor-pointer"
          >
            <p style={{fontSize:"calc(8px + 1.5vw)"}}>Submit</p>
          </button>
        </form>
      </div>

      <TableContainer
        component={Paper}
        className="overflow-x-auto w-full max-w-[85vw] sm:max-w-[90vw] md:max-w-[80vw] mx-auto mb-[15vh]"
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className="min-w-full text-sm sm:text-base">
          <TableHead className="bg-slate-100">
            <TableRow>
              <TableCell className="font-semibold text-xs sm:text-sm md:text-base">title</TableCell>
              <TableCell align="right" className="font-semibold text-xs sm:text-sm md:text-base">price</TableCell>
              <TableCell align="right" className="font-semibold text-xs sm:text-sm md:text-base">rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="hover:bg-slate-50 cursor-pointer transition"
              >
                <TableCell
                  component="th"
                  scope="row"
                  className="whitespace-nowrap text-xs sm:text-sm md:text-base"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                    reset({
                      id: row.id,
                      title: row.title,
                      price: row.price
                    });
                  }}
                >
                  {row.title}
                </TableCell>
                <TableCell align="right" className="whitespace-nowrap text-xs sm:text-sm md:text-base">{row.price}</TableCell>
                <TableCell align="right" className="whitespace-nowrap text-xs sm:text-sm md:text-base">{row.rating.rate}</TableCell>
                <TableCell align="center">
                  <div className="w-fit bg-red-500 rounded">
                    <button className="px-2 py-1 text-white text-sm font-medium cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(row);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div className="w-fit bg-yellow-300 rounded">
                    <button
                      className="px-2 py-1 text-white text-sm font-medium cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(true);
                        reset({
                          id: row.id,
                          title: row.title,
                          price: row.price
                        });
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {isOpen && (
        <div className="w-[90vw] sm:w-[500px] h-auto sm:h-[500px] p-5 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg border rounded-xl flex flex-col gap-4">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-black hover:text-red font-semibold text-lg transition cursor-pointer"
          >
            <b><i className="bi bi-x-square"></i></b>
          </button>

          <form
            onSubmit={handleSubmit(async (values) => {
              await editProductMutation(values);
              setIsOpen(false);
              refetch();
            })}
            className="flex flex-col gap-3"
          >
            <label className="text-sm sm:text-base font-medium">title</label>
            <input
              className="border-2 rounded-md p-2 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              {...register("title")}
            />

            <label className="text-sm sm:text-base font-medium">price</label>
            <input
              className="border-2 rounded-md p-2 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              {...register("price")}
            />

            <button
              type="submit"
              className="px-3 py-1 text-white bg-black cursor-pointer rounded text-sm sm:text-base font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
