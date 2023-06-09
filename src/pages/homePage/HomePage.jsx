import { useState } from "react";
import scss from "./HomePage.module.scss";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [create, setCreate] = useState(false);
  const [restore, setRestore] = useState(false);

  const toggleCreate = () => {
    setCreate(!create);
  };
  const toggleRestore = () => {
    setRestore(!restore);
  };

  if (restore) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className={scss.global}>
      <div className={scss.main}>
        <h1>
          Децентрализованное приложение для <br /> управления цифровыми активами
        </h1>
        <p>Отправление, получение, хранение криптовалют</p>
        <div className={scss.btns}>
          <button className={scss.create_wallet} onClick={toggleCreate}>
            Создать кошелек
          </button>
          <button className={scss.recover_wallet} onClick={toggleRestore}>
            Восстановить кошелек
          </button>
        </div>
      </div>

      {create && (
        <div className={scss.modal}>
          <div onClick={toggleCreate} className={scss.overlay}></div>
          <div className={scss.create_content}>
            <div className={scss.top}>
              <p>Создание кошелька</p>
            </div>
            <div className={scss.bottom}>
              <h3>Создание приватного и публичного ключей</h3>
              <label htmlFor="">
                Приватный ключ
                <br />
                <input type="text" />
              </label>
              <br />
              <label htmlFor="">
                Публичный ключ <br />
                <input type="password" />
              </label>
              <Link to="/wallet">
                <button>Download keystore file and continue</button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {restore && (
        <div className={scss.modal}>
          <div onClick={toggleRestore} className={scss.overlay}></div>
          <div className={scss.create_content}>
            <div className={scss.top}>
              <p>Восстановить кошелек</p>
            </div>
            <div className={scss.bottom}>
              <label htmlFor="">
                Please type in your private key <br />
                <input type="text" />
              </label>
              <Link to="/wallet">
                <button>Восстановить</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
