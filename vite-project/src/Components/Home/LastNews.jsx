
export default function LastNews() {
  return (
 <div className=" w-[65vw]  px-[10vw] py-[5vh] rounded-[40px] border-2 border-white bg-black mx-auto p-6 space-y-6 text-white my-[20vh]">

      <div className=" p-6 rounded-lg text-center space-y-4">
        <h2 className="text-2xl font-bold">Latest News</h2>
        <p className="text-gray-black">Subscribe to our newsletter to get the latest updates!</p>
        <div className="flex flex-col items-center gap-3 mt-4">
          <input
            type="text"
            placeholder="Name"
            className=" text-white p-3 border border-blacj rounded w-full sm:w-2/3"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded w-full sm:w-2/3"
          />
          <button className="bg-black cursor-pointer border-2 border-white text-white px-5 py-3 rounded hover:bg-white hover:text-black transition mt-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>

  );
}
