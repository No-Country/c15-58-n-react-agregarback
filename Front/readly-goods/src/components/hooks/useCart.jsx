import { useEffect, useState } from "react";

export const useCart = () => {
  const [products, setProducts] = useState([]);
  const [badgeCount, setbadgeCount] = useState(0);

  useEffect(() => {
    badgeCounter();
  }, [products]);

  const addProduct = (product) => {
    const id = crypto.randomUUID();
    let refCart = [...products];
    const { title, price, quantity, image } = product;
    let productIndex = refCart.findIndex((elem) => elem.title === title);

    if (productIndex == -1) {
      setProducts([...products, { id, title, price, quantity, image }]);
    } else {
      refCart[productIndex].quantity += quantity;
      setProducts([...refCart]);
    }
  };

  const deleteProduct = (id) => {
    const productFilter = products.filter((p) => {
      if (p.id !== id) {
        return p;
      }
    });
    setProducts(productFilter);
  };

  const deleteAllProducts = () => {
    setProducts([]);
  };

  const totalPrice = products.reduce((acc, product) => {
    return Math.round((acc + product.price * product.quantity) * 100) / 100;
  }, 0);

  const badgeCounter = () => {
    let refCount = 0;

    products.forEach((elem) => {
      refCount += elem.quantity;
    });

    setbadgeCount(refCount);
  };

  return {
    badgeCount,
    products,
    addProduct,
    deleteAllProducts,
    deleteProduct,
    totalPrice,
  };
};
