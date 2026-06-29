function mobileMemberMenuToggle() {
    const menu = document.getElementsByClassName('woocommerce-MyAccount-navigation')[0];
    if(menu.classList.contains('active')) {
        menu.classList.remove("active");
        document.getElementsByClassName('mobileMemberMenu')[0].classList.remove('active');
    } else {
        menu.classList.add("active");
        document.getElementsByClassName('mobileMemberMenu')[0].classList.add('active');
    }
}