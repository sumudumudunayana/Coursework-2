function addCustomer() { 
    const customerId = document.getElementById('customerId').value;
    const customerName = document.getElementById('customerName').value;
    const customerTel = document.getElementById('customerTel').value;
    const customerEmail = document.getElementById('customerEmail').value;

    // Validate that all fields are filled
    if (!customerId || !customerName || !customerTel || !customerEmail) {
        alert("Please fill in all fields");
        return;
    }

    // Log the input values to the console
    console.log(customerId);
    console.log(customerName);
    console.log(customerTel);
    console.log(customerEmail);

    // Create a customer object
    const customer = {
        id: customerId,
        name: customerName,
        telephone: customerTel,
        email: customerEmail,
    };

    // Get the existing customers from localStorage or create an empty array
    let customers = JSON.parse(localStorage.getItem('customers')) || [];
    
    // Add the new customer to the array
    customers.push(customer);
    
    // Save the updated array back to localStorage
    localStorage.setItem('customers', JSON.stringify(customers));

    // Log the added item and the updated list
    console.log("Added Customer:", customer);
    console.log("All Customers in localStorage:", customers);

    // Clear the input fields
    document.getElementById('customerId').value = ''; 
    document.getElementById('customerName').value = ''; 
    document.getElementById('customerTel').value = ''; 
    document.getElementById('customerEmail').value = ''; 

    // Display success message
    alert('Customer added successfully!');
}





document.addEventListener('DOMContentLoaded', function() {
    // Function to load customers from localStorage and display them in the table
    function loadCustomers() {
        // Retrieve the customers from localStorage
        let customers = JSON.parse(localStorage.getItem('customers')) || [];

        // Get the table body where the customers will be displayed
        const tableBody = document.querySelector('tbody');

        // Clear any existing rows in the table body
        tableBody.innerHTML = '';

        // Loop through the customers and create table rows for each customer
        customers.forEach(customer => { // Changed from items to customers
            const row = document.createElement('tr');

            // Create table cells for each field
            const customerIdCell = document.createElement('th'); // Corrected variable name
            customerIdCell.scope = "row";
            customerIdCell.textContent = customer.id;

            const customerNameCell = document.createElement('td'); // Corrected variable name
            customerNameCell.textContent = customer.name;

            const customerTelCell = document.createElement('td'); // Corrected variable name
            customerTelCell.textContent = customer.telephone;

            const customerEmailCell = document.createElement('td'); // Corrected variable name
            customerEmailCell.textContent = customer.email;
            
            // Append cells to the row
            row.appendChild(customerIdCell);
            row.appendChild(customerNameCell);
            row.appendChild(customerTelCell); // Fixed variable name
            row.appendChild(customerEmailCell); // Fixed variable name

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    }

    // Load customers when the page is loaded
    loadCustomers();
});
