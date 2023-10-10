// Ajax Handling for login
const BASE_URL = 'http://localhost:3000';

// login form handler
const login = document.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const data = {
        email,
        password
    };

    fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then((res) => {
        if (res.status === 200) {
            // redirect to home page
            window.location.href = 'index.html';
        } else {
            res.json().then((data) => {
                const error = document.getElementById('errorMessage');
                error.innerHTML = data.message;
                error.style.display = 'block';
                error.style.textAlign = 'center';
            });
        }
    }).catch((err) => {
        console.log(err);
    });
});

