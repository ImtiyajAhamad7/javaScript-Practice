const url = `https://official-joke-api.appspot.com/random_joke`;

let geth1 = document.querySelector('h1');
let geth3 = document.querySelector('h3');
let btn = document.querySelector('button');

let fetchData = async () => {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

btn.addEventListener('click', async () => {
    try {
        let data = await fetchData();
        geth1.innerText = data.setup;
        geth3.innerText = data.punchline;
    } catch (error) {
        console.error('Error:', error);
    }
});
