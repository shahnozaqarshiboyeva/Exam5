import { Lists } from "../Lists";
import style from "./style.module.css";

export function SecondFile({ product }) {
  return (
    <>
      <div className={style.con}>
        <button style={{display: 'none'}} className={style.btn}>Новые объявления</button>
        <button style={{display: 'none'}} className={style.btn}>Лучщие предложение</button>
      </div>
      <Lists product={product} />
    </>
  );
}
