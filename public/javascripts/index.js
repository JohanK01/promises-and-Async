fetch('data/people.json')
    .then(res => res.json())
    .then(data => {

            // for (let i = 0; i < data.length; i++) {
            //     let li = document.createElement('li');
            //     li.textContent = data[i];
            //     document.getElementById('content').appendChild(li);
            // }
            data.forEach(element => {
                let li = document.createElement('li');
                li.textContent = element;
                document.getElementById('content').appendChild(li);
            });
    })
    .catch(error => {
        console.log('not found', error)
    })