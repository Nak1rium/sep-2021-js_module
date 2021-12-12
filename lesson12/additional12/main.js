// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerHTML = `<div>ID: ${user.id}</div>
                 <div>Name: ${user.name}</div>
                 <div>Username: ${user.username}</div>
                 <div>Email: ${user.email}</div>
                 <div>Address: 
                   street: ${user.address.street}
                   suite: ${user.address.suite}
                   city: ${user.address.city}
                   zipcode: ${user.address.zipcode}
                   Geo: 
                   lat: ${user.address.geo.lat}
                   lng: ${user.address.geo.lng}</div>
                   <div>Phone: ${user.phone}</div>
                   <div>Website: ${user.website}</div>
                   <div>Company: 
                   name: ${user.company.name}
                   catchPhrase: ${user.company.catchPhrase}
                   bs: ${user.company.bs}</div>`;
            let btn = document.createElement('button');
            btn.innerText = 'Posts';
            btn.addEventListener('click', function () {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {
                            if (user.id === post.userId) {
                                let postDiv = document.createElement('div');
                                postDiv.classList.add('post');
                                postDiv.innerHTML = `<div>ID: ${post.id}</div>
                                                     <div>Title: ${post.title}</div>
                                                     <div>Body: ${post.body}</div>`;
                                let btn1 = document.createElement('button');
                                btn1.innerText = 'comments';
                                postDiv.appendChild(btn1);
                                btn1.addEventListener('click', function () {
                                    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                                        .then(response => response.json())
                                        .then(comments => {
                                            for (const comment of comments) {
                                                if (post.id === comment.postId) {
                                                    let commentDiv = document.createElement('div');
                                                    commentDiv.classList.add('comment');
                                                    commentDiv.innerHTML = `<div>ID: ${comment.id}</div>
                                                                               <div>Name: ${comment.name}</div>
                                                                               <div>Email: ${comment.email}</div>
                                                                               <div>Body: ${comment.body}</div>`;
                                                    postDiv.appendChild(commentDiv);
                                                }
                                            }
                                        });
                                btn1.disabled = true;
                                });
                                btn.disabled = true;
                                userDiv.appendChild(postDiv);
                            }
                        }
                    });
            });
            userDiv.appendChild(btn);
            wrapper.appendChild(userDiv);
        }
        document.body.appendChild(wrapper);
    });

