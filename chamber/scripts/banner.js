
document.addEventListener("DOMContentLoaded", function() {
    const bannerContainer = document.getElementById("bannerContainer");
    const closeBannerButton = document.getElementById("closeBannerButton");

    // Check if today is Monday, Tuesday, or Wednesday
    const today = new Date();
    const dayOfWeek = today.getDay();

    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        bannerContainer.style.display = "block";
    }

    // Close the banner when the close button is clicked
    closeBannerButton.addEventListener("click", function() {
        bannerContainer.style.display = "none";
    });
});