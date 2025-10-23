import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
<>
    <div className="flex w-full bottom-0 text-white bg-black h-fit px-[5vw] py-[3vh] justify-center lg:justify-between" >
      <p className="hidden lg:block" ><b>© 2025 Arash Shop. Bringing you the best. All rights reserved.</b> </p>
      <a target="_blank" href="https://github.com/arash-azad"><b>Github</b></a>
    </div>
</>
  );
}
