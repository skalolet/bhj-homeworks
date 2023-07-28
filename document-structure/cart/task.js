document.addEventListener('DOMContentLoaded', () => {
    const cartProducts = document.querySelector('.cart__products');
    const productControls = document.querySelectorAll('.product__quantity-controls');

    function addToCart(productElement, quantity) {
        const productId = productElement.dataset.id;
        const productName = productElement.querySelector('.product__title').innerText;
        const productImageSrc = productElement.querySelector('.product__image').src;


        const existingCartItem = cartProducts.querySelector(`[data-id="${productId}"]`);

        if (existingCartItem) {

            const cartProductCount = existingCartItem.querySelector('.cart__product-count');
            const currentQuantity = parseInt(cartProductCount.innerText, 10);
            cartProductCount.innerText = currentQuantity + quantity;
        } else {

            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = productId;

            const cartProductImage = document.createElement('img');
            cartProductImage.classList.add('cart__product-image');
            cartProductImage.src = productImageSrc;
            cartProduct.appendChild(cartProductImage);

            const cartProductCount = document.createElement('div');
            cartProductCount.classList.add('cart__product-count');
            cartProductCount.innerText = quantity;
            cartProduct.appendChild(cartProductCount);

            cartProducts.appendChild(cartProduct);
        }
    }

    productControls.forEach((controls) => {
        const quantityValue = controls.querySelector('.product__quantity-value');
        const quantityControlDec = controls.querySelector('.product__quantity-control_dec');
        const quantityControlInc = controls.querySelector('.product__quantity-control_inc');

        quantityControlDec.addEventListener('click', () => {
            let quantity = parseInt(quantityValue.innerText, 10);
            if (quantity > 1) {
                quantity--;
                quantityValue.innerText = quantity;
            }
        });

        quantityControlInc.addEventListener('click', () => {
            let quantity = parseInt(quantityValue.innerText, 10);
            quantity++;
            quantityValue.innerText = quantity;
        });
    });

    const productAddButtons = document.querySelectorAll('.product__add');
    productAddButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const quantityValue = productElement.querySelector('.product__quantity-value');
            const quantity = parseInt(quantityValue.innerText, 10);
            addToCart(productElement, quantity);
        });
    });
});
