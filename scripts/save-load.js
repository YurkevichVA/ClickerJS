
/*
 * * * * SAVE LOAD * * * *
 * 
 */
/*
=======================================================
--------------------------Load/Save-------------------------
=======================================================
*/
//---------------------Back Button--------------------//
const shop_items = document.getElementById('load-save-screen').getElementsByTagName('a');
for (var i = 0 ; i < shop_items.length; i++) {
    if (shop_items[i].id === 'save-load-back-id') {
        shop_items[i].addEventListener('click', event => {
            document.getElementById('load-save-screen').style.display = 'none';
            document.getElementById('menu-screen').style.display = 'block';
        });
    }
}