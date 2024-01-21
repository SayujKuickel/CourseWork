const products = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": { "rate": 3.9, "count": 120 }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": { "rate": 4.1, "count": 259 }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling, or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband or son on this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": { "rate": 4.7, "count": 500 }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": { "rate": 2.1, "count": 430 }
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelry",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": { "rate": 4.6, "count": 400 }
    },
    {
      "id": 6,
      "title": "Solid Gold Petite Micropave",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelry",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": { "rate": 3.9, "count": 70 }
    },
    {
      "id": 7,
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "jewelry",
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "rating": { "rate": 3, "count": 400 }
    },
    {
      "id": 8,
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "jewelry",
      "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "rating": { "rate": 1.9, "count": 100 }
    },
    {
      "id": 9,
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "rating": { "rate": 3.3, "count": 203 }
    },
   
]  
const urlQuery = window.location.search;
const id = urlQuery.split('=')[1];
detailsFill();
const moreProductContainer = document.getElementById('more-products');

for (let i=0; i < products.length; i++){
  const component = createProduct(products[i]);
  moreProductContainer.appendChild(component)
}

let data = 0
const quantityContainer = document.getElementById('quantity-container');
quantityContainer.innerText = data



const qtyIncrement = document.getElementById('qty-increment')
qtyIncrement.addEventListener('click',()=>{
  data += 1
  quantityContainer.innerHTML = data
  console.log('log',data);
  // console.log(qtyIncrement.innerText);
})
const qtyDecrement = document.getElementById('qty-decrement')
qtyDecrement.addEventListener('click',()=>{
  if(data== 0) return
  data -= 1
  quantityContainer.innerHTML = data
  console.log('fog');
  // console.log(qtyIncrement.innerText);
})







const slider =  document.getElementById('slider')

const rightBtn = document.getElementById('rightBtn')
const leftBtn = document.getElementById('leftBtn')

rightBtn.addEventListener("click",(event)=>{

  // slider.style.right = '200px'

  slider.scroll({
    left: 400,
    behavior:'smooth',
    
  })
})
leftBtn.addEventListener("click",(event)=>{
  slider.scroll({
    left: slider.scrollLeft - 400,
    behavior:'smooth',
    
  })
})



function detailsFill(){

    const imageContainer = document.querySelector('.product-image');
    const imageTag = document.createElement('img');
    imageTag.alt = "Product Image";
    imageTag.src = products[id].image
    imageContainer.appendChild(imageTag);
    
    const prodTitle = document.getElementById('prodTitle');
    prodTitle.innerText = products[id].title
    const prodPrice = document.getElementById('prodPrice')
    prodPrice.innerText ="$"+products[id].price;
    
    const prodDescription = document.getElementById('prodDescription');
    prodDescription.innerText = products[id].description

}


function createProduct(details){
  const productComponent = document.createElement('div');
  productComponent.classList.add('product-item','slideProduct')
  
  
  const linkToProduct = document.createElement('a');
  linkToProduct.href='/product/product.html?id='+details.id

  const productImage =  document.createElement('img');
  productImage.src = details.image;

  const itemBody  = document.createElement('div')
  itemBody.classList.add('item-body');
  
  const productName = document.createElement('h3');
  productName.textContent= details.title;
  const prodPrice = document.createElement('p');

  const price = document.createElement('span');
  price.textContent = "$"+details.price;
  const discount = document.createElement('span');
  discount.textContent = "-20%";
  discount.classList.add('discount')

  const buttonAnchor = document.createElement('a')
  buttonAnchor.href='/products.html';
  const button = document.createElement('button')
  button.textContent = "Add to Cart"
  button.classList.add('btn')

  productComponent.appendChild(linkToProduct);

  linkToProduct.appendChild(productImage);
  linkToProduct.appendChild(itemBody);

  itemBody.appendChild(productName);
  itemBody.appendChild(prodPrice);
  itemBody.appendChild(buttonAnchor)

  buttonAnchor.appendChild(button);

  prodPrice.appendChild(price);
  prodPrice.appendChild(discount)


  return productComponent

}












// 
// function createProductDetailComponent(){
//     const productDesc = document.createElement('div');
// productDesc.className = 'product-desc';

// const productImage = document.createElement('div');
// productImage.className = 'product-image';

// const image = document.createElement('img');
// image.src = '../assets/printers/Brother-DCP-L2540DW.jpg';
// image.alt = 'image';

// productImage.appendChild(image);

// const productDetails = document.createElement('div');
// productDetails.className = 'product-details';

// const productName = document.createElement('p');
// productName.style.fontSize = '35px';
// productName.textContent = 'Product Name';

// const price = document.createElement('p');
// price.style.fontSize = '20px';
// price.textContent = '$500';

// const review = document.createElement('p');
// review.textContent = 'Review';

// const quickOverview = document.createElement('p');

// const overviewSpan1 = document.createElement('span');
// overviewSpan1.style.display = 'block';
// overviewSpan1.style.fontWeight = '600';
// overviewSpan1.style.color = 'rgb(75, 75, 75)';
// overviewSpan1.textContent = 'Quick Overview:';

// const overviewSpan2 = document.createElement('span');
// overviewSpan2.style.color = 'rgb(71, 71, 71)';
// overviewSpan2.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem molestias omnis recusandae sit rerum dolorem commodi, voluptates, molestiae, quia itaque perferendis aperiam placeat. Neque placeat fugit autem, mollitia voluptatem eligendi.';

// quickOverview.appendChild(overviewSpan1);
// quickOverview.appendChild(overviewSpan2);

// const quantityDiv = document.createElement('div');
// quantityDiv.style.marginTop = '20px';

// const quantityLabel = document.createElement('span');
// quantityLabel.textContent = 'Quantity:';

// const quantityInput = document.createElement('input');
// quantityInput.type = 'number';
// quantityInput.className = 'quantity-input';
// quantityInput.inputMode = 'numeric';

// quantityDiv.appendChild(quantityLabel);
// quantityDiv.appendChild(quantityInput);

// const addToCartButton = document.createElement('button');
// addToCartButton.className = 'btn btn-primary';
// addToCartButton.style.marginRight = '20px';
// addToCartButton.textContent = 'Add To Cart';

// const buyNowButton = document.createElement('button');
// buyNowButton.className = 'btn btn-primary';
// buyNowButton.textContent = 'Buy Now';

// // Append elements to the document
// productDetails.appendChild(productName);
// productDetails.appendChild(price);
// productDetails.appendChild(review);
// productDetails.appendChild(quickOverview);
// productDetails.appendChild(quantityDiv);
// productDetails.appendChild(addToCartButton);
// productDetails.appendChild(buyNowButton);

// productDesc.appendChild(productImage);
// productDesc.appendChild(productDetails);
// }