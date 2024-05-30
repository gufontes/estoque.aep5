document.addEventListener('DOMContentLoaded', function() {
    const productTableBody = document.getElementById('product-table-body');
    const addProductForm = document.getElementById('addProductForm');

    const products = [];

    function renderProducts() {
        productTableBody.innerHTML = '';
        products.forEach((product, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.entryPrice}</td>
                <td>${product.expirationDate}</td>
                <td>${product.stock}</td>
                <td>${product.minStock}</td>
                <td>${product.productType}</td>
                <td><button class="btn btn-warning" onclick="editProduct(${index})">Alterar</button></td>
                <td><button class="btn btn-danger" onclick="removeProduct(${index})">Remover</button></td>
            `;

            productTableBody.appendChild(row);
        });
    }

    window.addProduct = function() {
        const name = document.getElementById('name').value;
        const entryPrice = document.getElementById('entryPrice').value;
        const expirationDate = document.getElementById('expirationDate').value;
        const stock = document.getElementById('stock').value;
        const minStock = document.getElementById('minStock').value;
        const productType = document.getElementById('productType').value;

        const newProduct = {
            name,
            entryPrice,
            expirationDate,
            stock,
            minStock,
            productType
        };

        products.push(newProduct);
        renderProducts();
        $('#addProductModal').modal('hide');
        addProductForm.reset();
    }

    window.removeProduct = function(index) {
        products.splice(index, 1);
        renderProducts();
    }

    window.editProduct = function(index) {
        // Adicionar funcionalidade de edição aqui
        alert('Funcionalidade de edição ainda não implementada.');
    }

    window.generateReport = function() {
        // Adicionar funcionalidade de geração de relatório aqui
        alert('Funcionalidade de geração de relatório ainda não implementada.');
    }

    window.showAllProducts = function() {
        renderProducts();
    }

    // Inicializar a exibição
    showAllProducts();
});