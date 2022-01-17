let xhttp = new XMLHttpRequest;
xhttp.open('GET', 'data/people.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
    const data = xhttp.response;
    console.log(data);

    showData = () =>{
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            li.textContent = data[i];
            document.getElementById('content').appendChild(li);
        }
        
    }

}