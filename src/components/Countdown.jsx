import React, { useState, useEffect } from "react";
import "./style/Countdown.css";
const Countdown = ({ remainingSeconds, finalMessage }) => {
  const [time, setTime] = useState({});
  const getRemainingTime = (deadline, message) => {
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
    if (remainTime <= 1) {
      setTime({
        final: message,
      });
    } else {
      setTime({
        time: remainTime,
        days: remainDays,
        hours: remainHours,
        minutes: remainMinutes,
        seconds: remainSeconds,
        message: null,
      });
    }
  };
  const countDown = (timeRemaining, message) => {
    const timerUpdate = setInterval(() => {
      getRemainingTime(timeRemaining, message);
      if (time.final === "") {
        clearInterval(timerUpdate);
      }
    }, 1000);
  };
  useEffect(() => {
    countDown(remainingSeconds, finalMessage);
  }, []);
  return (
    <div className="Countdown">
      {time.final !== null ? (
        <div className="Countdown__text">
          <h4>Free shipping NOW!! You don't have much time left.</h4>
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
      ) : (
        <p>{time.final}</p>
      )}
    </div>
  );
};

export default Countdown;
