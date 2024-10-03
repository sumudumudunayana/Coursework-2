
function clearInputFields() {
    document.getElementById('itemId').value = '';
    document.getElementById('itemName').value = '';
    document.getElementById('expireDate').value = '';
    document.getElementById('unitPrice').value = '';
    document.getElementById('discount').value = '';
}




function searchItem() {
    const searchInput = document.getElementById('searchInput').value; 
    const items = JSON.parse(localStorage.getItem('items')) || []; 

    const foundItem = items.find(item => item.id === searchInput);
    console.log(foundItem);
    
    if (foundItem) {
        document.getElementById('itemId').value = foundItem.id;
        document.getElementById('itemName').value = foundItem.name;
        document.getElementById('expireDate').value = foundItem.expiryDate;
        document.getElementById('unitPrice').value = foundItem.unitPrice;
        document.getElementById('discount').value = foundItem.discount;

        alert('Item found. You can add to the cart.');
    } else {
        alert('Item not found. Please check the ID and try again.');
        clearInputFields(); 
    }
}



function calculateTotal() {
    const unitPrice = parseFloat(document.getElementById("unitPrice").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const discount = parseFloat(document.getElementById("discount").value);

    // Calculate the total before discount
    let total = unitPrice * quantity;

    // Apply the discount
    total = total - (total * (discount / 100));

    // Display the total in the Total Spending input field
    document.getElementById("totalSpending").value = total; // rounded to 2 decimal places
}





