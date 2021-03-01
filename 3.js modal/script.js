// const openModalButton = document.querySelectorAll('[data-modal-target]')   
// const closeModalButton = document.querySelectorAll('[data-close-button]')   
// const ovelay = document.getElementById('overlay')   

// openModalButton.forEach(button=>{
//     button.addEventListener('click',()=>{
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
//     })
// })
// overlay.addEventListener('click',()=>{
//     const modal = document.querySelector('.modal.active')
//     modal.forEach(modal=>{
//         closeModal(modal)
//     })

// })

// closeModalButton.forEach(button=>{
//     button.addEventListener('click',()=>{
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
// })

// function openModal(modal){
//     if(modal==null) return;
//     modal.classList.add('active')
//     overlay.classList.add('active')
// }


// function closeModal(modal){
//     if(modal==null) return;
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
// }

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(b => {
  b.addEventListener('click', () => {
    // const modal = document.querySelector(b.dataset.modalTarget)
    const modal = document.querySelector('.modal')
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(()=> {
      closeModal(modal)
    })
  })
  
  closeModalButtons.forEach(b => {
    b.addEventListener('click', () => {
      const modal = b.closest('.modal')//find out its parent roots if it not find out it returns null if find return that item
      closeModal(modal)
    })
  })
  

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }

  
 
