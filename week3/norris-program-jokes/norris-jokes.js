const fetch = require('node-fetch');

// try {
//     async function getNorrisJoke() {
//         const fetchUrl = await fetch('http://api.icndb.com/jokes/random');
//         const data = await fetchUrl.json();
//         console.log(data);
//     }
//     getNorrisJoke();
// } catch (error) {
//     console.log(error);
// }
// -----------------------------------------------------//

// try {
//     async function getBooks() {
//         const fetchUrl = await fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
//             headers: {
//                 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ=='
//             }
//         });
//         const data = await fetchUrl.json();
//         console.log(data);
//     }
//     getBooks();
// } catch (error) {
//     console.log(error);
// }

// -----------------------------------------------------//

async function makeReservation(name, numberOfPeople) {
    const url = `https://reservation100-sandbox.mxapps.io/api/reservations`;
    try {
        const fetchUrl = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                numberOfPeople
            }),
        });
        const data = await fetchUrl;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
makeReservation('mohammad', 444);