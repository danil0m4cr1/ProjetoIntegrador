seePwd();

function seePwd(){
    let looking = document.querySelectorAll('.fa-regular');
    looking.forEach((icon)=>{
        icon.addEventListener('click', ()=> {
            const input = document.querySelector('input[name=password]')
            input.type = input.type === 'password' ? 'text' : 'password';
            icon.classList.toggle('fa-eye');
        })
    })
}

// $(window).ready(function(){
//     let looking = $('.fa-regular');
//     looking.each(icon => {
//         icon.click(()=>{
//             const input = $('input[name=password');
//             input.type = input.type === 'password' ? 'text' : 'password';
//             icon.toggleClass('fa-eye');
//         })
//     })
// })