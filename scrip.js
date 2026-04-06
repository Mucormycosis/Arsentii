// ебатория с fetch и покдключения кнопки к картинкам
const button = document.getElementById('Get-random-cat');
const API_KEY = "live_gsFqodKkKd4zY24CCvOHn6rfaJpUQs22RFHS4lE8KfgsEEgiX5Y6w76tVYhoS4MM";
let counter = 0;

button.addEventListener('click', function() {
    counter++;

    // показываем гифку, скрываем кота
    document.getElementById('loader').style.display = 'block';
    document.getElementById('imageBox').style.display = 'none';
    
    fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
            'x-api-key': API_KEY
        }
    })
    .then(res => res.json())
    .then(data => {
        const url = data[0].url;
        document.getElementById('imageBox').src = url;
        //скрывам гифку показываем кота
        document.getElementById('loader').style.display = 'none';
        document.getElementById('imageBox').style.display = 'block';
        // каждые 5 кликов искусственная ошибка
        if (counter % 5 === 0) {
            throw new Error('404!');
        }
    })
    // обработка ошибок  + моя искусственнвя 
    .catch(err => {
        if (err.message === '404!') { // смодулировал ошибку
            alert('Ошибка');
        } else if (err.message === 'Failed to fetch') {
            alert('Net ineta');
        } else {
            alert(err.message);
        }
        console.log(err);
    });
});