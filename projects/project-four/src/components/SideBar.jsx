import { menus } from "../data/menu";
import MenuCategory from "./MenuCategory";

export default function SideBar() {
  return (
    <div className="w-64 h-screen  ps-12 pt-10 ">
      <div>
        <span className="text-red-400 text-3xl font-normal">
          i
        </span>
        <span className="text-amber-500 text-3xl font-normal">
          blog
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="flex flex-col">
          {menus.map((m) => (
            <MenuCategory title={m.title} children={m.children} />
          ))}
        </div>
      </div>
    </div>
  );
}
