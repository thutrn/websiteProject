
function setPageCounters() {
    document.addEventListener('DOMContentLoaded', function() {
        // Set the event date
        const wildlightsEventDate = new Date('2024-12-13T16:00:00').getTime();
        const blazersEventDate = new Date('2024-12-06T19:00:00').getTime();

        const wildlightsCounterElement = document.getElementById('wildlights-countdown');
        const blazersCounterElement = document.getElementById('blazers-countdown');

        countdown(wildlightsCounterElement, wildlightsEventDate);
        countdown(blazersCounterElement, blazersEventDate);
    });
}

function countdown(parentCountdownContainer, eventDate) {
        // Update the countdown every second
        const countdown = setInterval(function() {
            const now = new Date().getTime();
            const distance = eventDate - now;

            // Time calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result
            parentCountdownContainer.getElementsByClassName('days')[0].innerText = days;
            parentCountdownContainer.getElementsByClassName('hours')[0].innerText = hours;
            parentCountdownContainer.getElementsByClassName('minutes')[0].innerText = minutes;
            parentCountdownContainer.getElementsByClassName('seconds')[0].innerText = seconds;

            // If the countdown is over
            if (distance < 0) {
                clearInterval(countdown);
                parentCountdownContainer.innerHTML = 'Event Started!';
            }
        }, 1000);
}

setPageCounters();