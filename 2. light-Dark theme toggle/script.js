const sunMoonConainer = document.querySelector('.sun-moon-container')

document.querySelector('.theme-toggle-button').addEventListener('click',(e)=>{
    document.body.classList.toggle('dark')
    const currentRotation = parseInt(getComputedStyle(sunMoonConainer).getPropertyValue("--rotation"))
    sunMoonConainer.style.setProperty('--rotation',currentRotation+180)
})