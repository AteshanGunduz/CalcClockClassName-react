import React, { useState, useEffect } from "react";

export default function Clock({ time }) {
  const [timeOfDay, setTimeOfDay] = useState("day");

  useEffect(() => {
    const hours = time.getHours();

    if (hours >= 0 && hours <= 6) {
      setTimeOfDay("night");
    } else {
      setTimeOfDay("day");
    }
  }, [time]);

  return <h1 className={timeOfDay}>{time.toLocaleTimeString()}</h1>;
}
