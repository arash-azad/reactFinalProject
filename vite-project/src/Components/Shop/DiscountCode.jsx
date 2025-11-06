import { useValueStore } from "../../store/useValueStore";

export default function DiscountCodeCard() {
  const { inputValue } = useValueStore();

  return (
    <div className="w-full flex justify-center">
      <div className="font-[700] border-y-[20px]  my-[10vh] mx-10 px-[5vw] py-[5vh] w-fit h-fit text-center border border-black rounded-[40px] cursor-pointer bg-white flex flex-col justify-center items-center">
        <p style={{ fontSize: "calc(20px + 1vw)" }} className="text-center mb-4">
          Discount Code:
        </p>
        <p style={{ fontSize: "calc(24px + 1vw)" }} className="text-center font-bold">
          {inputValue || "—"}
        </p>
      </div>
    </div>
  );
}
