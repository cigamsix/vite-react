import React from "react";
import catIcon1 from "../assets/catIcon1.png";
import catIcon2 from "../assets/catIcon2.png";
import catIcon3 from "../assets/catIcon3.png";

import cat_meow_01 from "../assets/cat_meow_01.mp3";
import cat_meow_02 from "../assets/cat_meow_02.mp3";
import cat_meow_03 from "../assets/cat_meow_03.mp3";

export default function CatSound() {
  let meow01 = new Audio(cat_meow_01);
  let meow02 = new Audio(cat_meow_02);
  let meow03 = new Audio(cat_meow_03);

  const playMeow01 = () => {
    meow01.play();
  };
  const playMeow02 = () => {
    meow02.play();
  };
  const playMeow03 = () => {
    meow03.play();
  };

  return (
    <div>
      <img onClick={playMeow01} className="catIcon" src={catIcon1} />
      <img onClick={playMeow02} className="catIcon" src={catIcon2} />
      <img onClick={playMeow03} className="catIcon" src={catIcon3} />
    </div>
  );
}
