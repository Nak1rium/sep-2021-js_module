fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {

        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        for (const user of users) {

            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            userDiv.innerHTML = `<div>ID - ${user.id}</div>
                                 <div>Name - ${user.name}</div>`;

            let btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = 'Click to see user details';

            btn.addEventListener('click', function () {

                localStorage.setItem('id', `${user.id}`);
                window.location = 'user-details.html';

            });

            userDiv.appendChild(btn);
            wrapper.appendChild(userDiv);

        }

        document.body.appendChild(wrapper);

    });