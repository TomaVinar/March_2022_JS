// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postId = JSON.parse(localStorage.getItem('postId'));

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const wraper = document.createElement('div');
        const postContainer = document.createElement('div');
        const idPost = document.createElement('div');
        const titlePost = document.createElement('h3');
        const bodyPost = document.createElement('p');
        const commentToPostBtn = document.createElement('button');

        idPost.innerText = post.id;
        titlePost.innerText = post.title;
        bodyPost.innerText = post.body;
        commentToPostBtn.innerText = 'Get all comments to this post';

        commentToPostBtn.classList.add('btn_comments');
        wraper.classList.add('wraper');

        postContainer.append(idPost, titlePost, bodyPost, commentToPostBtn);
        wraper.append(postContainer);
        document.body.appendChild(postContainer);

        commentToPostBtn.addEventListener('click', function (e) {
            e.preventDefault();
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(response => response.json())
                .then(comments => {
                    comments.map(comment => {
                        if (comment.postId === post.id) {
                            const commentsBlock = document.createElement('div');
                            const commentBlock = document.createElement('div');
                            const commentId = document.createElement('div');
                            const commentEmail = document.createElement('h3');
                            const commentBody = document.createElement('p');

                            commentId.innerText = comment.id;
                            commentEmail.innerText = comment.email;
                            commentBody.innerText = comment.body;

                            commentsBlock.classList.add('comments_cont');
                            commentBlock.classList.add('comment_cont');

                            commentBlock.append(commentId, commentEmail, commentBody);
                            commentsBlock.append(commentBlock);
                            wraper.appendChild(commentsBlock);
                            document.body.appendChild(wraper);
                        }
                    });
                });
        });
    });



