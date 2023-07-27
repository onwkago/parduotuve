
const checkTermsBox = () => {
    const checkbox = document.getElementById("confirm_terms");
    const checkoutButton = document.getElementById("checkout");

    if (!checkbox.checked) {
        checkoutButton.setAttribute("disabled",'');
    } else {
        checkoutButton.removeAttribute("disabled",'');
    }

}
const isDisabled = () => document.getElementById("confirm_terms").checked;
