import "./styles/style.sass";
import { format, subDays, subMonths, subYears} from "date-fns";

const ageDay = document.querySelector("#ageDay");
const errorDay = document.querySelector(".error_day");
const ageMonth = document.querySelector("#ageMonth");
const arrow = document.querySelector(".arrow");
const day30Regex = /(?=^[1-2][0-9]?$|^30$).*/;
const day31Regex = /(?=^[1-2][0-9]?$|^3[0-1]$).*/;
const errorMonth = document.querySelector(".error_month");
const ageYear = document.querySelector("#ageYear");
const errorYear = document.querySelector(".error_year");
// regexes for dates
const februaryRegularRegex = /(?=^[1-2][0-8]?$).*/;
const februaryLeapRegex = /(?=^[1-2][0-9]?$).*/;
const yearRegex = /(?=^19[3-9][0-9]$|^20[0-1][0-9]$|^202[0-4]$).*/;
const monthRegex = /(?=^0?[1-9]$|^1[0-2]$).*/;

// How long you want the animation to take, in ms
const animationDuration = 2000;

// Calculate how long each 'frame' should last
const frameDuration = 1000 / 60;

// Use that to calculate how many frames to complete the animation
const totalFrames = Math.round(animationDuration / frameDuration);

// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * (2 - t);

// value variables
/* Days in each month
January: 31
February: 28 | 29 if leap year
March: 31
April: 30
May: 31
June: 30
July: 31
August: 31
September: 30
October: 31
November: 30
December: 31 */

/* Leap Years
1932,
1936,
1940,
1944,
1948,
1952,
1956,
1960,
1964,
1968,
1972,
1976,
1980,
1984,
1988,
1992,
1996,
2000,
2004,
2008,
2012,
2016,
2020
*/

window.onload = eraseOnLoad;

class User {
  // Places users entered day, month, and year into an object to be used
  constructor(userDay, userMonth, userYear) {
    this.userDay = userDay;
    this.userMonth = userMonth;
    this.userYear = userYear;
  }

  /* This object method calculates the differences between the current
  date and our user's date */
  calculateAgeDifference() {
    const today = new Date();
    const userDate = new Date(this.userYear, this.userMonth - 1, this.userDay);
    console.log(today)
    
    let todayDay = today.getDate();
    let userDay = userDate.getDate();
    
    let todayMonth = today.getMonth();
    let userMonth = userDate.getMonth();
    
    let todayYear = today.getFullYear();
    let userYear = userDate.getFullYear()
    
    return {todayDay, userDay, todayMonth, userMonth, todayYear, userYear};
  }

  /* This object method takes the object from calculateAgeDifference()
  and changes the values based on what time of the year or month it is */
  calculatePageContent() {
    
    // Holds the values from calculateAgeDifference()
    const differences = this.calculateAgeDifference();
    
    // The difference between the users day of birth, month, and year from current
    let diffDisplayYear = (differences.todayYear - differences.userYear);
    let diffDisplayMonths = (differences.todayMonth - differences.userMonth);
    let diffDisplayDays = (differences.todayDay - differences.userDay);
    
    /* When you subtract the months from each other, you can end up with a negative value...
    if the value is negative or if it equals 0 and the current day of the month is less than the user's day of the
    month, it will lessen the year by one while adding 12 to the month value */
    if (diffDisplayMonths < 0 || diffDisplayMonths === 0 && differences.todayDay < differences.userDay) {
      diffDisplayYear = diffDisplayYear - 1;
      diffDisplayMonths += 12;
    }
    
    /* If the difference in the current day amount and user's day amount is less than 0,
    a new temporary object will be created (with the values of todayYear and todayMonth).
    The date day amount from that object will be added to DiffDisplayDays while the months will be
    lessened (an edge case)*/
    
    if (diffDisplayDays < 0) {
      diffDisplayDays += (1 + 30);
      diffDisplayMonths--;
    }
    
    return {
      diffDisplayDays,
      diffDisplayMonths,
      diffDisplayYear
    }
  }
  
