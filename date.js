function calculateDates(currentDate) {
  let currentMonth = currentDate.getMonth() + 1; // Get current month (1-indexed)
  let currentDay = currentDate.getDate();
  let currentYear = currentDate.getFullYear();

  let startDate, endDate;

  if (currentDay < 15) {
    let startMonth = currentMonth - 3;
    let startYear = currentYear;
    if (startMonth <= 0) {
      startMonth = 12 + startMonth;
      startYear--;
    }
    startDate = new Date(startYear, startMonth - 1, 1);
    endDate = new Date(currentYear, currentMonth - 1, 0);
  } else {
    let startMonth = currentMonth - 2;
    let startYear = currentYear;
    if (startMonth <= 0) {
      startMonth = 12 + startMonth;
      startYear--;
    }
    startDate = new Date(startYear, startMonth - 1, 1);
    endDate = currentDate;
  }

  return {
    startDate: startDate.toLocaleDateString(),
    endDate: endDate.toLocaleDateString(),
  };
}

// Test
let currentDate1 = new Date(2024, 2, 14); // 14th March 2024
let dates1 = calculateDates(currentDate1);
console.log("Start Date:", dates1.startDate);
console.log("End Date:", dates1.endDate);

let currentDate2 = new Date(2024, 2, 16); // 16th March 2024
let dates2 = calculateDates(currentDate2);
console.log("Start Date:", dates2.startDate);
console.log("End Date:", dates2.endDate);
