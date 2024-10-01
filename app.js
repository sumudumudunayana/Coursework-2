console.log("hello");

function AddItem(){ 
    const itemId = document.getElementById('itemId').value;
    const itemName = document.getElementById('itemName').value;
    const expiryDate = document.getElementById('expireDate').value;
    const emailAddress = document.getElementById('customerEmail').value;

    // Validate that all fields are filled
    if (!itemId || !itemName || !expiryDate || !emailAddress) {
        alert("Please fill in all fields");
        return;
    }

    // Log the input values to the console
    console.log(itemId);
    console.log(itemName);
    console.log(expiryDate);
    console.log(emailAddress);

    // Create an item object
    const item = {
        id: itemId,
        name: itemName,
        expiryDate: expiryDate,
        email: emailAddress,
    };

    // Get the existing items from localStorage or create an empty array
    let items = JSON.parse(localStorage.getItem('items')) || [];
    
    // Add the new item to the array
    items.push(item);
    
    // Save the updated array back to localStorage
    localStorage.setItem('items', JSON.stringify(items));

    // Log the added item and the updated list
    console.log("Added Item:", item);
    console.log("All Items in localStorage:", items);

    // Clear the input fields
    document.getElementById('itemId').value = '';
    document.getElementById('itemName').value = '';
    document.getElementById('expireDate').value = '';
    document.getElementById('customerEmail').value = '';

    // Display success message
    alert('Item added successfully!');
}

document.addEventListener('DOMContentLoaded', function() {
    // Function to load items from localStorage and display them in the table
    function loadItems() {
        // Retrieve the items from localStorage
        let items = JSON.parse(localStorage.getItem('items')) || [];

        // Get the table body where the items will be displayed
        const tableBody = document.querySelector('tbody');

        // Clear any existing rows in the table body
        tableBody.innerHTML = '';

        // Loop through the items and create table rows for each item
        items.forEach(item => {
            const row = document.createElement('tr');

            // Create table cells for each field
            const itemIdCell = document.createElement('th');
            itemIdCell.scope = "row";
            itemIdCell.textContent = item.id;

            const itemNameCell = document.createElement('td');
            itemNameCell.textContent = item.name;

            const itemExpiryDateCell = document.createElement('td');
            itemExpiryDateCell.textContent = item.expiryDate;

            const itemEmailCell = document.createElement('td');
            itemEmailCell.textContent = item.email;
            
            // Append cells to the row
            row.appendChild(itemIdCell);
            row.appendChild(itemNameCell);
            row.appendChild(itemExpiryDateCell);
            row.appendChild(itemEmailCell);

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    }

    // Load items when the page is loaded
    loadItems();
});
