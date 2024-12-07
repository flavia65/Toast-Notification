let toastBox = document.getElementById('toastBox')
let successMsg = '<i class="fa-solid fa-circle-check" id="successIcon"></i>' + ' Successfully submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark" id="errorIcon"></i>' + ' Please fix the error!'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation" id="invalidIcon"></i>' + ' Invalid input, check again'


function showToast(msg) {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    if(msg.includes('error')) {
        toast.classList.add('error')
    }

    if(msg.includes('invalid')) {
        toast.classList.add('invalid')
    }

    setTimeout(()=> {
        toast.remove()
    }, 6000)
}