init();
function clearInputFields() {
  document.getElementById("itemId").value = "";
  document.getElementById("itemName").value = "";
  document.getElementById("expireDate").value = "";
  document.getElementById("unitPrice").value = "";
  document.getElementById("discount").value = "";
  document.getElementById("quantity").value = "";
}

function searchItem() {
  const searchInput = document.getElementById("searchInput").value;
  const items = JSON.parse(localStorage.getItem("items")) || [];

  const foundItem = items.find((item) => item.id === searchInput);
  console.log(foundItem);

  if (foundItem) {
    document.getElementById("itemId").value = foundItem.id;
    document.getElementById("itemName").value = foundItem.name;
    document.getElementById("expireDate").value = foundItem.expiryDate;
    document.getElementById("unitPrice").value = foundItem.unitPrice;
    document.getElementById("discount").value = foundItem.discount;

    alert("Item found. You can add to the cart.");
  } else {
    alert("Item not found. Please check the ID and try again.");
    clearInputFields();
  }
}

function calculateTotal() {
  const unitPrice = parseFloat(document.getElementById("unitPrice").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const discount = parseFloat(document.getElementById("discount").value);

  let total = unitPrice * quantity;

  total = total - total * (discount / 100);

  document.getElementById("totalSpending").value = total;
}

function addToCart() {
  calculateTotal();

  let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
  let itemId = document.getElementById("itemId").value;
  let itemName = document.getElementById("itemName").value;
  let quantity = document.getElementById("quantity").value;
  let totalSpending = document.getElementById("totalSpending").value;

  let cart = {
    itemId: itemId,
    itemName: itemName,
    quantity: quantity,
    totalSpending: totalSpending,
  };

  cartArray.push(cart);

  localStorage.setItem("cart", JSON.stringify(cartArray));
  clearInputFields();
}

function init() {
  let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
  localStorage.setItem("cart", JSON.stringify(cartArray));

  let orderArray = JSON.parse(localStorage.getItem("order")) || [];
  localStorage.setItem("order", JSON.stringify(orderArray));
}

window.onload = function viewcart() {
  document.getElementById("orderId").value=GenarateOrderID();
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartitems = document.getElementById("orderTable");
  let body = ``;
  cart.forEach((data) => {
    body += `
            <tr>
                <td>${data.itemId}</td>
                <td>${data.itemName}</td>
                <td>${data.quantity}</td>
                <td>${data.totalSpending}</td>
            </tr>
        `;
  });

  cartitems.innerHTML = body;
  let total = 0;
  cart.forEach((element) => {
    total += parseInt(element.totalSpending);
  });
  document.getElementById("totalSpending").value = total;
};

function placeOrder() {
  let orderId=document.getElementById("orderId").value;
  
  let customerId=document.getElementById("customerId").value;

  let order = JSON.parse(localStorage.getItem("order")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let totalAmount = document.getElementById("totalSpending").value;

  let neworder = {
    orderId: orderId,
    customerId: customerId,
    cart: cart,
    totalAmount: totalAmount,
  };
  order.push(neworder);
  localStorage.setItem("order", JSON.stringify(order));

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  goOrderManagement();
}

function GenarateOrderID() {
  let ordercount = JSON.parse(localStorage.getItem("order")).length;
  let str = "";
  if (ordercount < 9) {
    str = "ORD-000" + ordercount;
  } else if (ordercount < 99) {
    str = "ORD-00" + ordercount;
  } else if (ordercount < 999) {
    str = "ORD-0" + ordercount;
  } else if (ordercount < 9999) {
    str = "ORD-" + ordercount;
  }
  return str;
}

function goOrderManagement() {
  window.location.href = 'OrderManagement.html';
}
