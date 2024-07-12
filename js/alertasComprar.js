const alertaDeCompra = document.querySelectorAll(".btn-comprar-productos");
const sonido = document.querySelector("#sonido");

alertaDeCompra.forEach(btn => {
    btn.addEventListener("click",()=>{

        Toastify({
            text: "Producto agregado",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "radial-gradient(circle at 50% -20.71%, #515464 0, #4b505d 8.33%, #464b55 16.67%, #42464b 25%, #3e4041 33.33%, #3b3937 41.67%, #38312c 50%, #352922 58.33%, #33221a 66.67%, #301b14 75%, #2e140e 83.33%, #2d0d08 91.67%, #2b0604 100%)",              
            },
            onClick: function(){
                
            } // Callback after click
          }).showToast();
    sonido.innerHTML = '<audio src="../recursos/check.mp3" autoplay> </audio>';
    })

});