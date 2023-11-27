function scrollToElement(elementSelector, instance=0){
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching theselector and if the requested instance exists
    if(elements.length > instance){
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () =>{
    scrollToElement('.header');
});

link2.addEventListener('click', () =>{
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () =>{
    scrollToElement('.column');
});


function toggleScrollTopButton() {
    var scrollTopButton = document.querySelector('.scroll-top');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function () {
    toggleScrollTopButton();
};


function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Call openPopup function when the "About Me" button is clicked
document.querySelector('.btn').addEventListener('click', openPopup);

function openLinkedInProfile() {
    window.open('https://www.linkedin.com/in/tomer-karmazin-19182a22a/', '_blank');
}

function openGithubProfile() {
    window.open('https://github.com/Tomer232', '_blank');
}