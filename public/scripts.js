document.addEventListener('DOMContentLoaded', function() {
    const claimButton = document.getElementById('claim-coupon');
    const feedbackMessage = document.getElementById('feedback-message');

    claimButton.addEventListener('click', function() {
        fetch('/api/claim-coupon', {
            method: 'POST',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                feedbackMessage.textContent = `Coupon claimed successfully! Your coupon code is: ${data.couponCode}`;
            } else {
                feedbackMessage.textContent = `Unable to claim coupon. ${data.message}`;
            }
        })
        .catch(error => {
            feedbackMessage.textContent = 'An error occurred while claiming the coupon. Please try again later.';
        });
    });
});