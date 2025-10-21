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

  /// Registration Form Validation
  // Get all checkboxes
  const checkboxes = document.querySelectorAll('input[name="course"]');

  // Only run registration code if on registration page
  if (checkboxes.length > 0) {
    // Course prices
    const prices = {
      'child-minding': 750,
      'cooking': 750,
      'garden': 750,
      'first-aid': 1500,
      'sewing': 1500,
      'landscaping': 1500,
      'life-skills': 1500
    };

    // Get summary display elements more specifically
    const summaryRows = document.querySelectorAll('.summary-row');
    const selectedCoursesEl = summaryRows[0].querySelector('.summary-value');
    const subtotalEl = summaryRows[1].querySelector('.summary-value');
    const discountEl = summaryRows[2].querySelector('.summary-value');
    const vatEl = summaryRows[3].querySelector('.summary-value');
    const totalEl = document.querySelector('.summary-row.total .summary-value');
    const discountLabel = summaryRows[2].querySelector('span:first-child');

    // Update cost summary dynamically
    function updateCosts() {
      let count = 0;
      let subtotal = 0;

      // Count selected courses and calculate subtotal
      checkboxes.forEach(box => {
        if (box.checked) {
          count++;
          subtotal += prices[box.value];
        }
      });

      // Calculate discount based on number of courses
      let discountRate = 0;
      if (count === 2) discountRate = 0.05;
      else if (count === 3) discountRate = 0.10;
      else if (count >= 4) discountRate = 0.15;

      const discount = subtotal * discountRate;
      const afterDiscount = subtotal - discount;
      const vat = afterDiscount * 0.15;
      const total = afterDiscount + vat;

      // Update display
      selectedCoursesEl.textContent = count;
      subtotalEl.textContent = 'R' + subtotal.toFixed(2);
      discountEl.textContent = '-R' + discount.toFixed(2);
      vatEl.textContent = 'R' + vat.toFixed(2);
      totalEl.textContent = 'R' + total.toFixed(2);
      discountLabel.textContent = `Discount (${discountRate * 100}%):`;
    }

    // Add change event to all checkboxes for real-time updates
    checkboxes.forEach(box => {
      box.addEventListener('change', updateCosts);
    });

    // Calculate button - also updates costs
    const feesBtn = document.getElementById('fees');
    if (feesBtn) {
      feesBtn.addEventListener('click', function() {
        updateCosts();
        
        // Visual feedback
        const summary = document.querySelector('.cost-summary');
        if (summary) {
          summary.style.transform = 'scale(1.02)';
          setTimeout(() => {
            summary.style.transform = 'scale(1)';
          }, 200);
        }
      });
    }

    // Form submission with validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('fullname').value.trim();
        const card = document.getElementById('cardnumber').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const id = document.getElementById('id').value.trim();
        const email = document.getElementById('email').value.trim();

        // Check if courses selected FIRST
        const selected = Array.from(checkboxes).filter(box => box.checked);
        if (selected.length === 0) {
          alert('Please select at least one course before submitting.');
          return;
        }

        // Validate all contact information fields
        if (!name) {
          alert('Please enter your full name.');
          document.getElementById('fullname').focus();
          return;
        }

        if (!card) {
          alert('Please enter your card number.');
          document.getElementById('cardnumber').focus();
          return;
        }

        if (!phone) {
          alert('Please enter your phone number.');
          document.getElementById('phone').focus();
          return;
        }

        if (!id) {
          alert('Please enter your ID number.');
          document.getElementById('id').focus();
          return;
        }

        if (!email) {
          alert('Please enter your email address.');
          document.getElementById('email').focus();
          return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          document.getElementById('email').focus();
          return;
        }

        // Get course names for confirmation
        const courseNames = selected.map(box => {
          const label = box.parentElement.querySelector('span').textContent;
          return label;
        }).join('\n');

        // Get total cost
        const total = totalEl.textContent;

        // Success message
        alert(`Registration Successful!\n\n` +
              `Name: ${name}\n` +
              `Email: ${email}\n` +
              `Phone: ${phone}\n\n` +
              `Selected Courses:\n${courseNames}\n\n` +
              `Total Cost: ${total}\n\n` +
              `Thank you for registering with Empowering the Nation!`);
      });
    }

    // Clear button - resets form and updates costs
    const clearBtn = document.getElementById('clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        setTimeout(() => {
          updateCosts();
        }, 10);
      });
    }

    // Add smooth transition for cost summary
    const summaryElement = document.querySelector('.cost-summary');
    if (summaryElement) {
      summaryElement.style.transition = 'transform 0.2s ease';
    }

    // Initialize on page load
    updateCosts();
  }

}); // End of DOMContentLoaded