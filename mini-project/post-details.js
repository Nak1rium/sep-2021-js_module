let postId = localStorage.getItem('postId');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => {

        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<div><span>Title - </span>${post.title}</div>
                             <div><span>Body - </span>${post.body}</div>`;

        let btn = document.createElement('button');
        btn.setAttribute('id', 'btn');
        btn.classList.add('button');
        btn.innerText = 'Click to see comments of current post';

        btn.addEventListener('click', function () {

            let commentsDiv = document.createElement('div');
            commentsDiv.classList.add('commentsDiv');

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then((response) => response.json())
                .then((comments) => {

                    let btn = document.getElementById('btn');
                    btn.style.display = 'none';

                    for (const comment of comments) {
                        let commentDiv = document.createElement('div');
                        commentDiv.classList.add('commentDiv');
                        commentDiv.innerHTML = `<div><span>Name - </span>${comment.name}</div>
                                                <div><span>Email - </span>${comment.email}</div>
                                                <div><span>Body - </span>${comment.body}</div>`;
                        commentsDiv.appendChild(commentDiv);
                        wrapper.appendChild(commentsDiv);
                    }

                });

        });

        wrapper.append(postDiv, btn,);
        document.body.appendChild(wrapper);

    });