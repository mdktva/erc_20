import React from "react";
import scss from "./SendWallet.module.scss";
import { Link } from "react-router-dom";

export default function SendWallet() {
  return (
    <div className={scss.global}>
      <div className={scss.main}>
        <div className={scss.title}>
          <p>Кошелек</p>
          <Link to="/wallet">
            <button>Back</button>
          </Link>
        </div>
        <div className={scss.top}>
          <div className={scss.left}>
            <div className={scss.send}>
              <img src="./images/send.png" alt="" />
            </div>
            <div className={scss.send}>
              <img src="./images/receive.png" alt="" />
            </div>
          </div>

          <div className={scss.right}>
            <h1>0.00ксом</h1>
          </div>
        </div>
        <div className={scss.bottom}>
          <div className={scss.send_opera}>
            <h3>Send Opera FTM</h3>
          </div>

          <label>
            <div>
              <span>Amount</span>
              <span>Entire Balance</span>
            </div>
            <input type="text" />
          </label>
          <label>
            <div>
              <span>Send to</span>
              <span>Select address</span>
            </div>
            <input type="text" />
          </label>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}
