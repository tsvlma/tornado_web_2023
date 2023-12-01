const users = [
    {
        id: 1,
        name:'Leanne Graham',
        username:'Bret',
    },
    {
        id: 2,
        name:'Ervin Howell',
        username:'Antonette',
    },
    {
        id: 3,
        name:'Clementine Bauch',
        username:'Samantha',
    },
    {
        id: 4,
        name:'Patricia Lebsack',
        username:'Karianne',
    },
    {
        id: 5,
        name:'Chelsey Dietrich',
        username:'Karmen',
    },
    {
        id: 6,
        name:'Mrs.Dennis Schulist',
        username:'Leopoldo_Corkery',
    },
]

//zovhon 3huniig hadgalah
const usersSlice = users.slice(0, 3);
//hereglegchiig haruulah element uusgeh
const userElement = document.createElement('ul');
//hereglegch burtee li element uusgeh
usersSlice.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userList.appendChild(li);
});

//hereglegciig haruulah elementg DOM-d hiih
document.body.appendChild(userElement);