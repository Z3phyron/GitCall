const inputValue = document.querySelector('.username');
const searchBtn = document.querySelector('#search');
const avatar = document.querySelector('.image');
const profile_name = document.querySelector('.name');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const repos = document.querySelector('.repositories');
const scroll = document.querySelector('.scroll-box');






const client_Id = 'Iv1.c9af51c12c8ba713';
const client_Secret = 'e2be6a8c342885b131071e834eb0ff2ad1426627';


const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_Id=${client_Id}&client_Secret=${client_Secret}`);

    const data = await api_call.json();
    return { data }
};

const fetchRepos = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}/repos?client_Id=${client_Id}&client_Secret=${client_Secret}`);

    const data = await api_call.json();
    return { data }
};

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);

        avatar.innerHTML = `<img src=${res.data.avatar_url} alt="" class="pic">`;

        profile_name.innerHTML = `Name: <span>${res.data.login}</span>`;

        followers.innerHTML = `followers: <span>${res.data.followers}</span>`;

        following.innerHTML = `following: <span>${res.data.following}</span>`;

    })

    fetchRepos(inputValue.value).then((res) => {
        console.log(res);

        let repo_data = res.data.map((item, index) => {
            console.log(item);

            return (
                `<li class="card">
                <div class="repo-name-box">
                    <h4 class="repo-name">${item.name}</h4>
                </div>
                <div class="repo-link-box">
                    <a href=${item.html_url} class="repo-link"><i class="fas fa-link    "></i></a>
                </div>
            </li>`
            )
        })

        repos.innerHTML = repo_data;

        

    })
};

searchBtn.addEventListener('click', () => {
    showData();

    scroll.innerHTML = `<div class="scroll">
    <h5>scroll</h5>
<i class="fas fa-arrow-down scroll-icon   "></i>
</div>`;
})


