init();
function init() {
    
    let itemsarray=JSON.parse(localStorage.getItem("items"))|| [
        { id: "B0001", name: "Classic Burger(Large)", category: "burgers", unitPrice: 1500, discount: 0, stock: 15, expiryDate: "2025-07-04" },
        { id: "B0002", name: "Classic Burger(Regular)", category: "burgers", unitPrice: 750, discount: 15, stock: 15, expiryDate: "2025-07-04" },
        { id: "B0003", name: "Turkey Burger", category: "burgers", unitPrice: 1600, discount: 0, stock: 10, expiryDate: "2025-07-04" },
        { id: "B0004", name: "Chicken Burger(Large)", category: "burgers", unitPrice: 1400, discount: 0, stock: 15, expiryDate: "2025-07-04" },
        { id: "B0005", name: "Chicken Burger(Regular)", category: "burgers", unitPrice: 800, discount: 20, stock: 15, expiryDate: "2025-07-04" },
        { id: "B0006", name: "Cheese Burger(Large)", category: "burgers", unitPrice: 1000, discount: 0, stock: 10, expiryDate: "2025-07-04" },
        { id: "B0007", name: "Cheese Burger(Regular)", category: "burgers", unitPrice: 600, discount: 0, stock: 20, expiryDate: "2025-07-04" },
        { id: "B0008", name: "Bacon Burger", category: "burgers", unitPrice: 650, discount: 15, stock: 15, expiryDate: "2025-07-04" },
        { id: "B0009", name: "Shawarma Burger", category: "burgers", unitPrice: 800, discount: 0, stock: 15, expiryDate: "2025-07-04" },
        { id: "B0010", name: "olive Burger", category: "burgers", unitPrice: 1800, discount: 0, stock: 15, expiryDate: "2025-07-04" },
        { id: "B0011", name: "Double-Cheese Burger", category: "burgers", unitPrice: 1250, discount: 20, stock: 15, expiryDate: "2025-07-04" },
        { id: "B0012", name: "Crispy Chicken Burger(Regular)", category: "burgers", unitPrice: 1200, discount: 0, stock: 15, expiryDate: "2025-07-04" },
        { id: "B0013", name: "Crispy Chicken Burger(Large)", category: "burgers", unitPrice: 1600, discount: 10, stock: 15, expiryDate: "2025-07-04" },
        { id: "B0014", name: "Paneer Burger", category: "burgers", unitPrice: 900, discount: 0, stock: 15, expiryDate: "2025-07-04" },
    
        { id: "S0015", name: "Crispy Chicken Submarine(Large)", category: "submarines", unitPrice: 2000, discount: 0, stock: 15, expiryDate: "2025-07-15" },
        { id: "S0016", name: "Crispy Chicken Submarine(Regular)", category: "submarines", unitPrice: 1500, discount: 0, stock: 15, expiryDate: "2025-07-15" },
        { id: "S0017", name: "Chicken Submarine(Large)", category: "submarines", unitPrice: 1800, discount: 3, stock: 15, expiryDate: "2025-07-15" },
        { id: "S0018", name: "Chicken Submarine(Regular)", category: "submarines", unitPrice: 1400, discount: 0, stock: 15, expiryDate: "2025-07-15" },
        { id: "S0019", name: "Grinder Submarine", category: "submarines", unitPrice: 2300, discount: 0, stock: 15, expiryDate: "2025-07-15" },
        { id: "S0020", name: "Double Cheese n Chicken Submarine", category: "submarines", unitPrice: 1900, discount: 16, stock: 15, expiryDate: "2025-07-15" },
        { id: "S0021", name: "Special Horgie Submarine", category: "submarines", unitPrice: 2800, discount: 0, stock: 15, expiryDate: "2025-07-15" },
        { id: "S0022", name: "BQ Special Submarine", category: "submarines", unitPrice: 3000, discount: 0, stock: 15, expiryDate: "2025-07-15" },
    
        { id: "F0023", name: "Steak Fries(Large)", category: "fries", unitPrice: 1200, discount: 0, stock: 10, expiryDate: "2025-07-20" },
        { id: "F0024", name: "Steak Fries(Medium)", category: "fries", unitPrice: 600, discount: 0, stock: 10, expiryDate: "2025-07-20" },
        { id: "F0025", name: "French Fries(Large)", category: "fries", unitPrice: 800, discount: 0, stock: 10, expiryDate: "2025-07-20" },
        { id: "F0026", name: "French Fries(Medium)", category: "fries", unitPrice: 650, discount: 0, stock: 10, expiryDate: "2025-07-20" },
        { id: "F0027", name: "French Fries(Small)", category: "fries", unitPrice: 450, discount: 0, stock: 10, expiryDate: "2025-07-20" },
        { id: "F0028", name: "Sweet Potato Fries(Large)", category: "fries", unitPrice: 600, discount: 0, stock: 10, expiryDate: "2025-07-20" },
    
        { id: "P0029", name: "Chicken n Cheese Pasta", category: "pasta", unitPrice: 1600, discount: 15, stock: 5, expiryDate: "2025-07-02" },
        { id: "P0030", name: "Chicken Penne Pasta", category: "pasta", unitPrice: 1700, discount: 0, stock: 5, expiryDate: "2025-07-02" },
        { id: "P0031", name: "Ground Turkey Pasta Bake", category: "pasta", unitPrice: 2900, discount: 10, stock: 5, expiryDate: "2025-07-02" },
        { id: "P0032", name: "Creamy Shrimp Pasta", category: "pasta", unitPrice: 2000, discount: 0, stock: 5, expiryDate: "2025-07-02" },
        { id: "P0033", name: "Lemon Butter Pasta", category: "pasta", unitPrice: 1950, discount: 0, stock: 5, expiryDate: "2025-07-02" },
        { id: "P0034", name: "Tagliatelle Pasta", category: "pasta", unitPrice: 2400, discount: 1, stock: 5, expiryDate: "2025-07-02" },
        { id: "P0035", name: "Baked Ravioli", category: "pasta", unitPrice: 2000, discount: 1, stock: 5, expiryDate: "2025-07-02" },
    
        { id: "C0036", name: "Fried Chicken(Small)", category: "chicken", unitPrice: 1200, discount: 0, stock: 10, expiryDate: "2025-07-25" },
        { id: "C0037", name: "Fried Chicken(Regular)", category: "chicken", unitPrice: 2300, discount: 10, stock: 10, expiryDate: "2025-07-25" },
        { id: "C0038", name: "Fried Chicken(Large)", category: "chicken", unitPrice: 3100, discount: 5, stock: 10, expiryDate: "2025-07-25" },
        { id: "P0039", name: "Hot Wings(Large)", category: "chicken", unitPrice: 2400, discount: 0, stock: 10, expiryDate: "2025-07-25" },
        { id: "C0040", name: "Devilled Chicken(Large)", category: "chicken", unitPrice: 900, discount: 0, stock: 10, expiryDate: "2025-07-25" },
        { id: "C0041", name: "BBQ Chicken(Regular)", category: "chicken", unitPrice: 2100, discount: 0, stock: 10, expiryDate: "2025-07-25" },
    
        { id: "D0042", name: "Pepsi(330ml)", category: "beverage", unitPrice: 990, discount: 5, stock: 20, expiryDate: "2026-07-25" },
        { id: "D0043", name: "Coca-Cola(330ml)", category: "beverage", unitPrice: 1230, discount: 0, stock: 20, expiryDate: "2026-07-25" },
        { id: "D0044", name: "Sprite(330ml)", category: "beverage", unitPrice: 1500, discount: 3, stock: 20, expiryDate: "2026-07-25" },
        { id: "D0045", name: "Mirinda(330ml)", category: "beverage", unitPrice: 850, discount: 7, stock: 20, expiryDate: "2026-07-25" }];
    localStorage.setItem("items", JSON.stringify(itemsarray));
}
function AddItem(){ 
    let itemarray=JSON.parse(localStorage.getItem("items")) || [];
    const itemId = document.getElementById('itemId').value;
    const itemName = document.getElementById('itemName').value;
    const expiryDate = document.getElementById('expireDate').value;
    const unitPrice = document.getElementById('unitPrice').value;
    const discount = document.getElementById('discount').value;

    if (!itemId || !itemName || !expiryDate || !unitPrice|| !discount) {
        alert("Please fill in all fields");
        return;
    }

    const item = {
        id: itemId,
        name: itemName,
        expiryDate: expiryDate,
        unitPrice: unitPrice,
        discount: discount,
    };

    

    itemarray.push(item);
    
    localStorage.setItem("items", JSON.stringify(itemarray));

    // console.log("Added Item:", item);
    // console.log("All Items in localStorage:", items);

    clearInputFields();

    alert('Item added successfully!');
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

        alert('Item found. You can now update the details.');
    } else {
        alert('Item not found. Please check the ID and try again.');
        clearInputFields(); 
    }
}





