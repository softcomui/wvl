//variables

var mainHeader = document.querySelector('#main-header')
var viewAll = document.querySelector('.view-all')
var desktopViewAll = document.querySelector('.desktop-view-all')
var notificationLlists = document.querySelector('.notification-lists')
var desktopNotificationLlist = document.querySelector('.notification-list')
var searchBtn = document.querySelector('.search-btn')
var searchInput = document.querySelector('.search-input')
var closeBtn = document.querySelector('.close-btn')
var compareBtn = document.querySelector('.compare-btn')
var compareDropdown = document.querySelector('.compare-dropdown');
console.log(compareBtn, compareDropdown)
// mobile navigation
function toggleNav() {
    let navEl = document.querySelector('[toggle-nav]'),
        toggler = document.querySelector('[nav-toggler]')
        menuBtn = document.querySelector('#menu-btn');
        menuBtn.addEventListener('click', function (e) {
        if (e.target.matches('[nav-toggler]')) {
            navEl.classList.contains('is-active') ? navEl.classList.remove('is-active') : navEl.classList.add('is-active');
            e.target.classList.contains('is-clicked') ? e.target.classList.remove('is-clicked') : e.target.classList.add('is-clicked');
        } else {
            navEl.classList.remove('is-active');
            toggler.classList.remove('is-clicked');
        }
    }, false);
};
//viewall notification mobile
function viewAllnotification() {
    var notificationLlists = document.querySelector('.notification-lists')
    viewAll.addEventListener('click', function (e) {
       desktopNotificationLlists.classList.toggle('notification-lists-height') 
    })
};
//viewall notification desktop
desktopViewAll.addEventListener('click', function (e) {
    desktopNotificationLlist.classList.toggle('notification-lists-height')
});
//compare btn on dashboard
compareBtn.addEventListener('click', function (e) {
    compareDropdown.classList.toggle('active')
});

//Search btn to search agent
searchBtn.addEventListener('click', function (e) {
    searchInput.classList.add('active')
});
// to close search input
closeBtn.addEventListener('click', function (e) {
    searchInput.classList.remove('active')
});

// using all functions
toggleNav();
viewAllnotification();
