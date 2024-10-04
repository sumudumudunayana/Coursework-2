window.onload = function viewitem() {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    
    const tableBody = document.getElementById('itemTable');
    let body=``;
    items.forEach(element => {
        body+=`<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.expiryDate}</td>
        <td>${element.unitPrice}</td>
        <td>${element.discount}</td>
        </tr>`
    });        
    tableBody.innerHTML = body;
}