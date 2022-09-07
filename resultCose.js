const signUpForm = document.forms.TEST;

signUpForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const score = +signUpForm.elements.question1.value +
                 +signUpForm.elements.question2.value +
                 +signUpForm.elements.question3.value +
                 +signUpForm.elements.question4.value;

    let name = 'something went wrong'

    if (score <= 3) name = 'Eggplant';
    else if (score <= 7) name = 'Zucchini';
    else name = 'Potato';

    saveUserToLocalStorage(name);

    window.location.href = "result.html";

})

function saveUserToLocalStorage(name) {
    const userJSON = {
        "name": name
    }

    const userStringified = JSON.stringify(userJSON);

localStorage.setItem("\_cb_user", userStringified);

}