  animatePageContent() {
    const diffDays = document.querySelector('.diff_days');
    const diffMonths = document.querySelector('.diff_months');
    const diffYears = document.querySelector('.diff_years');

    const differences = this.calculatePageContent();
    console.log(differences.diffDisplayDays, differences.diffDisplayMonths, differences.diffDisplayYear)
    /* changes the display on the page by adding attributes to the containers
    holding the values and changing text content */
  
    diffDays.setAttribute('finished', '');
    diffMonths.setAttribute('finished', '');
    diffYears.setAttribute('finished', '');

    if (differences.diffDisplayYear == 0) {
      diffYears.textContent = 0;
    } else {
      animateCountUp(diffYears, differences.diffDisplayYear);
    }

    if (differences.diffDisplayMonths == 0) {
      diffMonths.textContent = 0;
    } else {
      animateCountUp(diffMonths, differences.diffDisplayMonths);
    }

    if (differences.diffDisplayDays == 0) {
      diffDays.textContent = 0;
    } else {
      animateCountUp(diffDays, differences.diffDisplayDays);
    }
  }
}

// helper function for erasing everything on the page when page is loaded
function eraseOnLoad() {
  ageDay.value = "";
  ageMonth.value = "";
  ageYear.value = "";
}

function checkDay() {
  // checks for empty value in day input
  if (ageDay.value === "") {
    ageDay.previousElementSibling.setAttribute("error", "");
    ageDay.setAttribute("error", "");
    errorDay.textContent = "This field is required";
    errorDay.setAttribute("invalid", "");
    // returns true or falsy value for checking later
    return false;
  } else if (ageMonth.value == 2) {
    // different cases for the day value to be checked against
    if (februaryLeapRegex.test(ageDay.value) && ageDay.hasAttribute("error")) {
      ageDay.previousElementSibling.removeAttribute("error");
      ageDay.removeAttribute("error");
      ageDay.setAttribute("success", "");
      errorDay.textContent = "";
      errorDay.removeAttribute("invalid");
      return true;
    } else if (
      februaryLeapRegex.test(ageDay.value) &&
      !ageDay.hasAttribute("error")
    ) {
      ageDay.setAttribute("success", "");
      return true;
    } else if (!februaryLeapRegex.test(ageDay.value)) {
      ageDay.previousElementSibling.setAttribute("error", "");
      ageDay.setAttribute("error", "");
      errorDay.textContent = "Must be a valid day";
      errorDay.setAttribute("invalid", "");
      return false;
    }
  } else if (
    ageMonth.value == 1 ||
    ageMonth.value == 3 ||
    ageMonth.value == 5 ||
    ageMonth.value == 7 ||
    ageMonth.value == 8 ||
    ageMonth.value == 10 ||
    ageMonth.value == 12
  ) {
    if (day31Regex.test(ageDay.value) && ageDay.hasAttribute("error")) {
      ageDay.previousElementSibling.removeAttribute("error");
      ageDay.removeAttribute("error");
      ageDay.setAttribute("success", "");
      errorDay.textContent = "";
      errorDay.removeAttribute("invalid");
      return true;
    } else if (day31Regex.test(ageDay.value) && !ageDay.hasAttribute("error")) {
      ageDay.setAttribute("success", "");
      return true;
    } else if (!day31Regex.test(ageDay.value)) {
      ageDay.previousElementSibling.setAttribute("error", "");
      ageDay.setAttribute("error", "");
      errorDay.textContent = "Must be a valid day";
      errorDay.setAttribute("invalid", "");
      return false;
    }
  } else if (
    ageMonth.value == 4 ||
    ageMonth.value == 6 ||
    ageMonth.value == 9 ||
    ageMonth.value == 11
  ) {
    if (day30Regex.test(ageDay.value) && ageDay.hasAttribute("error")) {
      ageDay.previousElementSibling.removeAttribute("error");
      ageDay.removeAttribute("error");
      ageDay.setAttribute("success", "");
      errorDay.textContent = "";
      errorDay.removeAttribute("invalid");
      return true;
    } else if (day30Regex.test(ageDay.value) && !ageDay.hasAttribute("error")) {
      ageDay.setAttribute("success", "");
      return true;
    } else if (!day30Regex.test(ageDay.value)) {
      ageDay.previousElementSibling.setAttribute("error", "");
      ageDay.setAttribute("error", "");
      errorDay.textContent = "Must be a valid day";
      errorDay.setAttribute("invalid", "");
      return false;
    }
  }
}

