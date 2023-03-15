import { SaveSlot } from "../classes/SaveSlot.js";
import { Game } from "../classes/Game.js";
import { Spaceship} from "../classes/Spaceship.js";
/*
 * * * * SAVE LOAD * * * *
 * 
 */
/*
=======================================================
--------------------------Load/Save-------------------------
=======================================================
*/
function start()
{
    // Set global variables
    window.game = new Game();            // Game is an object that contains game loop and levels
    window.player = new Spaceship();     // Spaceship is an object that contains player health and damage

    // Hide elements
    document.getElementById('load-save-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('shop-screen').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'none';

    // Show in-game ui
    document.getElementById('i-game').style.display = 'block';
    document.getElementById('playerHealthbar').style.display = 'block';

    // Start game loop
    window.game.gameLoop();
}

// Back button
const shop_items = document.getElementById('load-save-screen').getElementsByTagName('a');
for (var i = 0 ; i < shop_items.length; i++) {
    if (shop_items[i].id === 'save-load-back-id') {
        shop_items[i].addEventListener('click', event => {
            document.getElementById('load-save-screen').style.display = 'none';
            document.getElementById('menu-screen').style.display = 'block';
        });
    }
}

let start_buttons = document.getElementsByClassName("start-button");
let delete_buttons = document.getElementsByClassName('delete-button');
let labels = document.getElementsByClassName('slot-label');
// Recieve saves
window.slots = JSON.parse(localStorage.getItem('slots'));
if(window.slots !== null && window.slots !== undefined)
{
    for(let i = 0; i < 3; i++)
    {
        if(window.slots[i] !== null)
        {
            delete_buttons[i].disabled = false;
            console.log(window.slots[i].date_and_time);
            console.log(window.slots);
            let temp = window.slots[i].date_and_time
            labels[i].textContent = 
                temp.charAt(8) + temp.charAt(9) + "." +
                temp.charAt(5) + temp.charAt(6) + "." +
                temp.charAt(0) + temp.charAt(1) + temp.charAt(2) + temp.charAt(3) + "\n" +
                temp.charAt(11) + temp.charAt(12) + ":"
                + temp.charAt(14) + temp.charAt(15);
        }
    }
}
else
{
    window.slots = [null, null, null];
}

const slot_one_start = document.getElementById('start-slot-one');
const slot_two_start = document.getElementById('start-slot-two');
const slot_three_start = document.getElementById('start-slot-three');
const slot_one_delete = document.getElementById('delete-slot-one');
const slot_two_delete = document.getElementById('delete-slot-two');
const slot_three_delete = document.getElementById('delete-slot-three');

// Add listeners
slot_one_start.addEventListener('click', e => {
    if(window.slots[0] === null)
        window.slots[0] = new SaveSlot();

    window.currentSlot = window.slots[0];
    window.currentSlotIndex = 0;
    start();
});
slot_two_start.addEventListener('click', e => {
    if(window.slots[1] === null)
        window.slots[1] = new SaveSlot();

    window.currentSlot = window.slots[1];
    window.currentSlotIndex = 1;
    start();
});
slot_three_start.addEventListener('click', e => {
    if(window.slots[2] === null)
        window.slots[2] = new SaveSlot();

    window.currentSlot = window.slots[2];
    window.currentSlotIndex = 2;
    start();
});

slot_one_delete.addEventListener('click', e => {
    window.slots[0] = null;
    slot_one_delete.disabled = true;
    labels[0].textContent = 'SLOT 1';
    localStorage.setItem('slots', window.slots)
});
slot_two_delete.addEventListener('click', e => {
    window.slots[1] = null;
    slot_two_delete.disabled = true;
    labels[1].textContent = 'SLOT 2';
    localStorage.setItem('slots', window.slots)
});
slot_three_delete.addEventListener('click', e => {
    window.slots[2] = null;
    slot_three_delete.disabled = true;
    labels[2].textContent = 'SLOT 3';
    localStorage.setItem('slots', window.slots)
})