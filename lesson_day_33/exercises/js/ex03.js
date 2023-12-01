async function searchUser(keyword) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        const filteredUsers = data.filter(d => d.title.includes(keyword));
        console.log (filteredUsers)
        document.getElementById('searchResults').innerHTML = filteredUsers.map(user => `<p>${user.title}</p>`).join('');

        
    } catch (err) {
        console.error('',err);
    }


}

document.getElementById('searchBox').addEventListener('input', (e) => searchUser(e.target.value));
  