function checkMonth() {
  // checks for an empty value in the month input
  if (ageMonth.value === "") {
    ageMonth.previousElementSibling.setAttribute("error", "");
    ageMonth.setAttribute("error", "");
    errorMonth.textContent = "This field is required";
    errorMonth.setAttribute("invalid", "");
    // truthy or falsy values to be checked later
    return false;
  } else if (
    monthRegex.test(ageMonth.value) &&
    !ageMonth.hasAttribute("error")
  ) {
    // different cases to be checked
    ageMonth.setAttribute("success", "");
    return true;
  } else if (
    monthRegex.test(ageMonth.value) &&
    ageMonth.hasAttribute("error")
  ) {
    ageMonth.previousElementSibling.removeAttribute("error");
    ageMonth.removeAttribute("error");
    ageMonth.setAttribute("success", "");
    errorMonth.textContent = "";
    errorMonth.removeAttribute("invalid");
    return true;
  } else if (!monthRegex.test(ageMonth.value)) {
    ageMonth.previousElementSibling.setAttribute("error", "");
    ageMonth.setAttribute("error", "");
    errorMonth.textContent = "Must be a valid month";
    errorMonth.setAttribute("invalid", "");
    return false;
  }
}

function checkYear() {
  // checks for an empty value in the year input
  if (ageYear.value === "") {
    ageYear.previousElementSibling.setAttribute("error", "");
    ageYear.setAttribute("error", "");
    errorYear.textContent = "This field is required";
    errorYear.setAttribute("invalid", "");
    // truthy or falsy values to be checked later
    return false;
  } else if (yearRegex.test(ageYear.value) && !ageYear.hasAttribute("error")) {
    // different cases to be checked
    ageYear.setAttribute("success", "");
    return true;
  } else if (yearRegex.test(ageYear.value) && ageYear.hasAttribute("error")) {
    ageYear.previousElementSibling.removeAttribute("error");
    ageYear.removeAttribute("error");
    ageYear.setAttribute("success", "");
    errorYear.textContent = "";
    errorYear.removeAttribute("invalid");
    return true;
  } else if (!yearRegex.test(ageYear.value)) {
    ageYear.previousElementSibling.setAttribute("error", "");
    ageYear.setAttribute("error", "");
    errorYear.textContent = "Must be in the past";
    errorYear.setAttribute("invalid", "");
    return false;
  }
}

function animateCountUp(el, diff) {
  let frame = 0;
  const countTo = parseInt(diff, 10);
  // Start the animation running 60 times per second
  const counter = setInterval(() => {
    frame++;
    // Calculate our progress as a value between 0 and 1
    // Pass that value to our easing function to get our
    // Progress on a curve
    const progress = easeOutQuad(frame/totalFrames);
    // Use the progress value to calculate the current count
    const currentCount = Math.round(countTo * progress);

    // If the current count has changed, update the element
    if (parseInt(diff, 10) !== currentCount) {
      el.textContent = currentCount;
    }

    // If we've reached our last frame, stop the animation
    if (frame === totalFrames) {
      el.textContent = currentCount;
      clearInterval(counter);
    }
  }, frameDuration);
};

// function for performing the checks on the inputs
function checkForm() {
  let ageDayNumber = Number(ageDay.value);
  let ageMonthNumber = Number(ageMonth.value);
  let ageYearNumber = Number(ageYear.value);

  let dayChecked = checkDay();
  let monthChecked = checkMonth();
  let yearChecked = checkYear();

  if (dayChecked && monthChecked && yearChecked) {
    const user = new User(ageDayNumber, ageMonthNumber, ageYearNumber);
    return user;
  } 
}

// function which contains a try catch for stopping the form if inputs are entered incorrectly
function displayAgeDifference() {
  try {
    if (checkForm()) {
      let user = checkForm();
      user.animatePageContent();
    } else if (!checkForm()) {
      throw new Error('Please enter values in age form');
    }
  } catch(err) {
      console.log(err);
  }
}

arrow.addEventListener("click", displayAgeDifference);
