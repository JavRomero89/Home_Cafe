const products = async () => {
    const response = await fetch("https://cafe-de-altura.vercel.app/api/products");
    const data = await response.json();
 return data    

}

const getProducts = async() => {
    const productos = await products();

    console.log(productos);
}

getProducts();





