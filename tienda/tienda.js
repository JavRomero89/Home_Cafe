// Obtener el contenedor de productos
const productContainer = document.getElementById('divShop');

// Función para cargar y mostrar todos los productos
async function loadAllProducts() {
    try {
        const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
        const data = await response.json();
        
        if (Array.isArray(data.products)) {
            data.products.forEach(product => {
                // Crea un elemento div para representar un producto
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                
                // Crea una imagen para el producto
                const productImg = document.createElement('img');
                productImg.classList.add('cafeImg');
                productImg.src = product.img_url;
                
                // Crea un div para el precio
                const priceDiv = document.createElement('div');
                priceDiv.classList.add('Precio');
                const priceParagraph = document.createElement('p');
                priceParagraph.classList.add('fontShop');
                priceParagraph.textContent = product.brand;
                const priceTag = document.createElement('p');
                priceTag.textContent = product.price.toFixed(2) + '€';
                
                // Crea un botón para añadir el producto
                const addButton = document.createElement('button');
                addButton.classList.add('buttonShop');
                const link = document.createElement('a');
                link.href = ''; // Agrega aquí la URL de la página de detalles del producto
                link.textContent = 'Añadir';
                
                // Agrega los elementos al div del producto
                priceDiv.appendChild(priceParagraph);
                priceDiv.appendChild(priceTag);
                addButton.appendChild(link);
                productDiv.appendChild(productImg);
                productDiv.appendChild(priceDiv);
                productDiv.appendChild(addButton);
                
                // Agrega el producto al contenedor principal
                productContainer.appendChild(productDiv);
            });
        } else {
            console.error('La respuesta de la API no contiene un arreglo de productos válido.');
        }
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

// Llamar a la función para cargar todos los productos
loadAllProducts();

