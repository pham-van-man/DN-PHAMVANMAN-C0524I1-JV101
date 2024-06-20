let listProduct = ['Samsung', 'Xiao Mi'];
displayProduct();

function displayProduct() {
    let tableString = `<tr>
<th>STT</th>
<th>Name</th>
<th>Edit</th>
<th>Delete</th></tr>`;
    for (let i = 0; i < listProduct.length; i++) {
        tableString += `<tr>
<td>${i + 1}</td>
<td>${listProduct[i]}</td>
<td><button onclick="editt(this.id)" id="${i}">Edit</button></td>
<td><button onclick="deletee(this.id)" id="${listProduct[i]}">Delete</button></td></tr>`
    }
    document.getElementById("listProduct").innerHTML = tableString;
    document.getElementById('numberProduct').innerHTML = listProduct.length;
}

function AddNewProduct() {
    let newProduct = document.getElementById("newProduct").value;
    listProduct.push(newProduct);
    displayProduct();
    document.getElementById('numberProduct').innerHTML = listProduct.length;
}

function deletee(name) {
    if (confirm('muon xoa that khong')) {
        listProduct.splice(listProduct.indexOf(name), 1);
    }
    displayProduct();
}

function editt(value) {
    let newName = prompt();
    if (newName !== null && newName !== '') {
        listProduct[value] = newName;
    }
    displayProduct();
}

