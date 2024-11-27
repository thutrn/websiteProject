function setLastUpdatedDateToFooter(lastUpdatedDate) {
    // Get day, month, and year
    let day = lastUpdatedDate.getDate();
    let month = lastUpdatedDate.getMonth() + 1; // Months are zero-based
    const year = lastUpdatedDate.getFullYear();

    // Add leading zero to day and month if needed
    if (day < 10) {
       day = '0' + day;
    }
    if (month < 10) {
       month = '0' + month;
    }

    // Format the date as DD/MM/YYYY
    document.getElementById('footer-info__last-updated-date').innerHTML = day + '/' + month + '/' + year;
}

function pageSetup() {
    const lastUpdatedDate = new Date(2024, 10, 24);
    setLastUpdatedDateToFooter(lastUpdatedDate);

    document.getElementById("back-to-top").addEventListener('click', function (event) {
        event.preventDefault();
        scrollToTop();
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth"});
}

pageSetup();