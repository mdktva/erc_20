import React from "react";
import scss from "./Wallet.module.scss";
import { Link } from "react-router-dom";

export default function Wallet() {
  return (
    <div className={scss.global}>
      <div className={scss.main}>
        <div className={scss.title}>
          <p>Кошелек</p>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
        <div className={scss.top}>
          <div className={scss.left}>
            <div className={scss.send}>
              <Link to="/send">
                <img src="./images/send.png" alt="" />
              </Link>
            </div>
            <div className={scss.send}>
              <Link to="/receive">
                <img src="./images/receive.png" alt="" />
              </Link>
            </div>
          </div>

          <div className={scss.right}>
            <h1>0.00ксом</h1>
          </div>
        </div>
        <p>Список транзакции (0)</p>
        <div className={scss.bottom}>
          <span>Статус</span>
          <span>Время</span>
          <span>Адресс</span>
          <span>Количество</span>
        </div>
      </div>
    </div>
  );
}
