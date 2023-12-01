async function fetchData() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
        const posts = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        




    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchData();


