// This code will make the header of your website sticky, so that it stays visible when you scroll down.

window.onscroll = function() {
  var header = document.getElementById("header");
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// This code will make the buttons on your website change color when you hover over them.

var buttons = document.querySelectorAll(".button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "#0000cc";
  });
  buttons[i].addEventListener("mouseleave", function() {
    this.style.backgroundColor = "#000088";
  });
}

// This code will make the input fields on your website change color when you focus on them.

var inputs = document.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function() {
    this.style.borderColor = "#0000cc";
  });
  inputs[i].addEventListener("blur", function() {
    this.style.borderColor = "#000088";
  });
}

// This code will make the text areas on your website change color when you focus on them.

var textareas = document.querySelectorAll("textarea");
for (var i = 0; i < textareas.length; i++) {
  textareas[i].addEventListener("focus", function() {
    this.style.borderColor = "#0000cc";
  });
  textareas[i].addEventListener("blur", function() {
    this.style.borderColor = "#000088";
  });
}

// This code will make the submit buttons on your website change color when you click on them.

var submitButtons = document.querySelectorAll(".submit");
for (var i = 0; i < submitButtons.length; i++) {
  submitButtons[i].addEventListener("click", function() {
    this.style.backgroundColor = "#0000cc";
    this.style.color = "#ffffff";
  });
}

// This code will make the newsletter form send a message when you click on the submit button.

var newsletterForm = document.getElementById("newsletter-form");
newsletterForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var data = {
    name: name,
    email: email,
    message: message
  };
  $.ajax({
    url: "/newsletter",
    type: "POST",
    data: data,
    success: function(response) {
      if (response.success) {
        alert("Thank you for subscribing to our newsletter!");
      } else {
        alert("There was an error subscribing to our newsletter. Please try again later.");
      }
    },
    error: function(error) {
      alert("There was an error subscribing to our newsletter. Please try again later.");
    }
  });
});
