// const form = document.getElementById('myForm');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const username = form.elements.username.value;
//     const password = form.elements.password.value;
//     console.log(username);
//     console.log(password);
// });

const form = document.getElementById("loginForm");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const error = document.getElementById("error");
    error.innerHTML = '';
    error.style.color = "red";
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      error.innerHTML += "E-mail не є дійсним.<br>";
    }
  
    const passRegex1 = /^(?=.*[A-Z])/;
    if (!passRegex1.test(pass)) {
      error.innerHTML += "Пароль повинен містити принаймні одну велику літеру.<br>";
    }
    const passRegex2 = /^(?=.*[a-z])/;
    if (!passRegex2.test(pass)) {
      error.innerHTML += "Пароль повинен містити принаймні одну маленьку літеру.<br>";
    }
    const passRegex3 = /^(?=.*\d)/;
    if (!passRegex3.test(pass)) {
      error.innerHTML += "Пароль повинен містити принаймні одну цифру.<br>";
    }
    const passRegex4 = /.{6,}$/;
    if (!passRegex4.test(pass)) {
      error.innerHTML += "Пароль повинен мати довжину більше 6 символів.<br>";
    }
  
    if (error.innerHTML === "") {
      console.log(email);
      console.log(pass);
    }
})
    