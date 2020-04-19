import React, { useState } from "react";
import style from "./Logo.module.css";

export const Logo = () => {
  const [leftSlash, setLeftSlash] = useState(60);
  const [leftVi, setLeftVi] = useState(80);

  setTimeout(() => {
    setLeftSlash(110);
    setLeftVi(65);
  }, 1700);

  return (
    <div className={style.container}>
      <div className={style.fakeMenu}>
        <div className={`${style.fakeButtons} ${style.fakeClose}`} />
        <div className={`${style.fakeButtons} ${style.fakeMinimize}`} />
        <div className={`${style.fakeButtons} ${style.fakeZoom}`} />
      </div>
      <div className={style.fakeScreen}>
        <div className={style.typewriter}>
          <div className={style.text}>
            <div style={{ left: 0 }}>CO</div>
            <div style={{ left: 45 }} className={style.greenText} id="slash-1">
              /
            </div>
            <div
              style={{ left: leftSlash }}
              className={style.greenText}
              id="slash-2"
            >
              /
            </div>
            <div
              style={{ left: leftVi, order: 4 }}
              className={style.greenText}
              id="VI"
            >
              VI
            </div>
            <div style={{ left: 130, order: 6 }}>DERS</div>
          </div>
        </div>
        <div className={style.typewriter}>
          <div className={`${style.text} ${style.smallText}`}>
            Coders against Covid
          </div>
        </div>
      </div>
    </div>
  );
};
