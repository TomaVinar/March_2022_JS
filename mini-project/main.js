fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        value.map(user => {
            const usersBlock = document.createElement('div');
            const userBlock = document.createElement('div');
            const userId = document.createElement('div');
            const userName = document.createElement('h3');
            const button = document.createElement('button');

            userBlock.classList.add('user_block');
            button.classList.add('user_button');

            userId.innerText = user.id;
            userName.innerText = user.name;
            button.innerText = 'Get the details';

            button.addEventListener('click', function (e) {
                e.preventDefault();
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = 'user/user-details.html'
            });

            userBlock.append(userId, userName, button);
            usersBlock.appendChild(userBlock);
            document.body.append(usersBlock);
        });
    });

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
