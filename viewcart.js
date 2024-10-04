window.onload = function viewcart() {
    order = JSON.parse(localStorage.getItem("order")) || [];
    let orderitems=document.getElementById("viewOrderTable");
    let body=``;
    order.forEach(data => {
        body+=`
            <tr>
                <td>${data.orderId}</td>
                <td>${data.customerId}</td>
                <td>${data.totalAmount}</td>
            </tr>
        `
    });
    
    orderitems.innerHTML=body;

}