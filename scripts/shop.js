/*
 * * * * SHOP * * * *
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
            // alert(window.player.getMoney());
            // alert(document.getElementById('id-price-energy').value);
            // if (window.player.getMoney() >= document.getElementById('id-price-energy').value) {
            //     alert("!");
            // }
            // window.player.addLowHeal();





        });
    }
    else if (shop_items[i].id === 'shop-item-shield') {
        shop_items[i].addEventListener('click', event => {
            // window.player.addFullHeal();



        });
    }
    else if (shop_items[i].id === 'shop-item-damage1') {
        shop_items[i].addEventListener('click', event => {
            // ...
        });
    }
    else if (shop_items[i].id === 'shop-item-damage2') {
        shop_items[i].addEventListener('click', event => {
            // ...
        });
    }
    else if (shop_items[i].id === 'shop-item-damage3') {
        shop_items[i].addEventListener('click', event => {
            // ...
        });
    }
    else if (shop_items[i].id === 'shop-item-super-shot') {
        shop_items[i].addEventListener('click', event => {
            // ...
        });
    }
    else if (shop_items[i].id === 'shop-item-total-shot') {
        shop_items[i].addEventListener('click', event => {
            // ...
        });
    }
}

//--------------------Shop-sections------------------//
let shop_sections = document.getElementById('shop-screen').getElementsByTagName('button');
for (var i = 0 ; i < shop_sections.length; i++) {
    if (shop_sections[i].id === 'shop-section-energy-id') {
        shop_sections[i].addEventListener('click', event => {
            document.getElementById('id-section-energy').style.display = 'block';
            document.getElementById('id-section-damage').style.display = 'none';
            document.getElementById('id-section-abilities').style.display = 'none';
            
            document.getElementById('id-have-items-energy').style.display = 'flex';
            document.getElementById('id-have-items-damage').style.display = 'none';
            document.getElementById('id-have-items-abilities').style.display = 'none';

            document.getElementById('shop-section-energy-id').style.color = 'rgba(255, 255, 255, 0.8)';
            document.getElementById('shop-section-damage-id').style.color = 'rgba(255, 255, 255, 0.6)';
            document.getElementById('shop-section-abilities-id').style.color = 'rgba(255, 255, 255, 0.6)';
        });
    }
    else if (shop_sections[i].id === 'shop-section-damage-id') {
        shop_sections[i].addEventListener('click', event => {
            document.getElementById('id-section-energy').style.display = 'none';
            document.getElementById('id-section-damage').style.display = 'block';
            document.getElementById('id-section-abilities').style.display = 'none';
            
            document.getElementById('id-have-items-energy').style.display = 'none';
            document.getElementById('id-have-items-damage').style.display = 'flex';
            document.getElementById('id-have-items-abilities').style.display = 'none';
            
            document.getElementById('shop-section-energy-id').style.color = 'rgba(255, 255, 255, 0.6)';
            document.getElementById('shop-section-damage-id').style.color = 'rgba(255, 255, 255, 0.8)';
            document.getElementById('shop-section-abilities-id').style.color = 'rgba(255, 255, 255, 0.6)';
        });
    }
    else if (shop_sections[i].id === 'shop-section-abilities-id') {
        shop_sections[i].addEventListener('click', event => {
            document.getElementById('id-section-energy').style.display = 'none';
            document.getElementById('id-section-damage').style.display = 'none';
            document.getElementById('id-section-abilities').style.display = 'block';
            
            document.getElementById('id-have-items-energy').style.display = 'none';
            document.getElementById('id-have-items-damage').style.display = 'none';
            document.getElementById('id-have-items-abilities').style.display = 'flex';
            
            document.getElementById('shop-section-energy-id').style.color = 'rgba(255, 255, 255, 0.6)';
            document.getElementById('shop-section-damage-id').style.color = 'rgba(255, 255, 255, 0.6)';
            document.getElementById('shop-section-abilities-id').style.color = 'rgba(255, 255, 255, 0.8)';
        });
    }
}
