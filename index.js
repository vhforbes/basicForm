// Email Validation
(() => {
  const Email = (() => {
    let valid = false;

    let email = document.querySelector("#email");

    const validEmail = (email) => {
      if (email.includes("@") && email.includes(".")) {
        valid = true;
      } else valid = false;
    };

    // Style email if unvalid
    email.addEventListener("focusout", () => {
      validEmail(email.value);
      if (valid) {
        email.setAttribute("style", "border: 2px solid green");
        Email.valid = true;
      } else {
        email.setAttribute("style", "border: 2px solid red");
        Email.valid = false;
      }
    });

    return { valid };
  })();

  const Country = (() => {
    let valid = false;

    let country = document.querySelector("#country");

    function allLetter(input) {
      var letters = /^[A-Za-z]+$/;
      if (input.match(letters)) {
        return true;
      } else {
        return false;
      }
    }

    country.addEventListener("focusout", () => {
      if (allLetter(country.value)) {
        Country.valid = true;
        country.setAttribute("style", "border: 2px solid green");
      } else {
        Country.valid = false;
        country.setAttribute("style", "border: 2px solid red");
      }
    });

    return { valid };
  })();

  const Zip = (() => {
    let valid = false;

    const zip = document.querySelector("#zip");

    function allnumeric(inputtxt) {
      var numbers = /^[0-9]+$/;
      if (inputtxt.match(numbers)) {
        return true;
      } else {
        return false;
      }
    }

    zip.addEventListener("focusout", () => {
      if (allnumeric(zip.value)) {
        zip.setAttribute("style", "border: 2px solid green");
        Zip.valid = true;
      } else {
        Zip.valid = false;
        zip.setAttribute("style", "border: 2px solid red");
      }
    });

    return { valid };
  })();

  const Passwords = (() => {
    const passwordOne = document.querySelector("#passwordOne");
    const passwordTwo = document.querySelector("#passwordTwo");
    // Password matches logic
    let match = false;

    passwordOne.addEventListener("focusout", () => {
      if (passwordOne.value.length >= 6) {
        passwordOne.setAttribute("style", "border: 2px solid green");
      } else {
        passwordOne.setAttribute("style", "border: 2px solid red");
      }
    });

    passwordTwo.addEventListener("focusout", () => {
      if (
        passwordOne.value.length >= 6 &&
        passwordOne.value === passwordTwo.value
      ) {
        passwordOne.setAttribute("style", "border: 2px solid green");
        passwordTwo.setAttribute("style", "border: 2px solid green");

        Passwords.match = true;
      } else {
        passwordTwo.setAttribute("style", "border: 2px solid red");
        passwordOne.setAttribute("style", "border: 2px solid red");

        Passwords.match = false;
      }
    });

    return { match };
  })();

  const submit = (email, country, zip, passwordMatch) => {
    if (email && country && zip && passwordMatch) {
      return true;
    } else return false;
  };

  // SUBMIT LOGIC

  const submitButton = document.querySelector("#submit");

  submitButton.addEventListener("click", () => {
    if (submit(Email.valid, Country.valid, Zip.valid, Passwords.match)) {
      alert("Submitted Data");
    } else alert("Fill in the fields correctly");
  });
})();
