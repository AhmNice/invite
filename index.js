const openBtn = document.querySelector('.openBtn button')
openBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const wrapper = document.querySelector('.wrapper')
    const letter = document.querySelector('.letter')
    wrapper.classList.add('open')
    letter.classList.add('open')
    openBtn.style.display='none'

    // if(letter.classList.contains('open')){
    //     letter.classList.remove('open')
    //     letter.classList.add('close')
    // }
    // alert('hi')
})
function createElement(tag, options={}, children=[]){
    const element = document.createElement(tag)
    Object.keys(options).forEach(key => {
        if(key === 'style'){
            Object.assign(element.style, options[key])
        }else{
            element[key]=options[key];
        }
    });
    children.forEach(child=>{ element.appendChild(child);})
    return element;
}
function loadPage() {
    const overlay = createElement('section', {
        'style': {
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            'width': '100%',
            'height': '100vh',
            'position': 'absolute',
            'background-color': 'rgb(172, 172, 172)',
            'top': '0',
            'left': '0',
            'z-index': '1000'
        }
    }, [
        createElement('div', {
            'style': {
                'width': '300px',
                'background-color': 'white',
                'border-radius': '10px',
                'padding': '20px',
                'box-shadow': '0 0 10px rgba(0,0,0,0.1)'
            }
        }, [
            createElement('h2', {}, [document.createTextNode('Enter Passcode')]),
            createElement('input', {
                'type': 'password',
                'placeholder': 'Passcode',
                'style': {
                    'width': '100%',
                    'padding': '10px',
                    'margin': '10px 0',
                    'border': '1px solid #ccc',
                    'border-radius': '5px'
                }
            }),
            createElement('button', {
                'style': {
                    'width': '100%',
                    'padding': '10px',
                    'background-color': '#007BFF',
                    'color': 'white',
                    'border': 'none',
                    'border-radius': '5px',
                    'cursor': 'pointer'
                },
                'onclick': function() {
                    const passcode = this.previousElementSibling.value;
                    if (passcode === 'maxy') {
                        // triggerConfetti()
                        document.body.removeChild(overlay);
                        document.title ='Message from Awwal'
                    } else {
                        alert('sorry this is not for you🙄');
                    }
                }
            }, [document.createTextNode('Submit')])
        ])
    ]);

    document.body.appendChild(overlay);
}
document.querySelector('.yes').addEventListener('click',(e)=>{
    // e.preventDefault()
    triggerConfetti();
    const letter = document.querySelector('.letter');
    if(letter.classList.contains('open')){
        letter.classList.add('close')
        setTimeout(()=>{
            letter.classList.remove('open')
            wrapper.classList.remove('open')
        },1000)
        setTimeout(()=>{
            openBtn.style.display='block'
            letter.classList.remove('close')
        },2000)
        const wrapper = document.querySelector('.wrapper')

    }
}

)
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
loadPage();
let timeout;

function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        document.location.reload();
    }, 180000); // 3 minutes
}

window.addEventListener('focus', resetTimeout);
window.addEventListener('blur', ()=>{
    document.location.reload();
});

resetTimeout();