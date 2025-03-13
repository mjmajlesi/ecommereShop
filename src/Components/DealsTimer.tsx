"use client";
import React, { useEffect, useState } from "react";

function DealsTimer() {
  const DealsTime = new Date("2025-10-10 23:59:59").getTime();
  const [timerDays, setTimerDays] = useState(DealsTime - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      if (DealsTime - new Date().getTime() <= 0){
        clearInterval(timer);
        setTimerDays(0);
      }
      else setTimerDays(DealsTime - new Date().getTime());
    }, 1000);
    return  () =>  clearInterval(timer);
  }, [DealsTime]);

  const getTimeComponents = (milliseconds: number) => {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeComponents(timerDays);

  return (
    <div className="flex justify-center items-center gap-10">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <span className="text-xl font-semibold">Days</span>
        <span className="font-medium text-[#292927]">{days}</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2.5">
        <span className="text-xl font-semibold">Hours</span>
        <span className="font-medium text-[#292927]">{hours}</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2.5">
        <span className="text-xl font-semibold">Minutes</span>
        <span className="font-medium text-[#292927]">{minutes}</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2.5">
        <span className="text-xl font-semibold">Seconds</span>
        <span className="font-medium text-[#292927]">{seconds}</span>
      </div>
    </div>
  );
}

export default DealsTimer;
