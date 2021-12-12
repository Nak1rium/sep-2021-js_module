fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        for (const user of users) {

            let userDiv = userView(user);
            let postsDiv = document.createElement('div');
            let open = false;
            let btn = document.createElement('button');

            btn.innerText = 'Posts';

            userDiv.appendChild(btn);
            userDiv.appendChild(postsDiv);

            btn.addEventListener('click', function () {

                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(response => response.json())
                    .then(posts => {
                        open ? postsDiv.style.display = 'none' : postsDiv.style.display = 'block';
                        open = !open;

                        for (const post of posts) {

                            if (user.id === post.userId) {

                                let postDiv = postView(post);
                                let btn1 = document.createElement('button');
                                let commentsDiv = document.createElement('div');

                                btn1.innerText = 'comments';

                                postDiv.appendChild(btn1);
                                postDiv.appendChild(commentsDiv);

                                let open = false;

                                btn1.addEventListener('click', function () {

                                    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                                        .then(response => response.json())
                                        .then(comments => {

                                            open ? commentsDiv.style.display = 'none' : commentsDiv.style.display = 'block';
                                            open = !open;

                                            for (const comment of comments) {
                                                if (post.id === comment.postId) {
                                                    let commentDiv = commentsView(comment);
                                                    commentsDiv.appendChild(commentDiv);
                                                }
                                            }
                                        });
                                });
                                postsDiv.appendChild(postDiv);
                            }
                        }
                    });
            });
            wrapper.appendChild(userDiv);
        }
        document.body.appendChild(wrapper);
    });


function userView(user) {
    let userMarkup = document.createElement('div');
    userMarkup.classList.add('user');
    userMarkup.innerHTML = `<div>ID: ${user.id}</div>
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
    return userMarkup;
}

function postView(post) {
    let postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `<div>ID: ${post.id}</div>
                         <div>Title: ${post.title}</div>
                         <div>Body: ${post.body}</div>`;
    return postDiv;
}

function commentsView(comment) {
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<div>ID: ${comment.id}</div>
                            <div>Name: ${comment.name}</div>
                            <div>Email: ${comment.email}</div>
                            <div>Body: ${comment.body}</div>`;
    return commentDiv;
}