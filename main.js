const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];

/* Looping through images */
for(const pic in imgArray)
{
    //console.log(imgArray[pic]);
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArray[pic]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => 
    {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', changeOverlay);

function changeOverlay()
{
    if(btn.className === 'dark')
    {
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else if(btn.className === 'light')
    {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}