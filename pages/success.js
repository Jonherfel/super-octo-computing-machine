import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runConfetti } from "../lib/confetti";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runConfetti();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2> Thank You! Your Coach will Contact You</h2>
        <p className="email-msg">Check Your Email From Your Coaches</p>
        <Link href="/">
          <button type="button" width="250px" className="btn">
            Click For More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
