fetch('data/people.json')
    .then(res => res.json())
    .then(data => 
        


showData = () => {
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.textContent = data[i];
        document.getElementById('content').appendChild(li);
    }
});