function UpdateItem() {
    const itemId = document.getElementById('itemId').value;
    const itemName = document.getElementById('itemName').value;
    const expiryDate = document.getElementById('expireDate').value;
    const unitPrice = document.getElementById('unitPrice').value;
    const discount = document.getElementById('discount').value;


    if (!itemId || !itemName || !expiryDate || !unitPrice|| !discount) {
        alert("Please fill in all fields");
        return;
    }

    let items = JSON.parse(localStorage.getItem('items')) || [];

    const existingItemIndex = items.findIndex(item => item.id === itemId);

    if (existingItemIndex !== -1) {
        items[existingItemIndex] = {
            id: itemId,
            name: itemName,
            expiryDate: expiryDate,
            unitPrice: unitPrice,
            discount: discount,
        };
        localStorage.setItem('items', JSON.stringify(items));
        alert('Item updated successfully!');
        clearInputFields();
    } else {
        alert('Item not found. Please search first or add a new item.');
    }
}






function deleteItem() {
    const itemId = document.getElementById('itemId').value; 
    if (!itemId) {
        alert("Please search for an Item ID to delete.");
        return;
    }

    let items = JSON.parse(localStorage.getItem('items')) || [];

    const itemIndex = items.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        
        localStorage.setItem('items', JSON.stringify(items));

        alert('Item deleted successfully!');
        clearInputFields(); 
    } else {
        alert('Item not found. Please check the ID and try again.');
    }
}

function clearInputFields() {
    document.getElementById('itemId').value = '';
    document.getElementById('itemName').value = '';
    document.getElementById('expireDate').value = '';
    document.getElementById('unitPrice').value = '';
    document.getElementById('discount').value = '';
}

// function displayItems() {  
//     let items = JSON.parse(localStorage.getItem('items')) || [];
    
//     const tableBody = document.getElementById('itemTable');
//     let body=``;
//     items.forEach(element => {
//         body+=`<tr>
//         <td>${element.id}</td>
//         <td>${element.name}</td>
//         <td>${element.expiryDate}</td>
//         <td>${element.unitPrice}</td>
//         <td>${element.discount}</td>
//         </tr>`
//     });        
//     tableBody.innerHTML = body;
// }
