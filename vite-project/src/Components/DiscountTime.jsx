import { useState, useEffect } from "react";

export default function DiscountTime() {
  const [timeLeft, setTimeLeft] = useState({
    days: 27,
    hours: 14,
    minutes: 3,
    seconds: 34,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-center" >
    <div  className=" font-[700] my-[10vh] mx-10 px-[5vw] py-[5vh] w-fit h-fit text-center border-y-[20px] rounded-[40px] cursor-pointer bg-white flex justify-center flex-col" >
    <p style={{fontSize:"calc(20px + 1vw)"}} className="flex justify-center text-center">
    Time left until the sale ends:
    </p> <br />
    <p style={{fontSize:"calc(20px + 1vw)"}} className="flex justify-center text-center">
      {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {" "}
      {timeLeft.seconds} secends
    </p>
    </div>
    </div>
  );
}
