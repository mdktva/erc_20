import React from "react";
import scss from "./ReceiveWallet.module.scss";
import { Link } from "react-router-dom";

export default function ReceiveWallet() {
  return (
    <div className={scss.global}>
      <div className={scss.main}>
        <div className={scss.title}>
          <p className={scss.wallet_title}>Кошелек</p>
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
          <div className={scss.title}>
            <p>Receive Opera FTM</p>
          </div>
          <div className={scss.opera}>
            <p>Send your Opera FTM to:</p>
          </div>
        </div>
      </div>
    </div>
  );
}
