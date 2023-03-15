
/*
 * * * * SHOP * * * *
 * 
 */
/*
=======================================================
--------------------------Shop-------------------------
=======================================================
*/
//---------------------Shop-Items--------------------//
let shop_items = document.getElementById('shop-screen').getElementsByTagName('a');
for (var i = 0 ; i < shop_items.length; i++) {
    if (shop_items[i].id === 'shop-back-id') {
        shop_items[i].addEventListener('click', event => {
            document.getElementById('shop-screen').style.display = 'none';
            if (localStorage.getItem("IsPause") === 'true') {
                document.getElementById('pause-screen').style.display = 'flex';
                return;
            }
            document.getElementById('menu-screen').style.display = 'block';
        });
    }
    else if (shop_items[i].id === 'shop-item-energy') {
        shop_items[i].addEventListener('click', event => {
            // ...
        });
    }
    else if (shop_items[i].id === 'shop-item-shield') {
        shop_items[i].addEventListener('click', event => {
            // ...
        });
    }
}

