function setLastUpdatedDateToFooter(lastUpdatedDate) {
    // Get day, month, and year
    var day = lastUpdatedDate.getDate();
    var month = lastUpdatedDate.getMonth() + 1; // Months are zero-based
    var year = lastUpdatedDate.getFullYear();

    // Add leading zero to day and month if needed
    if (day < 10) {
       day = '0' + day;
    }
    if (month < 10) {
       month = '0' + month;
    }

    // Format the date as DD/MM/YYYY
    var formattedDate = day + '/' + month + '/' + year;

    document.getElementById('footer-info__last-updated-date').innerHTML = formattedDate;
}

function pageSetup() {
    var lastUpdatedDate = new Date(2024, 10, 24);
    setLastUpdatedDateToFooter(lastUpdatedDate);
}

pageSetup();