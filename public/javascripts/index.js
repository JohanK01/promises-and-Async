const getData = async () => {
    const response = await fetch('/data/people.json')
    if (!response.ok) {
        throw new Error(`not working: ${response.status}`)
    }
    const data = await response.json()
    return data;

}
getData().then(data =>{
    showData(data);
})
// for (let i = 0; i < data.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = data[i];
//     document.getElementById('content').appendChild(li);
// }

showData = (data) => {

    data.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        document.getElementById('content').appendChild(li);
    });

}