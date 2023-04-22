const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const length = validationInput.dataset.length;
  const value = validationInput.value.trim();
  const isValid = value.length === Number(length);

  if (isValid) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
