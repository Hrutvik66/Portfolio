// Typewriter code
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// Inview Java Script code
const appear = document.querySelector(".appear");
const cb = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
    } else {
      entry.target.classList.remove("inview");
    }
  });
};
const io = new IntersectionObserver(cb);
io.observe(appear);

// Form validation
function sendEmail() {
  const message = document.querySelector('[name="Message"]');
  const subject = document.querySelector('[name="Subject"]');
  const name = document.querySelector('[name="Name"]');
  const email = document.querySelector('[name="Email"]');
  const nameMessage = document.getElementById("nameMessage");
  const emailMessage = document.getElementById("emailMessage");
  const subjectMessage = document.getElementById("subjectMessage");
  const messageMessage = document.getElementById("messageMessage");
  nameMessage.innerHTML = "";
  emailMessage.innerHTML = "";
  subjectMessage.innerHTML = "";
  messageMessage.innerHTML = "";
  if (name.value == "") {
    nameMessage.innerHTML = "Please Enter name :(";
    return;
  } else if (email.value == "") {
    emailMessage.innerHTML = "Please Enter email :(";
    return;
  } else if (subject.value == "") {
    subjectMessage.innerHTML = "Please Enter subject of message :(";
    return;
  } else if (message.value == "") {
    messageMessage.innerHTML = "Please Enter message :(";
    return;
  }
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(email.value).toLowerCase())) {
    emailMessage.innerHTML = "";
  } else {
    emailMessage.innerHTML = "Please Enter valid email :(";
  }
}
