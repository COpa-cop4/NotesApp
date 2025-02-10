const form = document.querySelector("form");
const inputTitle = form.elements.formTitle;
const inputBody = form.elements.formBody;

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

const customValidationTitleHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("Judul tidak boleh kosong!");
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity("Judul minimal memiliki 4 karakter.");
    return;
  }

  if (event.target.validity.patternMismatch) {
    event.target.setCustomValidity("Tidak boleh diawali dengan simbol,\
      mengandung white space atau spasi, dan\
      mengandung karakter spesial seperti dolar ($)!");
  }
  return;
};

inputTitle.addEventListener("change", customValidationTitleHandler);
inputTitle.addEventListener("invalid", customValidationTitleHandler);

inputTitle.addEventListener("blur", (event) => {
  const isValid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;

  const connectedValidationId = event.target.getAttribute("aria-describedby");
  const connectedValidationEl = connectedValidationId ? document.getElementById(connectedValidationId) : null;

  if (connectedValidationEl && errorMessage && !isValid) {
    connectedValidationEl.innerText = errorMessage;
  } else {
    connectedValidationEl.innerText = "";
  }
});

const customValidationBodyHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("Isi tidak boleh kosong!");
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity("Isi minimal memiliki 10 karakter!");
    return;
  }
};

inputBody.addEventListener("change", customValidationBodyHandler);
inputBody.addEventListener("invalid", customValidationBodyHandler);

inputBody.addEventListener("blur", (event) => {
  const isValid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;

  const connectedValidationId = event.target.getAttribute("aria-describedby");
  const connectedValidationEl = connectedValidationId ? document.getElementById(connectedValidationId) : null;

  if (connectedValidationEl && errorMessage && !isValid) {
    connectedValidationEl.innerText = errorMessage;
  } else {
    connectedValidationEl.innerText = "";
  }
});