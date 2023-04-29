const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const auth = firebase.auth()
const database = firebase.database()

function register(){
	names = document.getElementById('name').value
	email = document.getElementById('email').value
	username = document.getElementById('email').value
	password = document.getElementById('password').value
}