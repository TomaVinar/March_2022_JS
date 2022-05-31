// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(value => {
        for (const post of value) {
            const postContainer = document.createElement('div');
            const id = document.createElement('div');
            const title = document.createElement('h3');
            const body = document.createElement('p');

            id.innerText = post.id;
            title.innerText = post.title;
            body.innerText = post.body;

            postContainer.classList.add('post_container');
            title.classList.add('post_title');
            body.classList.add('post_body');

            postContainer.append(id, title, body);
            document.body.appendChild(postContainer);
        }
    });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(value => value.map(comment => {
            const commentContainer = document.createElement('div');
            const header = document.createElement('h1');

            const idComment = document.createElement('div');
            const nameComment = document.createElement('h3');
            const emailComment = document.createElement('h4');
            const bodyComment = document.createElement('p');

            idComment.innerText = comment.id;
            nameComment.innerText = comment.name;
            emailComment.innerText = comment.email;
            bodyComment.innerText = comment.body;
            header.innerText = 'Comments';

            commentContainer.classList.add('comment_block');

            commentContainer.append(idComment, nameComment, emailComment, bodyComment);
            document.body.append(commentContainer);
        })
    )
