import { Link } from "react-router-dom";
import SubMenuCategory from "./SubMenuCategory";
import { useState } from "react";

export default function MenuCategory({ title, children }) {
  const [showChildren, setChildren] = useState(false);

  return (
    <div>
      <div class="w-[250px] h-[17px] justify-between items-center inline-flex  ">
        <div class="text-black  font-semibold font-['Inter']" onClick={() => {
          console.log(showChildren)
          setChildren(!showChildren);
        }}>{title}</div>
        <div class="w-3 h-3 relative origin-top-left -rotate-180  "> <img className="place-content-center" src="img/Frame.png" alt="" /> </div>
      </div>
      <div
        className="text-black  text-sm font-normal font-['Inter'] my-2"
      >
        {showChildren &&
          children.map((c) => <SubMenuCategory title={c.title} />)}

      </div>
    </div>
  );
}
