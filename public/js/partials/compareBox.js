document.addEventListener("DOMContentLoaded", () => {
    const popupOverlay = document.getElementById('popupOverlay');
    const popupContent = document.getElementById('popup');
    const closePopupBtn = document.getElementById('closePopup');
    const checkBox1 = document.getElementById('checkBox1');
    const checkBox2 = document.getElementById('checkBox2');
    const compareInputBox1 = document.getElementById("compareInputBox1");
    const compareInputBox2 = document.getElementById("compareInputBox2");
    const errorBox = document.getElementById('errorBox');

    document.querySelectorAll('.openCompareBox').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            compareInputBox1.value = button.getAttribute('data-playerName');
            checkBox1.checked = true;
            popupOverlay.style.display = 'flex';
            requestAnimationFrame(() => {
                popupContent.classList.add('open');
            });
        });
    });

    const closePopup = () => {
      function initCompareBox(){
            popupContent.classList.remove('open');
            checkBox1.checked = false;
            checkBox2.checked = false;
            compareInputBox1.value = '';
            compareInputBox2.value = '';
            errorBox.innerText = '';
        }
        initCompareBox();

        setTimeout(() => {
            popupOverlay.style.display = 'none';
        }, 300);
    };

    closePopupBtn.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) closePopup();
    });

    document.getElementById('compareSubmitButton').addEventListener('click', () => {
        if (checkBox1.checked && checkBox2.checked) {
            errorBox.style.color = "green";
            errorBox.innerText = 'Preparing Comparison Page!';

            let player1 = compareInputBox1.value.trim().replaceAll(' ','-');
            let player2 = compareInputBox2.value.trim().replaceAll(' ','-');

            window.location.href = `/compare?player1=${player1}&player2=${player2}` ;
            closePopup();
        } else {
            errorBox.innerText = 'Please enter valid Players!';
        }
    });
});

async function suggestPlayer(event, suggestionBoxId) {
    const inputBox = event;
    const suggestionBox = document.getElementById(suggestionBoxId);

    // Fetch players data
    const response = await fetch('/utils/players.json');
    const players = await response.json();

    function giveSuggestion() {
        // Resetting checkboxes based on inputBox
        if (inputBox.id === 'compareInputBox1') {
            document.getElementById('checkBox1').checked = false;
        }
        if (inputBox.id === 'compareInputBox2') {
            document.getElementById('checkBox2').checked = false;
        }

        const input = inputBox.value.replace(/\s+/g, '').toLowerCase();
        let suggestions = [];

        if (input.length) {
            suggestions = players
                .filter(player => player.toLowerCase().replace(/\s+/g, '').includes(input))
                .sort((a, b) =>
                    a.toLowerCase().replace(/\s+/g, '').indexOf(input) -
                    b.toLowerCase().replace(/\s+/g, '').indexOf(input)
                );
        }

        displaySuggestions(suggestions);
    }

    function displaySuggestions(suggestions) {
        if (inputBox.value) {
            suggestionBox.style.display = 'flex';
        } else {
            suggestionBox.style.display = 'none';
        }

        if (suggestions.length === 0 && inputBox.value) {
            suggestions = ["No players found"];
        }

        const suggestionItems = suggestions.map(player => `<li class="search-list">${player}</li>`).join('');
        suggestionBox.innerHTML = `<ul>${suggestionItems}</ul>`;
    }

    function handleSuggestionClick(event) {
        if (event.target.classList.contains('search-list') && event.target.innerHTML !== "No players found") {
            inputBox.value = event.target.innerText;

            if (compareInputBox1.value !== compareInputBox2.value) {
                if (inputBox.id === 'compareInputBox1') {
                    document.getElementById('checkBox1').checked = true;
                }
                if (inputBox.id === 'compareInputBox2') {
                    document.getElementById('checkBox2').checked = true;

                }
                if(checkBox1.checked && checkBox2.checked) {
                   errorBox.innerText = ''
                }                    
                

            }
        }
    }

    inputBox.addEventListener('input', giveSuggestion);
    inputBox.addEventListener('focus', giveSuggestion);

    inputBox.addEventListener('blur', () => {
        setTimeout(() => {
            suggestionBox.style.display = 'none';
        }, 200);
    });

    suggestionBox.addEventListener('click', handleSuggestionClick);
}
