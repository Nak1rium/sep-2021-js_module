// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((posts) => {
//         let wrapper = document.createElement('div');
//         wrapper.classList.add('wrapper');
//         for (const post of posts) {
//             let postDiv = document.createElement('div');
//             postDiv.classList.add('post');
//             postDiv.innerHTML = `<div>ID: ${post.id}</div>
//                              <div>Title: ${post.title}</div>
//                              <div>Body: ${post.body}</div>`;
//             wrapper.appendChild(postDiv);
//             document.body.appendChild(wrapper);
//         }
//     });


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then((response) =>response. json())
//     .then((comments) => {
//         let wrapper = document.createElement('div');
//         wrapper.classList.add('wrapper');
//         for (const comment of comments) {
//             let commentDiv = document.createElement('div');
//             commentDiv.classList.add('comment');
//             commentDiv.innerHTML = `<div>ID: ${comment.id}</div>
//                              <div>Name: ${comment.name}</div>
//                              <div>Email: ${comment.email}</div>
//                              <div>Body: ${comment.body}</div>`;
//             wrapper.appendChild(commentDiv);
//             document.body.appendChild(wrapper);
//         }
//     });
