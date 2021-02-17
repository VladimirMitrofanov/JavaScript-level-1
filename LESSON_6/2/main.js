for (var i = 0; i<(productList.length); i++){
    
    let product = document.createElement('div');
    product.className = 'product';
    product.innerHTML = '<div class="name">'+productList[i].name+'</div><div class="discription">'+productList[i].discription+'</div><div class="price">Цена: '+productList[i].price+' руб.</div><div class="buyButton" id ="'+i+'">КУПИТЬ</div>';
    
    let products = document.getElementById('products');
    products.appendChild(product);
    
};





function putToBasket (x) {
    let buy = document.createElement('div');
    buy.className = 'buy';
    buy.innerHTML = ''+productList[x.target.id].name+' - '+productList[x.target.id].price+' руб.';
    
    let basket = document.getElementById('basket');
    basket.insertBefore(buy, basket.children[basket.children.length-1]); 
    let sum = +document.getElementById('sum').innerHTML;
    let currentSum = productList[x.target.id].price + sum;
    document.getElementById('sum').innerHTML = currentSum;
};


var buyButton = document.getElementsByClassName('buyButton');

for (var j = 0; j<(buyButton.length);j++){
    buyButton[j].onclick = putToBasket;
}