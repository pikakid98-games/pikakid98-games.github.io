document.addEventListener("DOMContentLoaded", function() {
    // Create the footer container
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer-container';
    
    // Create the image element
    const footerImage = document.createElement('img');
    footerImage.id = 'footer-middle-image';
    footerImage.src = '../footer-script/pgfooter.png';
    footerImage.alt = 'Middle Footer';
    
    // Add the onclick event to the image
    footerImage.onclick = goToWebsite;

    // Append the image to the footer container
    footerContainer.appendChild(footerImage);

    // Append the footer container to the body
    document.body.appendChild(footerContainer);
});

function goToWebsite() {
    window.location.href = '..'; // Change this to the desired URL
}
