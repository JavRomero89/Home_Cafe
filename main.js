

////////////////////////// BOTON DE LOGIN //////////////////////////

function iniciarSesion() {
    window.location.href = "./login/index.html"; 
}
document.getElementById("login").addEventListener("click", iniciarSesion);

//////////////////////////// PREGUNTAS FRECUENTES //////////////////////////


// Obtén todos los botones con clase "flechaUp"
const flechaUpButtons = document.querySelectorAll('.flechaUp');

// Agrega un evento de clic a cada botón
flechaUpButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Encuentra el elemento padre (questionFaq) del botón clicado
        const parentQuestion = button.closest('.questionFaq');

        // Encuentra el elemento de respuesta dentro del elemento padre
        const respuesta = parentQuestion.querySelector('.divParrafo');

        // Alterna la visibilidad de la respuesta
        if (respuesta.style.display === 'none' || respuesta.style.display === '') {
            respuesta.style.display = 'block';
            button.classList.add('rotate');
        } else {
            respuesta.style.display = 'none';
            button.classList.remove('rotate');
        }
    });
});


////////////////////////// PRODUCTOS //////////////////////////

async function loadProducts() {
    try {
        const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
        const data = await response.json();

        if (Array.isArray(data.products)) {
            const productContainer = document.getElementById('divShop'); // Obtén el contenedor donde mostrarás los productos

            // Toma los primeros 4 productos de la lista
            const productsToShow = data.products.slice(0, 4);

            productsToShow.forEach(product => {
                // Crea un elemento div para representar un producto
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                // Crea una imagen para el producto
                const productImg = document.createElement('img');
                productImg.classList.add('cafeImg');
                productImg.src = product.img_url; // Asegúrate de que la API proporciona la URL de la imagen

                // Crea un div para el precio
                const priceDiv = document.createElement('div');
                priceDiv.classList.add('Precio');
                const priceParagraph = document.createElement('p');
                priceParagraph.classList.add('fontShop');
                priceParagraph.textContent = product.brand; // Nombre del producto
                const priceTag = document.createElement('p');
                priceTag.textContent = product.price.toFixed(2) + '€'; // Precio del producto

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

// Llama a la función loadProducts después de que la página se haya cargado por completo
document.addEventListener('DOMContentLoaded', loadProducts);


////////////////////////// BOTON VER TODOS //////////////////////////

const verTodos = document.getElementById('verTodos');

verTodos.addEventListener('click', function() {
    // Redirigir a la página "tienda.html"
    window.location.href = './tienda/tienda.html';
});


////////////////////////// FORMULARIO A LOCAL STORAGE //////////////////////////

// // Obtener el formulario y sus elementos
// const form = document.getElementById("myForm");
// const nameInput = document.getElementById("nameArea");
// const emailInput = document.getElementById("emailArea");
// const telInput = document.getElementById("telInput");
// const messageInput = document.getElementById("messageArea");
// const checkbox = document.getElementById("checkbox");

// // Agregar un manejador de eventos para el formulario
// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Validar los campos del formulario
//     if (!isValidName(nameInput.value)) {
//         alert("Por favor, ingrese un nombre válido.");
//         return;
//     }

//     if (!isValidEmail(emailInput.value)) {
//         alert("Por favor, ingrese un correo electrónico válido.");
//         return;
//     }

//     if (!isValidPhoneNumber(telInput.value)) {
//         alert("Por favor, ingrese un número de teléfono válido.");
//         return;
//     }

//     if (!checkbox.checked) {
//         alert("Por favor, acepte los Términos y Condiciones.");
//         return;
//     }

//     // Crear un objeto para almacenar los datos del formulario
//     const formData = {
//         name: nameInput.value,
//         email: emailInput.value,
//         countryCode: document.getElementById("countryCode").value,
//         phoneNumber: telInput.value,
//         message: messageInput.value,
//         acceptPolicy: checkbox.checked,
//     };

//     // Guardar los datos en el almacenamiento local
//     localStorage.setItem("formData", JSON.stringify(formData));

//     alert("Formulario enviado con éxito.");


// });

// // Funciones de validación
// function isValidName(name) {
//     // Validar que el nombre solo contenga letras y espacios
//     const regex = /^[a-zA-Z\s]+$/;
//     return regex.test(name);
// }

// function isValidEmail(email) {
//     // Validar el formato de correo electrónico 
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// }

// function isValidPhoneNumber(phoneNumber) {
//     // Validar que el número de teléfono contenga solo números y algunos caracteres especiales
//     const regex = /^[0-9\s()+-]+$/;
//     return regex.test(phoneNumber);
// }




