// Get the announcement Bar
const announcementBar = document.getElementById("announcement-bar");
// Get the dismiss button
const announcementDismiss = document.getElementById("announcement-dismiss");

// On page load the announcement is sticky, so we add scroll padding to the top of the HTML element, so anchor links won't get hidden behind the announcemnet bar.
document.documentElement.style.scrollPaddingTop = "" + (announcementBar.offsetHeight + 48) + "px";

// Onclick change the aria-pressed value to true, to notify assistive tech of the change and change scrollPaddingTop to a default value
function stickyAnnouncementDismiss() {
  announcementDismiss.ariaPressed = "true"; // set to true
  document.documentElement.style.scrollPaddingTop = "3rem"; // remove the scrollPaddingTop allowance for the announcement, by reverting to the default value
}
