import React from "react";
import { RiTruckFill, RiChat1Line } from "react-icons/ri";
import { AiOutlineFileDone } from "react-icons/ai";
import "./style/Benefit.css";
const Benefits = () => {
  return (
    <div className="Benefit">
      <div className="Benefit__one">
        <h2 className="Benefit__one--h2">
          <RiTruckFill className="Benefit__one--h2--icon" />
          FREE DELIVERY
        </h2>
        <h3 className="Benefit__one--h3">On all orders</h3>
      </div>
      <div className="Benefit__two">
        <h2 className="Benefit__two--h2">
          <RiChat1Line className="Benefit__two--h2--icon" />
          NEED HELP? 1 586 207 7523
        </h2>
        <h3 className="Benefit__two--h3">
          Call us on a toll-free phone number
        </h3>
      </div>
      <div className="Benefit__three">
        <h2 className="Benefit__three--h2">
          <AiOutlineFileDone className="Benefit__three--h2--icon" />
          MONEY BACK GUARANTEE
        </h2>
        <h3 className="Benefit__three--h3">Worry-free shopping</h3>
      </div>
    </div>
  );
};

export default Benefits;
