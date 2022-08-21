import React from "react";
import CatSound from "./CatSound";

export default function Main() {
  return (
    <main>
      <h1 className="main--title">
        猫から学んだ 7 のこと
        <br />
        <sub>7 things I learned from cats</sub>
      </h1>

      <div className="hero"></div>

      <ol className="main--facts">
        <li>
          適度な距離感を保つ
          <br />
          <small>keep an appropriate distance</small>
        </li>
        <li>
          居心地の良い場所を、自ら見つける
          <br />
          <small>find a comfortable place</small>
        </li>
        <li>
          今を生きる
          <br />
          <small>live in the present</small>
        </li>
        <li>
          ちゃんと充電する
          <br />
          <small>sleep to get enough power</small>
        </li>
        <li>
          幸せそうに寝る
          <br />
          <small>sleep happily</small>
        </li>
        <li>
          周りの世界に興味を持つ
          <br />
          <small>find something interesting</small>
        </li>
        <li>
          イヤなことからちゃんと逃げる
          <br />
          <small>run away from unpleasant things</small>
        </li>
      </ol>

      <CatSound />
    </main>
  );
}
