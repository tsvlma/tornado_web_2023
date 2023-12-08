import SubMenuCategory from "./SubMenuCategory";

export default function MenuCategory({ title, children }) {
  return (
    <div>
      <div class="w-[250px] h-[17px] justify-between items-center inline-flex">
        <div class="text-black text-opacity-20 text-sm font-semibold font-['Inter']">
          {title}
        </div>
        <div class="w-3 h-3 relative origin-top-left -rotate-180"></div>
      </div>
      {children.map((c) => (
        <SubMenuCategory title={c.title} />
      ))}
    </div>
  );
}
