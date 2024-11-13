const rechargeBtn = document.getElementById('recharge-btn');
const usernameInput = document.getElementById('username');
const coinsInput = document.getElementById('coins');
const transactionsContainer = document.getElementById('transactions');
const transactionHeader = document.getElementById('transaction-header');
const randomImage = document.getElementById('random-image');

let isFirstTransaction = true;

function addTransaction(username, coins) {
    if (isFirstTransaction) {
        transactionHeader.style.opacity = '1';
        isFirstTransaction = false;
    }

    const transactionItem = document.createElement('div');
    transactionItem.classList.add('transaction-item');
    transactionItem.innerHTML = `
                <span>${username}</span>
                <span class="centerEle">${Number(coins).toLocaleString()} &thinsp;
                    <svg font-size="16px" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
                        <circle cx="24" cy="24" r="22" fill="#FBD32C"></circle>
                        <circle cx="24" cy="24" r="17" fill="#F9BA10"></circle>
                        <path d="M40.93 25.5a17 17 0 1 0-33.87 0 17 17 0 0 1 33.87 0Z" fill="#F6A811"></path>
                        <path d="M33 19a5.03 5.03 0 0 1-5.06-5h-3.38v13.61a3.07 3.07 0 0 1-3.1 3.06c-1.7 0-3.09-1.37-3.09-3.06a3.07 3.07 0 0 1 3.94-2.94v-3.4A6.43 6.43 0 0 0 15 27.6c0 3.54 2.9 6.4 6.47 6.4a6.43 6.43 0 0 0 6.47-6.39v-6.94A8.47 8.47 0 0 0 33 22.33V19Z" fill="#fff"></path>
                    </svg>
                </span>
            `;
    transactionsContainer.insertBefore(transactionItem, transactionHeader.nextSibling);
}

rechargeBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const coins = coinsInput.value.trim();
    if (username && coins) {
        addTransaction(username, coins);
        usernameInput.value = '';
        coinsInput.value = '';
    }
});

function setRandomImage() {
    const imageNumber = Math.floor(Math.random() * 13) + 1;
    randomImage.src = `../imgs/${imageNumber}.jpg`;
}

setRandomImage();