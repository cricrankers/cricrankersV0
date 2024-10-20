(async function fetchPlayerData() {
    try {

        //fetch players data
        const response = await fetch('/utils/players.json');
        const players = await response.json();
        
        const suggestionBox = document.getElementById('searchSuggestion');
        const inputBox = document.getElementById('searchInput');

        //function to generate suggestion
        function giveSuggestion() {
            const input = inputBox.value.replace(/\s+/g, '').toLowerCase();
            let result = [];

            if (input.length) {
                result = players
                    .filter(player => player.toLowerCase().replace(/\s+/g, '').includes(input))
                    .sort((a, b) => 
                        a.toLowerCase().replace(/\s+/g, '').indexOf(input) - 
                        b.toLowerCase().replace(/\s+/g, '').indexOf(input)
                    );
            }

            displaySuggestion(result);
        }

        //function to display  suggestion
        function displaySuggestion(result) {
            if (inputBox.value) {
                suggestionBox.style.display = 'flex';
            } else {
                suggestionBox.style.display = 'none';
            }

            if (result.length === 0 && inputBox.value) {
                result = ["No players found"];
            }

            const suggestions = result.map(player => `<li class="search-list">${player}</li>`).join('');
            suggestionBox.innerHTML = `<ul>${suggestions}</ul>`;
        }

        inputBox.addEventListener('input', giveSuggestion);

        inputBox.addEventListener('focus', () => {
            if(inputBox.value){
                suggestionBox.style.display = 'flex';
            }
        });

        inputBox.addEventListener('blur', () => {
            setTimeout(()=>{
                suggestionBox.style.display = 'none';
            },200)
        });

        function selectInput(Event){
          if(Event.target.innerHTML != "No players found"){
            inputBox.value  = Event.target.innerText;
             //call the api function to bring profile here
          }
          
        }

        suggestionBox.addEventListener('click',(Event)=>{
           if(Event.target.classList.contains('search-list')){
            selectInput(Event);
           }
        })

        document.getElementById('searchButton').addEventListener('click',()=>{
            suggestionBox.style.display = 'none';
            //call the api here to fetch profile
        })

    } catch (error) {
        console.error('Error fetching data:', error);
    }
})();
