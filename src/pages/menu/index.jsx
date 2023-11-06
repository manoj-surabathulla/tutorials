import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempcategories = menu.map((item) => item.category);
// const temp = new Set(tempcategories);
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
console.log("temp", allCategories);

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const categories = allCategories;

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
    console.log("category", category);
  };

  return (
    <section className="capitalize flex flex-col justify-center items-center">
      <Title text="our menu" />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  );
};

export default MenuPage;
