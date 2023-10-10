// Ajax Handling for login
const BASE_URL = 'https://bright-calf-pantyhose.cyclic.app';

// register form handler
const submitRegister = document.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirmPassword').value;

    const message = document.getElementById('messageContainer');

    console.log(name);
    if (password !== confirm_password) {
        message.innerHTML = "Password and Confirm Password do not match.";
        return false; // Mencegah formulir untuk dikirim
    }

    const data = {
        name,
        email,
        password,
        confirm_password
    };

    console.log(data);

    fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then((res) => {
        if (res.status === 200) {
            alert("Register Success");
            window.location.href = 'login.html';
        } else {
            res.json().then((data) => {
                console.log(data);
                message.innerHTML = data.message;
                message.style.display = 'block';
                message.style.textAlign = 'center';
            });
        }
    }).catch((err) => {
        console.log(err);
    });
});