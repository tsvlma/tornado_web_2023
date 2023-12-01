async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        displayData(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
}

fetchData();
