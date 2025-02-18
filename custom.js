document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.landing-content p');
    
    
    if (textElement) {
        
        const text = textElement.textContent;
        textElement.textContent = ''; // Clear the text initially
        // Calculate the height based on the full text
        textElement.textContent = text; 
        const height = textElement.offsetHeight; 
        textElement.style.height = `${height}px`; // Set the fixed height
        textElement.classList.add('fixed-height'); // Make visible and retain height
    
        textElement.textContent = ''; // Clear again to start the animation
    
        let index = 0;
        const speed = 10; // Speed in milliseconds per character
    
        function typeWriter() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }
    
        typeWriter();
    }
});





    // // change jquery to js
    // document.addEventListener("DOMContentLoaded", function() {
    //     const whatsappMain = document.querySelector(".whatsapp-main");
    //     const whatsappOptions = document.querySelector(".whatsapp-options");

    //     whatsappMain.addEventListener("click", function() {
    //         whatsappOptions.style.display = whatsappOptions.style.display === "none" ? "flex" : "none";
            
    //     });
    // });