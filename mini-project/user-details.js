let id = localStorage.getItem('id');
let open = false;
let click = 0;
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((user) => {

        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        let userDetailsDiv = document.createElement('div');
        userDetailsDiv.classList.add('userDetailsDiv');
        userDetailsDiv.innerHTML = `<div><span>ID:</span> ${user.id}</div>
                                    <div class="margin_5px"><span>Name:</span> ${user.name}</div>
                                    <div><span>Username:</span> ${user.username}</div>
                                    <div><span>Email:</span> ${user.email}</div>
                                    <div class="margin_5px"><span>Address:</span></div> 
                                    <div>street: ${user.address.street}</div>
                                    <div>suite: ${user.address.suite}</div>
                                    <div>city: ${user.address.city}</div>
                                    <div>zipcode: ${user.address.zipcode}</div>
                                    <div class="margin_5px"><span>Geo:</span></div> 
                                    <div>lat: ${user.address.geo.lat}</div>
                                    <div>lng: ${user.address.geo.lng}</div>
                                    <div class="margin_5px"><span>Phone:</span> ${user.phone}</div>
                                    <div><span>Website:</span> ${user.website}</div>
                                    <div class="margin_5px"><span>Company:</span></div> 
                                    <div>name: ${user.company.name}</div>
                                    <div>catchPhrase: ${user.company.catchPhrase}</div>
                                    <div>bs: ${user.company.bs}</div>`;

        let btn = document.createElement('button');
        btn.innerText = 'Post of current user';
        btn.classList.add('btn');

        btn.addEventListener('click', function () {

            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then((response) => response.json())
                .then((posts) => {

                    open ? containerDiv.style.display = 'none' : containerDiv.style.display = 'flex';
                    open = !open;

                    if (open === true) {
                        btn.innerText = 'Click to hide';
                    } else {
                        btn.innerText = 'Post of current user';
                    }

                    if (click === 0) {

                        for (const post of posts) {

                            let postDiv = document.createElement('div');
                            postDiv.classList.add('postDiv');

                            let textDiv = document.createElement('div');
                            textDiv.classList.add('textDiv');
                            textDiv.innerText = post.title;

                            let btn = document.createElement('button');
                            btn.classList.add('postBtn');
                            btn.innerText = 'Post details';

                            btn.addEventListener('click', function () {
                                localStorage.setItem('postId', `${post.id}`);
                                window.location = 'post-details.html';
                            });

                            postDiv.append(textDiv, btn);
                            containerDiv.appendChild(postDiv);
                        }
                    }

                    click++

                })

        });

        let containerDiv = document.createElement('div');
        containerDiv.classList.add('containerDiv');

        wrapper.append(userDetailsDiv, btn, containerDiv);
        document.body.appendChild(wrapper);
    });
