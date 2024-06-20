var mem1 = 0;
var mem2 = 0;
var mem3 = 0;
var mem4 = 0;
var mem5 = 0;

function memselector(member) {
    var memlogo = null;

    if (member === mem1) {
        memlogo = document.querySelector('.STATUSlogo.memlogo1');
    } else if (member === mem2) {
        memlogo = document.querySelector('.STATUSlogo.memlogo2');
    } else if (member === mem3) {
        memlogo = document.querySelector('.STATUSlogo.memlogo3');
    } else if (member === mem4) {
        memlogo = document.querySelector('.STATUSlogo.memlogo4');
    } else if (member === mem5) {
        memlogo = document.querySelector('.STATUSlogo.memlogo5');
    }

    return memlogo;
}

function logochange(member, memlogo) {
    if (member === 0) {
        memlogo.style.backgroundImage = "url(./assects/yellowdelay.png)";
    } else if (member === 1) {
        memlogo.style.backgroundImage = "url(./assects/paymentdone.png)";
    } else {
        memlogo.style.backgroundImage = "url(./assects/reddelay.png)";
    }
}

// Update member statuses
mem1 = 1; // pending
mem2 = 0; // pending
mem3 = 0; // pending
mem4 = 1; // done
mem5 = 9; // pending

// Example usage: Update logos based on updated member statuses
updateLogo(mem1, 'memlogo1');
updateLogo(mem2, 'memlogo2');
updateLogo(mem3, 'memlogo3');
updateLogo(mem4, 'memlogo4');
updateLogo(mem5, 'memlogo5');


function updateLogo(memberStatus, memlogoClass) {
    var memlogo = document.querySelector('.STATUSlogo.' + memlogoClass);
    if (memlogo) {
        logochange(memberStatus, memlogo);
    } else {
        console.log("Logo not found for class " + memlogoClass);
    }
}















// Function to calculate current plan start date and end date
function calculatePlanDates() {
    var startDate = new Date(); // Assuming start date is today

    // Calculate end date (start date + 28 days)
    var endDate = new Date(startDate.getTime());
    endDate.setDate(endDate.getDate() + 28);

    return {
        startDate: startDate,
        endDate: endDate
    };
}

// Function to calculate remaining days until a future date
function calculateRemainingDays(targetDate) {
    var today = new Date();
    var timeDiff = targetDate.getTime() - today.getTime();
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days and round up
    return daysDiff;
}

// Function to update HTML elements with calculated dates and countdown
function updateDatesAndCountdown() {
    var planDates = calculatePlanDates();

    // Format dates as strings (e.g., "DD/MM/YYYY")
    var startDateString = formatDate(planDates.startDate);
    var endDateString = formatDate(planDates.endDate);

    // Update HTML elements with formatted dates
    document.getElementById('currentPlanStartDate').textContent = startDateString;
    document.getElementById('currentPlanEndDate').textContent = endDateString;

    // Calculate remaining days until current plan end date
    var daysRemaining = calculateRemainingDays(planDates.endDate);
    document.getElementById('planEndCountdown').textContent = daysRemaining + ' days';
}

// Function to format date as "DD/MM/YYYY"
function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1; // Month is zero-based
    var year = date.getFullYear();

    return day + '/' + month + '/' + year;
}

// Example usage: Call updateDatesAndCountdown to initially update the dates and countdown on the page
updateDatesAndCountdown();

// Optionally, you can set an interval to update the countdown periodically (e.g., every day)
setInterval(updateDatesAndCountdown, 24 * 60 * 60 * 1000); // Update once every 24 hours (86400000 milliseconds)






















document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('paymentdetails').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get the email input value
        var email = document.getElementById('inputbox').value;

        // Optional: Validate email format (basic check)
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Redirect to another page (example: Google.com)
        window.location.href = 'https://www.google.com'; // Replace with your desired URL
    });

    // Function to validate email format (basic check)
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});


