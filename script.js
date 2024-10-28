const button = document.getElementById('button'); 
const slider = document.createElement('div');
const message=document.querySelector('#message');
slider.setAttribute('id','slide');//adding id to slider 
const mode=document.querySelector('.modeMessage');

const para=document.createElement('p');
mode.appendChild(para);



slider.style.width = '50%'; // Adjust slider width to half the button width for visible sliding effect
slider.style.height = '100%';
slider.style.backgroundColor = '#fff';
slider.style.position = 'absolute';
slider.style.transition = 'transform 0.5s ease-in-out';
slider.style.transform = 'translateX(100%)'; // Start position by default


button.style.position = 'relative'; // Ensure button is positioned for the slider to move within it,important
button.appendChild(slider);


window.addEventListener("load", function() {
    document.body.style.backgroundColor='#F9FEFF';
    message.style.color = 'black';
    slider.style.boxShadow ='0 0 50px white';
    para.innerHTML="YOU HAVE SELECTED LIGHT MODE!!!";
});

let isToggled = true;
button.addEventListener("click", function() {

    if (isToggled) {
        slider.style.transform = 'translateX(0)'; // Slide back to start
        slider.style.boxShadow ='none';
        document.body.style.backgroundColor='black';
        message.style.color ='white'
        para.innerHTML="YOU HAVE SELECTED DARK MODE!!!";
        para.style.color='white';

    } else {
        slider.style.transform = 'translateX(100%)'; // Slide to end
        slider.style.boxShadow ='0 0 50px white';
        document.body.style.backgroundColor='#F9FEFF';
        message.style.color ='black';
        para.innerHTML="YOU HAVE SELECTED LIGHT MODE!!!";
        para.style.color='black';
    }
   isToggled = !isToggled; // Toggle state,otherwise toggle will remain true throughout the process
});
