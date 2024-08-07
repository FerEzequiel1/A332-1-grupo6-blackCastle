const btnCart = document.querySelector('.container-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

const btnComprar = document.querySelector("#btn-comprar-final");

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
    if (containerCartProducts.style.display === "none") {
        containerCartProducts.style.display = "block";
    }
});

const cartInfo = document.querySelector(".card");
const columaProductos = document.querySelector(".columna-productos");

const listaProductos = document.querySelectorAll(".card");

let productos = [];
let valorTotal = document.querySelector(".total-pagar")
const contadorProductos = document.querySelector("#contador-productos")

listaProductos.forEach(producto => {

    producto.addEventListener("click", e => {
        if(e.target.classList.contains("btn-comprar-productos")){
            let producto = e.target.parentElement.parentElement;
            //console.log(producto.querySelector("h5").textContent)
            
            let infoProducto = {
                cantidad: 1,
                titulo: producto.querySelector("h5").textContent,
                precio: producto.querySelector("p").textContent
            }

            const existe = productos.some(producto => producto.titulo === infoProducto.titulo)
            //console.log(existe);
            if(existe){
                const p = productos.map(producto =>{
                    if(producto.titulo === infoProducto.titulo){
                        producto.cantidad++;
                        return producto;
                    }else{
                        return producto;
                    }
                })
                productos = [...productos];
            }else{
                productos = [...productos, infoProducto];
            }

            
            mostrarHTML();
        }
    });
});

//Mostrar en el HTML

const mostrarHTML = () =>{
    columaProductos.innerHTML = '';

    let total = 0;
    let cantidadProductos = 0;

    if (productos.length === 0) {
        containerCartProducts.style.display = "none";
    }
    
    productos.forEach(producto=>{
        const containerProducto = document.createElement("div");
        containerProducto.classList.add("cart-product");
        containerProducto.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${producto.cantidad}</span>
                <span class="titulo-producto-carrito">${producto.titulo}</span>
                <span class="precio-producto-carrito">${producto.precio}</span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        `

        columaProductos.append(containerProducto);

        total = total + parseInt(producto.cantidad * producto.precio.slice(1));
        cantidadProductos = cantidadProductos + producto.cantidad;
    });

    valorTotal.innerText = `${total}`
    contadorProductos.innerText = cantidadProductos;
}

columaProductos.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
        console.log(productos);
		const titulo = product.querySelector('.info-cart-product').querySelector('.titulo-producto-carrito').textContent;
        console.log(titulo);
		productos = productos.filter(
			product => product.titulo !== titulo
		);
        
        console.log(productos);

        mostrarHTML();
        
	}
});

btnComprar.addEventListener('click',e => {

    productos = [];
    containerCartProducts.style.display = "none";
    mostrarHTML();
})
