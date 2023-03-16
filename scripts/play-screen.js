import { SaveSlot } from "../classes/SaveSlot.js";
import { Game } from "../classes/Game.js";
import { Spaceship} from "../classes/Spaceship.js";

// Starts the game
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
const back_button = document.getElementById('play-back-id');
back_button.addEventListener('click', event => {
    document.getElementById('load-save-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
});

// Elements from html
let start_buttons = document.getElementsByClassName("start-button");
let delete_buttons = document.getElementsByClassName('delete-button');
let export_buttons = document.getElementsByClassName('export-button');
let import_buttons = document.getElementsByClassName('import-button');
let labels = document.getElementsByClassName('slot-label');

// Recieve saves from local storage
console.log(localStorage.getItem('slots'));


export function setSlotsView()
{
    window.slots = JSON.parse(localStorage.getItem('slots'));
    // Set slots view
    if(window.slots !== null && window.slots !== undefined)
    {
        for(let i = 0; i < 3; i++)
        {
            if(window.slots[i] !== null)
            {
                delete_buttons[i].disabled = false;
                export_buttons[i].disabled = false;
                let temp = window.slots[i].date_and_time;
                if(typeof temp !== String)
                {
                    temp = (new Date(String(temp))).toISOString();
                }
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
}
// Start buttons
const slot_one_start = document.getElementById('start-slot-one');
const slot_two_start = document.getElementById('start-slot-two');
const slot_three_start = document.getElementById('start-slot-three');

// Delete buttons
const slot_one_delete = document.getElementById('delete-slot-one');
const slot_two_delete = document.getElementById('delete-slot-two');
const slot_three_delete = document.getElementById('delete-slot-three');

// Export buttons
const slot_one_export = document.getElementById('export-slot-one');
const slot_two_export = document.getElementById('export-slot-two');
const slot_three_export = document.getElementById('export-slot-three');

// Imports buttons
const slot_one_import = document.getElementById('import-slot-one');
const slot_two_import = document.getElementById('import-slot-two');
const slot_three_import = document.getElementById('import-slot-three');

// Add start listeners
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

// Add delete listeners
slot_one_delete.addEventListener('click', e => {
    window.slots[0] = null;
    slot_one_delete.disabled = true;
    slot_one_export.disabled = true;
    labels[0].textContent = 'SLOT 1';
    localStorage.setItem('slots', JSON.stringify(window.slots));
});
slot_two_delete.addEventListener('click', e => {
    window.slots[1] = null;
    slot_two_delete.disabled = true;
    slot_two_export.disabled = true;
    labels[1].textContent = 'SLOT 2';
    localStorage.setItem('slots', JSON.stringify(window.slots));
});
slot_three_delete.addEventListener('click', e => {
    window.slots[2] = null;
    slot_three_delete.disabled = true;
    slot_three_export.disabled = true;
    labels[2].textContent = 'SLOT 3';
    localStorage.setItem('slots', JSON.stringify(window.slots));
});

// Add export listeners
slot_one_export.addEventListener('click', e => {
    navigator.clipboard.writeText(JSON.stringify(window.slots[0])).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        exportMsg();
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
});
slot_two_export.addEventListener('click', e => {
    navigator.clipboard.writeText(JSON.stringify(window.slots[1])).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        exportMsg();
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
});
slot_three_export.addEventListener('click', e => {
    navigator.clipboard.writeText(JSON.stringify(window.slots[2])).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        exportMsg();
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
});

// Add import listeners
slot_one_import.addEventListener('click', e => {
    console.log('click');
    navigator.clipboard.readText().then(
        function(save)
        {
            window.slots[0] = JSON.parse(save);
            localStorage.setItem('slots', JSON.stringify(window.slots));
            let temp = window.slots[0].date_and_time;
            if(typeof temp !== String)
            {
                temp = (new Date(String(temp))).toISOString();
            }
            labels[0].textContent = 
                temp.charAt(8) + temp.charAt(9) + "." +
                temp.charAt(5) + temp.charAt(6) + "." +
                temp.charAt(0) + temp.charAt(1) + temp.charAt(2) + temp.charAt(3) + "\n" +
                temp.charAt(11) + temp.charAt(12) + ":" +
                temp.charAt(14) + temp.charAt(15);
            slot_one_delete.disabled = false;
            slot_one_export.disabled = false;
        }
    )
});
slot_two_import.addEventListener('click', e => {
    console.log('click');
    navigator.clipboard.readText().then(
        function(save)
        {
            window.slots[1] = JSON.parse(save);
            localStorage.setItem('slots', JSON.stringify(window.slots));
            let temp = window.slots[1].date_and_time;
            if(typeof temp !== String)
            {
                temp = (new Date(String(temp))).toISOString();
            }
            labels[1].textContent = 
                temp.charAt(8) + temp.charAt(9) + "." +
                temp.charAt(5) + temp.charAt(6) + "." +
                temp.charAt(0) + temp.charAt(1) + temp.charAt(2) + temp.charAt(3) + "\n" +
                temp.charAt(11) + temp.charAt(12) + ":" +
                temp.charAt(14) + temp.charAt(15);
            slot_two_delete.disabled = false;
            slot_two_export.disabled = false;
        }
    )
});
slot_three_import.addEventListener('click', e => {
    navigator.clipboard.readText().then(
        function(save)
        {
            window.slots[2] = JSON.parse(save);
            localStorage.setItem('slots', JSON.stringify(window.slots));
            let temp = window.slots[2].date_and_time;
            if(typeof temp !== String)
            {
                temp = (new Date(String(temp))).toISOString();
            }
            labels[2].textContent = 
            temp.charAt(8) + temp.charAt(9) + "." +
            temp.charAt(5) + temp.charAt(6) + "." +
            temp.charAt(0) + temp.charAt(1) + temp.charAt(2) + temp.charAt(3) + "\n" +
            temp.charAt(11) + temp.charAt(12) + ":" +
            temp.charAt(14) + temp.charAt(15);
            slot_three_delete.disabled = false;
            slot_three_export.disabled = false;
        }
    )
});

function exportMsg()
{
    alert(
        "Save was copied to your clipboard!\n" +
        "Just send it to another device, copy and press \"IMPORT\""
    )
}

function importErr()
{
    alert(
        "Save is incorrect!"
    );
}