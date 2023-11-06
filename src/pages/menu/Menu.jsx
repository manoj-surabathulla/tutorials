import MenuItem from "./MenuItem";

/* eslint-disable react/prop-types */
const Menu = ({ items }) => {
  return (
    <div className="w-[40vw] my-5 mx-auto grid gap-2 items-center">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
