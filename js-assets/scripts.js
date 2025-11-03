// Wait for page to fully load before running ANY script
document.addEventListener('DOMContentLoaded', function() {

  //Navigation Section
  function Navigate(pageUrl) {
    window.location.href = pageUrl;
  }

  ///--Home page navigation
  //---Sign up and Login Navigation
  const navSignup = document.getElementById("navSignup");
  const navLogin = document.getElementById("navLogin");
  
  if (navSignup) {
    navSignup.addEventListener("click", function () {
      Navigate("signup.html");
    });
  }
  
  if (navLogin) {
    navLogin.addEventListener("click", function () {
      Navigate("login.html");
    });
  }

  //---Other screens navigation
  const navCourses = document.getElementById("navCourses");
  const navWeek = document.getElementById("navWeek");
  const month = document.getElementById("month");
  const calc = document.getElementById("calc");
  const week = document.getElementById("week");
  const months = document.getElementById("months");
  const contact = document.getElementById("contact");

  if (navCourses) {
    navCourses.addEventListener("click", function () {
      Navigate("weekcourses.html");
    });
  }
  
  if (navWeek) {
    navWeek.addEventListener("click", function () {
      Navigate("weekcourses.html");
    });
  }
  
  if (month) {
    month.addEventListener("click", function () {
      Navigate("6monthcourses.html");
    });
  }
  
  if (calc) {
    calc.addEventListener("click", function () {
      Navigate("registercourse.html");
    });
  }
  
  if (week) {
    week.addEventListener("click", function () {
      Navigate("weekcourses.html");
    });
  }
  
  if (months) {
    months.addEventListener("click", function () {
      Navigate("6monthcourses.html");
    });
  }
  
  if (contact) {
    contact.addEventListener("click", function () {
      Navigate("contact.html");
    });
  }

  ///---End of homepage Navigation

  ///--- 6 week courses navigation
  ///---Course cards
const ViewC = document.getElementById("ViewC");
  const ViewG = document.getElementById("ViewG");
  const ViewM = document.getElementById("ViewM");

  if (ViewC) {
    ViewC.addEventListener("click", function () {
      Navigate("detailedweekcourses.html");
    });
  }
  
  if (ViewG) {
    ViewG.addEventListener("click", function () {
      Navigate("detailedweekcourses.html");
    });
  }
  
  if (ViewM) {
    ViewM.addEventListener("click", function () {
      Navigate("detailedweekcourses.html");
    });
  }

  ///---Other courses section
const home = document.getElementById("home");

  if (home) {
    home.addEventListener("click", function () {
      Navigate("homepage.html");
    });
  }

  ///---CTA section navigation
  const Apply = document.getElementById("Apply");

  if (Apply) {
    Apply.addEventListener("click", function () {
      Navigate("signup.html");
    });
  }
///---End of 6 week courses Navigation

///---detailed 6 week courses navigation
const CalcC = document.getElementById("CalcC");
  const CalcG = document.getElementById("CalcG");
  const CalcM = document.getElementById("CalcM");

  if (CalcC) {
    CalcC.addEventListener("click", function () {
      Navigate("registercourse.html");
    });
  }
  
  if (CalcG) {
    CalcG.addEventListener("click", function () {
      Navigate("registercourse.html");
    });
  }
  
  if (CalcM) {
    CalcM.addEventListener("click", function () {
      Navigate("registercourse.html");
    });
  }
  ///---End of detailed 6 week courses Navigation

  ///---6 month courses Navigation
  ///---Course cards
const ViewL = document.getElementById("ViewL");
  const ViewP = document.getElementById("ViewP");
  const ViewF = document.getElementById("ViewF");
  const ViewS = document.getElementById("ViewS")

  if (ViewL) {
    ViewL.addEventListener("click", function () {
      Navigate("detailedmonthcourses.html");
    });
  }
  
  if (ViewP) {
    ViewP.addEventListener("click", function () {
      Navigate("detailedmonthcourses.html");
    });
  }
  
  if (ViewS) {
    ViewS.addEventListener("click", function () {
      Navigate("detailedmonthcourses.html");
    });
  }

   if (ViewF) {
    ViewF.addEventListener("click", function () {
      Navigate("detailedmonthcourses.html");
    });
  }
  ///---End of 6 month courses navigation
   ///---detailed 6 month courses navigation
  const CalcN = document.getElementById("CalcN");
  const CalcD = document.getElementById("CalcD");
  const CalcW = document.getElementById("CalcW");
   const CalcA = document.getElementById("CalcA");

  if (CalcA) {
    CalcA.addEventListener("click", function () {
      Navigate("registercourse.html");
    });
  }
  
  if (CalcW) {
    CalcW.addEventListener("click", function () {
      Navigate("registercourse.html");
    });
  }

  if (CalcN) {
    CalcN.addEventListener("click", function () {
      Navigate("registercourse.html");
    })
  }
  
  if (CalcD) {
    CalcD.addEventListener("click", function () {
      Navigate("registercourse.html");
    });
  }
  
  ///---End of detailed 6 week courses Navigation

 

 






  }); // End of DOMContentLoaded
