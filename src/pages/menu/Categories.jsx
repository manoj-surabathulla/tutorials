const Categories = ({ categories, filterItems }) => {
  console.log(categories, "categories");
  return (
    <div>
      {categories?.map((category) => (
        <button
          className="mr-2 capitalize border bg-yellow-400 border-none py-1 px-3 text-white"
          type="button"
          key={category}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
