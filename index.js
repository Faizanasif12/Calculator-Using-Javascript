

    let screen = document.getElementById('screen');
    buttons = document.querySelectorAll('button');
    screenValue = '';

    for(item of buttons){
        item.addEventListener('click', (e)=>{
            buttonText = e.target.innerText;
            console.log('This is Button Text', buttonText);

            if(buttonText =='x'){
                buttonText = '*'
                screenValue += buttonText;
                screen.value = screenValue;
            }
            else if (buttonText == 'c'){
                screenvalue = '';

                screen.value = screenvalue;
            }
            else if (buttonText == '='){
                screen.value = eval(screenValue);
                
            }
            else {
             screenValue += buttonText;
            screen.value = screenValue;
            }
            
        })
    }