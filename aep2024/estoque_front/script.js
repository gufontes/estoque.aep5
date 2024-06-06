document.addEventListener('DOMContentLoaded', () => {
    const productTableBody = document.getElementById('product-table-body');
    const productForm = document.getElementById('product-form');
    const manageTypesSection = document.getElementById('manage-types');
    const manageStockSection = document.getElementById('manage-stock');
    const productTypeTableBody = document.getElementById('product-type-table-body');
    const movementProductSelect = document.getElementById('movementProduct');

    let products = [];
    let productTypes = [
        { id: 'Limpeza', description: 'Limpeza' },
        { id: 'Alimento', description: 'Alimento' },
        { id: 'Bebida', description: 'Bebida' }
    ];
    let movementTypes = [];
    let destinations = [
        { id: 'Casa 1', description: 'Casa 1' },
        { id: 'Casa 2', description: 'Casa 2' },
        { id: 'Casa 3', description: 'Casa 3' }
    ];
    let movements = [];

    function renderProducts() {
        productTableBody.innerHTML = '';
        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.type}</td>
                <td>${product.purchasePrice}</td>
                <td>${product.expirationDate}</td>
                <td><button class="action-btn" onclick="editProduct(${index})"><i class="fa fa-edit"></i></button></td>
                <td><button class="action-btn" onclick="removeProduct(${index})"><i class="fa fa-trash"></i></button></td>
            `;
            productTableBody.appendChild(row);
        });
    }

    function renderProductTypes() {
        const productTypeSelect = document.getElementById('productType');
        productTypeSelect.innerHTML = productTypes.map(type => `<option value="${type.id}">${type.description}</option>`).join('');

        productTypeTableBody.innerHTML = '';
        productTypes.forEach((type, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${type.id}</td>
                <td>${type.description}</td>
                <td><button class="action-btn" onclick="editProductType(${index})"><i class="fa fa-edit"></i></button></td>
                <td><button class="action-btn" onclick="removeProductType(${index})"><i class="fa fa-trash"></i></button></td>
            `;
            productTypeTableBody.appendChild(row);
        });
    }

    function renderMovementTypes() {
        const movementTypeSelect = document.getElementById('movementType');
        movementTypeSelect.innerHTML = movementTypes.map(type => `<option value="${type.id}">${type.description}</option>`).join('');
    }

    function renderDestinations() {
        const destinationSelect = document.getElementById('movementDestination');
        destinationSelect.innerHTML = destinations.map(dest => `<option value="${dest.id}">${dest.description}</option>`).join('');
    }

    function renderMovements() {
        const movementTableBody = document.getElementById('movement-table-body');
        movementTableBody.innerHTML = '';
        movements.forEach((movement, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${movement.type}</td>
                <td>${movement.quantity}</td>
                <td>${movement.destination}</td>
                <td>${movement.budget}</td>
            `;
            movementTableBody.appendChild(row);
        });
    }

    function renderProductsSelect() {
        movementProductSelect.innerHTML = products.map(product => `<option value="${product.name}">${product.name}</option>`).join('');
    }

    window.showAllProducts = () => {
        productForm.classList.add('hidden');
        manageTypesSection.classList.add('hidden');
        manageStockSection.classList.add('hidden');
        renderProducts();
    };

    window.showAddProductForm = () => {
        productForm.classList.remove('hidden');
        manageTypesSection.classList.add('hidden');
        manageStockSection.classList.add('hidden');
    };

    window.showManageTypes = () => {
        productForm.classList.add('hidden');
        manageTypesSection.classList.remove('hidden');
        manageStockSection.classList.add('hidden');
    };

    window.showManageStock = () => {
        productForm.classList.add('hidden');
        manageTypesSection.classList.add('hidden');
        manageStockSection.classList.remove('hidden');
    };

    window.addProduct = (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const type = document.getElementById('productType').value;
        const purchasePrice = document.getElementById('purchasePrice').value;
        const expirationDate = document.getElementById('expirationDate').value;

        const newProduct = {
            name,
            type,
            purchasePrice,
            expirationDate
        };

        products.push(newProduct);
        renderProducts();
        renderProductsSelect();
        productForm.classList.add('hidden');
    };

    window.addProductType = (event) => {
        event.preventDefault();
        const id = document.getElementById('productTypeId').value;
        const description = document.getElementById('productTypeDescription').value;

        const newProductType = { id, description };
        productTypes.push(newProductType);
        renderProductTypes();
    };

    window.editProductType = (index) => {
        const newDescription = prompt('Digite a nova descrição do tipo de produto:', productTypes[index].description);
        if (newDescription) {
            productTypes[index].description = newDescription;
            renderProductTypes();
        }
    };

    window.removeProductType = (index) => {
        if (confirm('Tem certeza que deseja remover este tipo de produto?')) {
            productTypes.splice(index, 1);
            renderProductTypes();
        }
    };

    window.addStockMovement = (event) => {
        event.preventDefault();
        const type = document.getElementById('movementType').value;
        const quantity = document.getElementById('movementQuantity').value;
        const destination = document.getElementById('movementDestination').value;
        const budget = document.getElementById('movementBudget').value;
        const product = movementProductSelect.value;

        const newMovement = { type, quantity, destination, budget, product };
        movements.push(newMovement);
        renderMovements();
    };

    window.removeProduct = (index) => {
        products.splice(index, 1);
        renderProducts();
        renderProductsSelect();
    };

    window.editProduct = (index) => {
        alert('Funcionalidade de edição ainda não implementada.');
    };

    window.generateReport = () => {
        alert('Funcionalidade de geração de relatório ainda não implementada.');
    };

    renderProductTypes();
    renderMovementTypes();
    renderDestinations();
    renderProductsSelect();
    showAllProducts();
});
