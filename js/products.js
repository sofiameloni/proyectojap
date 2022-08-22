document.addEventListener("DOMContentLoaded", function(){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data
            showProductsList();
            //sortAndShowProducts(ORDER_ASC_BY_NAME, resultObj.data);
            //console.log(resultObj.data.products[1]);
        }
    });
    }); 

let currentProductsArray = [];

function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.products.length; i++){
        let product = currentProductsArray.products[i];

            htmlContentToAppend += `
            <div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost}</h4>
                            <small class="text-muted">${product.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1"></p>
                        <p class="mb-1">${product.description}</p>
                    </div>
                    
                </div>
            </div>
            `;
        

        document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
    }
}
