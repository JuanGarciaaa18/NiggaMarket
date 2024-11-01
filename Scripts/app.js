const containercards= document.getElementById("products-container");

function creatcardsproducts(products){
    products.forEach(products=> {
        const newpheripherals = document.createElement("div");
        newpheripherals.classList ="card-product";
        newpheripherals.innerHTML = `
        <img src="${products.img}">
        <h3>${products.nombre}</h3>
        <p>$${products.precio}</p>
        <button>Comprar</button>
        `
        
        containercards.appendChild(newpheripherals);
    });
}

creatcardsproducts(products);