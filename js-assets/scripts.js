      let isLoginMode = true;

      function toggleAuthMode() {
        const container = document.getElementById("authContainer");
        const welcomeTitle = document.getElementById("welcomeTitle");
        const welcomeText = document.getElementById("welcomeText");
        const panelBtn = document.getElementById("panelToggleBtn");

        if (!container || !welcomeTitle || !welcomeText || !panelBtn) {
          return;
        }

        if (isLoginMode) {
          // Switch to signup mode
          container.classList.add("signup-mode");
          welcomeTitle.textContent = "Welcome Back!";
          welcomeText.textContent =
            "To keep connected with us please login with your personal info";
          panelBtn.textContent = "Sign In";
          isLoginMode = false;
        } else {
          // Switch to login mode
          container.classList.remove("signup-mode");
          welcomeTitle.textContent = "Hello, User!";
          welcomeText.textContent =
            "Register with your personal details to use all of site features";
          panelBtn.textContent = "Sign Up";
          isLoginMode = true;
        }
      }
// Wait for page to fully load before running script
document.addEventListener("DOMContentLoaded", function () {
  //Navigation Section
  function Navigate(pageUrl) {
    window.location.href = pageUrl;
  }

  ///--Home page navigation
  //---Sign up and Login Navigation
  const navSignup = document.getElementById("navSignup");

  if (navSignup) {
    navSignup.addEventListener("click", function () {
      Navigate("/login/signuplogin.html");
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
      Navigate("/login/signuplogin.html");
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
  const firstaid = document.getElementById("firstaid");
  const ViewP = document.getElementById("ViewP");
  const sewing = document.getElementById("sewing");
  const life = document.getElementById("life");
  const landscaping = document.getElementById("landscaping");
  const ViewF = document.getElementById("ViewF");
  const ViewS = document.getElementById("ViewS");

  if (ViewL) {
    ViewL.addEventListener("click", function () {
      Navigate("detailedmonthcourses.html#life");
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
  const calw = document.getElementById("calw");

  if (calw) {
    calw.addEventListener("click", function () {
      Navigate("registercourse.html");
    });
  }

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
    });
  }

  if (CalcD) {
    CalcD.addEventListener("click", function () {
      Navigate("registercourse.html");
    });
  }

  ///---End of detailed 6 week courses Navigation

  /// Registration Form Validation
  // Get all checkboxes
  const checkboxes = document.querySelectorAll('input[name="course"]');

  // Only run registration code if on registration page
  if (checkboxes.length > 0) {
    // Course prices
    const prices = {
      "child-minding": 750,
      cooking: 750,
      garden: 750,
      "first-aid": 1500,
      sewing: 1500,
      landscaping: 1500,
      "life-skills": 1500,
    };

    // Get summary display elements more specifically
    const summaryRows = document.querySelectorAll(".summary-row");
    const selectedCoursesEl = summaryRows[0].querySelector(".summary-value");
    const subtotalEl = summaryRows[1].querySelector(".summary-value");
    const discountEl = summaryRows[2].querySelector(".summary-value");
    const vatEl = summaryRows[3].querySelector(".summary-value");
    const totalEl = document.querySelector(".summary-row.total .summary-value");
    const discountLabel = summaryRows[2].querySelector("span:first-child");

    // Update cost summary dynamically
    function updateCosts() {
      let count = 0;
      let subtotal = 0;

      // Count selected courses and calculate subtotal
      checkboxes.forEach((box) => {
        if (box.checked) {
          count++;
          subtotal += prices[box.value];
        }
      });

      // Calculate discount based on number of courses
      let discountRate = 0;
      if (count === 2) discountRate = 0.05;
      else if (count === 3) discountRate = 0.1;
      else if (count >= 4) discountRate = 0.15;

      const discount = subtotal * discountRate;
      const afterDiscount = subtotal - discount;
      const vat = afterDiscount * 0.15;
      const total = afterDiscount + vat;

      // Update display
      selectedCoursesEl.textContent = count;
      subtotalEl.textContent = "R" + subtotal.toFixed(2);
      discountEl.textContent = "-R" + discount.toFixed(2);
      vatEl.textContent = "R" + vat.toFixed(2);
      totalEl.textContent = "R" + total.toFixed(2);
      discountLabel.textContent = `Discount (${discountRate * 100}%):`;
    }

    // Add change event to all checkboxes for real-time updates
    checkboxes.forEach((box) => {
      box.addEventListener("change", updateCosts);
    });

    // Calculate button - also updates costs
    const feesBtn = document.getElementById("fees");
    if (feesBtn) {
      feesBtn.addEventListener("click", function () {
        updateCosts();

        // Visual feedback
        const summary = document.querySelector(".cost-summary");
        if (summary) {
          summary.style.transform = "scale(1.02)";
          setTimeout(() => {
            summary.style.transform = "scale(1)";
          }, 200);
        }
      });
    }

    // Form submission with validation
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("fullname").value.trim();
        const card = document.getElementById("cardnumber").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const id = document.getElementById("id").value.trim();
        const email = document.getElementById("email").value.trim();

        // Check if courses selected FIRST
        const selected = Array.from(checkboxes).filter((box) => box.checked);
        if (selected.length === 0) {
          alert("Please select at least one course before submitting.");
          return;
        }

        // Validate all contact information fields
        if (!name) {
          alert("Please enter your full name.");
          document.getElementById("fullname").focus();
          return;
        }

        if (!card) {
          alert("Please enter your card number.");
          document.getElementById("cardnumber").focus();
          return;
        }

        if (!phone) {
          alert("Please enter your phone number.");
          document.getElementById("phone").focus();
          return;
        }

        if (!id) {
          alert("Please enter your ID number.");
          document.getElementById("id").focus();
          return;
        }

        if (!email) {
          alert("Please enter your email address.");
          document.getElementById("email").focus();
          return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          document.getElementById("email").focus();
          return;
        }

        // Get course names for confirmation
        const courseNames = selected
          .map((box) => {
            const label = box.parentElement.querySelector("span").textContent;
            return label;
          })
          .join("\n");

        // Get total cost
        const total = totalEl.textContent;

        // Success message
        alert(
          `Registration Successful!\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n\n` +
            `Selected Courses:\n${courseNames}\n\n` +
            `Total Cost: ${total}\n\n` +
            `Thank you for registering with Empowering the Nation!`
        );
      });
    }

    // Clear button - resets form and updates costs
    const clearBtn = document.getElementById("clear");
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        setTimeout(() => {
          
           Array.from(checkboxes).forEach((box) => {
            box.checked = false;
          });
          updateCosts();
 
        }, 10);
      });
    }

    // Add smooth transition for cost summary
    const summaryElement = document.querySelector(".cost-summary");
    if (summaryElement) {
      summaryElement.style.transition = "transform 0.2s ease";
    }

    // Initialize on page load
    updateCosts();
  }
  // contact page nav 
   // Form submission with validation
      const contactFormC = document.querySelector(".contact-formC");
      if (contactFormC) {
        contactFormC.addEventListener("Submit", function (e) {
        e.preventDefault();  
  
          // Get form values
          const firstname = document.getElementById("firstName").value.trim();
          console.log(firstname);
          const lastname = document.getElementById("lastName").value.trim();
          const phoneC = document.getElementById("phone").value.trim();
          const subject = document.getElementById("subject").value.trim();
          const emailC = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();
  
          // Validate all contact information fields
          if (!firstname) {
            alert("Please enter your first name.");
            document.getElementById("firstName").focus();
            return;
          }
  
          if (!lastname) {
            alert("Please enter your last name.");
            document.getElementById("lastName").focus();
            return;
          }
  
          if (!phoneC) {
            alert("Please enter your phone number.");
            document.getElementById("phone").focus();
            return;
          }
  
          if (!subject) {
            alert("Please enter your ID number.");
            document.getElementById("subject").focus();
            return;
          }
  
          if (!emailC) {
            alert("Please enter your email address.");
            document.getElementById("email").focus();
            return;
          }
  
          if (!message) {
            alert("Please enter your inquiry.");
            document.getElementById("message").focus();
            return;
          }      
  
          // Email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailC)) {
            alert("Please enter a valid email address.");
            document.getElementById("email").focus();
            return;
          }
          // Success message
          alert(
            `Information Sent Successful!\n\n` +
              `fullname: ${fullName}\n` +
               `lastname: ${lastName}\n`+
              `Email: ${emailC}\n\n` +
              `phone: ${phoneC}\n\n` +
              `subject ${subject}\n` +
              `message: ${message}\n`+
              `Thank you for your inquiry!`
          );
        });
      }
  // End of DOMContentLoaded
});
/*References:(Javascript Only)

- Bro Code, 2023. JavaScript tutorial for beginners 🌐. [video online] Available at:< https://youtube.com/playlist?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&si=NRgiWoF3NDyBUPFm > [Accessed date: 22 October 2025 ]
- Bro Code, 2024. The JavaScript DOM explained in 5 minutes! 🌳. [video online] Available at:< https://youtu.be/NO5kUNxGIu0?si=hz_YqsKj5QQh-G3i > [Accessed date: 22 October 2025 ]
- Geeksforgeeks, 2025. JavaScript Custom Events. [online]. Available at: < https://www.geeksforgeeks.org/javascript/javascript-custom-events/ > [Accessed date: 30 October 2025].
- Programming with Mosh, 2018. JavaScript Course for Beginners – Your First Step to Web Development. [video online] Available at:< https://youtu.be/W6NZfCO5SIk?si=vW21Zn5lbLB6GXtW > [Accessed date: 25 October 2025 ]
- Mozilla Developer Network, 2025. Client-side form validation. [Online]. Available at: <  https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Character class escape: \d, \D, \w, \W, \s, \S. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape#s > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. EventTarget: dispatchEvent() method. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Document: createElement() method. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Document: DOMContentLoaded event. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. encodeURIComponent(). [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent > [Accessed date: 26 October 2025].
- Mozilla Developer Network, 2025. Element: blur event. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Element: classList property. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/API/Element/classList > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Element: scrollIntoView() method. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Event: preventDefault() method. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Element: keydown event. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Node: appendChild() method. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. parentNode. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. RegExp.prototype.global. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. RegExp.prototype.test(). [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Regular expressions. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Web Forms. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Learn/Forms > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Working with objects. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects > [Accessed date: 28 October 2025].
- Mozilla Developer Network, 2025. Window: window property. [Online]. Available at: < https://developer.mozilla.org/en-US/docs/Web/API/Window/window > [Accessed date: 19 October 2025].
- QuickRef.ME, 2025. Javascript Arrays. [online]. Available at: < https://quickref.me/javascript#javascript-arrays > [Accessed date: 25 October 2025]. 
- QuickRef.ME, 2025. Javascript Cheatsheet. [online]. Available at: < https://quickref.me/javascript > [Accessed date: 28 October 2025]. 
- QuickRef.ME, 2025. Javascript Loops. [online]. Available at: < https://quickref.me/javascript#javascript-loops > [Accessed date: 20 October 2025]. 
- SuperSimpleDev, 2024. JavaScript Tutorial Full Course - Beginner to Pro. [video online] Available at:< https://youtu.be/EerdGm-ehJQ?si=ybwXgd9I4pXOsW41 > [Accessed date: 20 October 2025 ]
- The Independent Institute of Education, 2025. Web Development (Introduction) [WEDE5020]. nt. [online via internal VLE] The Independent Institute of Education. Available at:< https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B2D7589E9-374B-43DE-9596-EF35D83EBD02%7D&file=WEDE5020MM.docx&action=default&mobileredirect=true > [Accessed Date: 15 October 2025]. 
- w3Schools, 2025. JavaScript RegExp. [online]. Available at: < https://www.w3schools.com/js/js_regexp.asp > [Accessed date: 28 October 2025].
- w3Schools, 2025.  Window setTimeout(). [online]. Available at: < https://www.w3schools.com/jsref/met_win_settimeout.asp > [Accessed date: 28 October 2025].
- w3Schools, 2025.  JavaScript Array push(). [online]. Available at: < https://www.w3schools.com/js/js_array_methods.asp#mark_push > [Accessed date: 28 October 2025].
- w3Schools, 2025.  JavaScript String replace(). [online]. Available at: < https://www.w3schools.com/jsref/jsref_replace.asp > [Accessed date: 28 October 2025].

*/