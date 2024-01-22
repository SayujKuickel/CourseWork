let data = 0;
const quantityContainer = document.getElementById("quantity-container");
quantityContainer.innerText = data;

const qtyIncrement = document.getElementById("qty-increment");
qtyIncrement.addEventListener("click", () => {
  data += 1;
  quantityContainer.innerHTML = data;
  console.log("log", data);
});

const qtyDecrement = document.getElementById("qty-decrement");
qtyDecrement.addEventListener("click", () => {
  if (data == 0) return;
  data -= 1;
  quantityContainer.innerHTML = data;
  console.log("fog");
});
