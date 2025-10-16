//Navigation Section

function Navigate(pageUrl) {
  window.location.href = pageUrl;
}
///--Home page navigation

//---Sign up and Login Navigation
document.getElementById("navSignup").addEventListener("click", function () {
  Navigate("signup.html");
});
document.getElementById("navLogin").addEventListener("click", function () {
  Navigate("login.html");
});

//---Other screens navigation
document.getElementById("navAbout").addEventListener("click", function () {
  Navigate("about.html");
});
document.getElementById("navCourses").addEventListener("click", function () {
  Navigate("weekcourses.html");
});
document.getElementById("navWeek").addEventListener("click", function () {
  Navigate("weekcourses.html");
});
document.getElementById("month").addEventListener("click", function () {
  Navigate("6monthcourses.html");
});
document.getElementById("calc").addEventListener("click", function () {
  Navigate("registercourse.html");
});
document.getElementById("week").addEventListener("click", function () {
  Navigate("weekcourses.html");
});
document.getElementById("months").addEventListener("click", function () {
  Navigate("6monthcourses.html");
});
document.getElementById("contact").addEventListener("click", function () {
  Navigate("contact.html");
});

///---End of homepage Navigation


