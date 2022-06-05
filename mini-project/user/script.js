const singleUser = JSON.parse(localStorage.getItem('user'));

const wrap = document.createElement('div');
const user = document.createElement('div');
const id = document.createElement('div');
const name = document.createElement('h2');
const username = document.createElement('h4');
const email = document.createElement('div');
const phone = document.createElement('div');
const website = document.createElement('div');
const address = document.createElement('div');
const street = document.createElement('p');
const city = document.createElement('p');
const suite = document.createElement('p');
const zipcode = document.createElement('div');
const geo = document.createElement('div');
const lat = document.createElement('div');
const lng = document.createElement('div');
const company = document.createElement('div');
const companyName = document.createElement('h4');
const bs = document.createElement('p');
const catchPhrase = document.createElement('div');
const userPostsBtn = document.createElement('button');

user.classList.add('user');

id.innerText = singleUser.id;
name.innerText = singleUser.name;
username.innerText = singleUser.username;
email.innerText = singleUser.email;
phone.innerText = singleUser.phone;
website.innerText = singleUser.website;
street.innerText = singleUser.address.street;
city.innerText = singleUser.address.city;
suite.innerText = singleUser.address.suite;
lat.innerText = singleUser.address.geo.lat;
lng.innerText = singleUser.address.geo.lng;
companyName.innerText = singleUser.company.name;
bs.innerText = singleUser.company.bs;
catchPhrase.innerText = singleUser.company.catchPhrase;
userPostsBtn.innerText = 'Post of current user';

userPostsBtn.classList.add('user_btn');
wrap.classList.add('wrap');

company.append(companyName, bs, catchPhrase);
geo.append(lat, lng);
address.append(city, street, suite, geo);
user.append(id, name, username, email, phone, website, address, company, userPostsBtn);
wrap.appendChild(user);
document.body.appendChild(wrap);

userPostsBtn.addEventListener('click', function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${singleUser.id}/posts`)
        .then(response => response.json())
        .then(value => {
                value.map(post => {
                    if (post.userId === singleUser.id) {
                        const block = document.createElement('div');
                        const postBlock = document.createElement('div');
                        const postTitle = document.createElement('div');
                        const buttonPostDetails = document.createElement('button');

                        postTitle.innerText = post.title;
                        buttonPostDetails.innerText = 'Get post details';

                        block.classList.add('parent');
                        postBlock.classList.add('post_container');
                        buttonPostDetails.classList.add('get_post_btn');
                        postTitle.classList.add('title_post');

                        postBlock.append(postTitle, buttonPostDetails);
                        block.append(postBlock);
                        document.body.appendChild(block);

                        buttonPostDetails.addEventListener('click', function (e) {
                            e.preventDefault();
                            localStorage.setItem('postId', JSON.stringify(post.id));
                            window.location.href = '../post/post-details.html';
                        });
                    }
                });
            }
        );
});
