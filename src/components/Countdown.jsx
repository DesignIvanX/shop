import React, { useState, useEffect } from "react";
import "./style/Countdown.css";
const Countdown = ({ remainingSeconds, finalMessage }) => {
  const [time, setTime] = useState({
    time: "1000",
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
    final: null,
  });
  const getRemainingTime = (deadline) => {
    let now = new Date();
    let remainTime = (new Date(deadline) - now + 1000) / 1000;
    let remainSeconds = ("0" + Math.floor(remainTime % 60).toString()).slice(
      -2
    );
    let remainMinutes = (
      "0" + Math.floor((remainTime / 60) % 60).toString()
    ).slice(-2);
    let remainHours = (
      "0" + Math.floor((remainTime / 3600) % 24).toString()
    ).slice(-2);
    let remainDays = Math.floor(remainTime / (3600 * 24));
    setTime({
      time: remainTime,
      days: remainDays,
      hours: remainHours,
      minutes: remainMinutes,
      seconds: remainSeconds,
    });
  };
  const countDown = (timeRemaining, message) => {
    const timerUpdate = setInterval(() => {
      getRemainingTime(timeRemaining);
      if (time.time <= 1) {
        clearInterval(timerUpdate);
        // setTime({
        //   final: message,
        // });
      }
    }, 1000);
  };
  useEffect(() => {
    countDown(remainingSeconds, finalMessage);
  }, []);
  return (
    <div className="Countdown">
      <div className="Countdown__text">
        <h4>Free Shipping NOW!! You don't have much time left.</h4>
      </div>
      <div className="Countdown__time">
        <div>
          <div className="Countdown--days">{time.days}</div>
          <div className="Countdown__time__div__time">Days</div>
        </div>
        <div>
          <div className="Countdown--hours">{time.hours}</div>
          <div className="Countdown__time__div__time">Hours</div>
        </div>
        <div>
          <div className="Countdown--minutes">{time.minutes}</div>
          <div className="Countdown__time__div__time">Minutes</div>
        </div>
        <div>
          <div className="Countdown--seconds">{time.seconds}</div>
          <div className="Countdown__time__div__time">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
