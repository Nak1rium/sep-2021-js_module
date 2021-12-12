// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch ('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        for (const post of posts) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `<div>ID: ${post.id}</div>
                                 <div>Title: ${post.title}</div>
                                 <div>Body: ${post.body}</div>`;
            let btn = document.createElement('button');
            btn.innerText = 'Click me';
            btn.addEventListener('click', function () {
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
                            btn.disabled = true;
                        }
                    })
            })
            postDiv.appendChild(btn);
            wrapper.appendChild(postDiv);
            document.body.appendChild(wrapper);
        }
    });


