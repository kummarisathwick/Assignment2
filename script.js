function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}