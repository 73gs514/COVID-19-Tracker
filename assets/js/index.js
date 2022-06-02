/*fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyAvtL8SNJZ5JLCOhISbQgAbuxPhUnM2YTw')*/
fetch('http://example.com/movies.json')

.then(res => res.json())
    .then((data) => {
        console.log(data);
    });

/*document.querySelector('#search-form').addEventListener('submit', getLocationinfo);

function getLocationinfo(event) {
    //const res= document.querySelector('.search-result').va
    fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyAvtL8SNJZ5JLCOhISbQgAbuxPhUnM2YTw')
        .then(async res => (res.json())); {
        try {
            const data = await response.json()

            console.log('response data?', data);
        } catch (error) {
            console,
            log("Error is here");
        }
    }
}


getLocationinfo();*/