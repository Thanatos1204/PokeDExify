const CHEST = document.querySelector('#chest');
const SHAKE_BUTTON = document.querySelector('#shake-chest');
const OPEN_BUTTON = document.querySelector('#open-chest');
const RESET_BUTTON = document.querySelector('#reset-chest');

function shakeChest() {
	CHEST.classList.add('shake-chest');
	CHEST.classList.remove('open-chest');
}

function openChest() {
	CHEST.classList.remove('shake-chest');
	CHEST.classList.add('open-chest');
}

function resetChest() {
	CHEST.classList.remove('open-chest');
	CHEST.classList.remove('shake-chest');
}

SHAKE_BUTTON.addEventListener('click', shakeChest);
OPEN_BUTTON.addEventListener('click', openChest);
RESET_BUTTON.addEventListener('click', resetChest);