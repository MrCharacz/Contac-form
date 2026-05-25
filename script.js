const requiredElements_text = document.querySelectorAll('[type="text"][required]');

const form = document.getElementById('contact-form')

console.log(requiredElements_text);

function validate_requiredElements_text() {
    requiredElements_text.forEach(element => {
        element.setCustomValidity(element.value.trim().length > 0 ? "" : element.dataset.error);
    });
}


form.addEventListener("submit", e => {

    validate_requiredElements_text()

   if (!form.checkValidity()) {
        e.preventDefault(); 
        form.reportValidity();
}
}
)