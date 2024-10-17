const form=document.getElementById('main-form');
const fname=document.getElementById('fname');
const city=document.getElementById('city');
const mobile=document.getElementById('mobile');
const age=document.getElementById('age');
const photo = document.getElementById('photo');

form.addEventListener('submit',(e) => {
    const name=fname.value.toLowerCase();
    let check=0;
    for(let i of name)
    {
        if(i >= 'a' && i <= 'z' ){
            check++;
        }
        if(i == ' '){
            check++;
        }
    }
    if(check != name.length){
        e.preventDefault();
        alert('Enter Valid Name Characters from (a-z)')
        
    }

    const cityname=city.value.toLowerCase();
    check=0;
    for(let i of cityname)
    {
        if(i >= 'a' && i <= 'z' ){
            check++;
        }
        if(i == ' '){
            check++;
        }
    }
    if(check != cityname.length){
        e.preventDefault();
        alert('Enter Valid City Characters from (a-z)')
    }

    const num=mobile.value;
    check=0;
    for(let i of num)
    {
        if(i >= '0' && i <= '9' ){
            check++;
        }
    }
    if(check != num.length || num.length != 10){
        e.preventDefault();
        alert('Enter Valid Number')
    }

    const a=age.value;
    check=0;
    for(let i of a)
    {
        if(i >= '0' && i <= '9' ){
            check++;
        }
    }
    if(check != a.length){
        e.preventDefault();
        alert('Enter Valid Age')
    }
})
