import cartItems from "./CartItems";

const Cart = () => {
  return (
    <section>
      {cartItems.map((item) => {
        const { id, img, price, title, amount } = item;
        console.log(price, amount);
        return (
          <div key={id}>
            <img src={img} alt={title} />
            <h1>{title}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Cart;
