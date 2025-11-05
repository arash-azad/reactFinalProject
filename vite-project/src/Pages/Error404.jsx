export default function Error(){
    return(
        <>
        <div className="w-full flex justify-center  my-[10vh]" >
        <div className="w-fit h-fit bg-white py-[10vh] px-[5vw] shadow-xl shadow-white border-5 border-black rounded-2xl ">
        <p className="text-center" style={{fontSize:"calc(15px + 1.5vw)"}}>
            <span style={{fontSize:"calc(30px + 1.5vw)"}} >
                404 - Page Not Found
            </span> <br />
            The page you’re looking for doesn’t exist or has been moved. <br />
            Please check the URL or return to the homepage. <br />
            <span style={{fontSize:"calc(30px + 1.5vw)"}}>
            <i className="bi bi-emoji-frown"></i>
            </span>
        </p>
        </div>
        </div>
        </>
    )
}