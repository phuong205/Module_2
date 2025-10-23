
const cart = [
  { name: "Laptop", price: 15000000, quantity: 1 },
  { name: "Chuột", price: 300000, quantity: 2 },
  { name: "Bàn phím", price: 800000, quantity: 1 }
];

const total = cart.map(item => item.price * item.quantity)
                  .reduce((sum, value) => sum + value, 0);

console.log("Tổng đơn hàng:", total);
