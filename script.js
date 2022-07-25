let display=document.getElementById('displayBox')
let buttons=Array.from(document.getElementsByClassName('button'))
buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'C':
                display.innerText='';
                break;
            case '←':
                if(display.innerText){
                    display.innerText=display.innerText.slice(0,-1)
                    break;
                }
            case '=':
                try{
                    display.innerText=eval(display.innerText)
                    break;    
                }catch{
                    display.innerText='Error!  Press C to continue.'
                    break;
                }
            
            default:
                display.innerText+=e.target.innerText;
                break;
        }
    })
})