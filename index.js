const form = document.getElementById('form')
const submit = document.getElementById('submit');
const list = document.getElementById('list');
const filterA = document.getElementById('all');
const filterM = document.getElementById('mobileFilter');
const filterL = document.getElementById('leptopFilter');
const filterH = document.getElementById('headFilter');
const image = ["images/headphone.jpg","images/laptop.jpg","images/mobile.jpg"]

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.select.value)
    if(event.target.select.value=="headphone"){
        const itemListH = document.createElement('li')
        const itemName = document.createElement('img');
        const del = document.createElement('button')
        del.setAttribute('class','delete');
        del.textContent = "Delete";
        itemName.src = image[0];
        itemListH.appendChild(itemName);
        list.appendChild(itemListH);
        list.appendChild(del)

        del.addEventListener('click',()=>{
            itemListH.remove()
            del.remove()
        })
        

    }else if(event.target.select.value=="laptop"){
        const itemListL = document.createElement('li')
        const itemName = document.createElement('img');
        const del = document.createElement('button')
        del.setAttribute('class','delete');
        del.textContent = "Delete";
        itemName.src = image[1];
        itemListL.appendChild(itemName);
        list.appendChild(itemListL);
        list.appendChild(del)

        del.addEventListener('click',()=>{
            itemListL.remove()
            del.remove()
        })        
    
    }else if(event.target.select.value=="mobile"){
        const itemListM = document.createElement('li')
        const itemName = document.createElement('img');
        const del = document.createElement('button')
        del.setAttribute('class','delete');
        del.textContent = "Delete";
        itemName.src = image[2];        
        itemListM.appendChild(itemName);
        list.appendChild(itemListM);
        list.appendChild(del)

        del.addEventListener('click',()=>{
            itemListM.remove()
            del.remove()
        })
        

    }  

})

console.log(list.innerText)
