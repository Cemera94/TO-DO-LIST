let items = [];
let newItems = document.querySelector('.new_items');

function addItem() {
    let item = document.querySelector('#item').value;

    //U niz dodajemo svaki novi item koji korisnik unese
    items.push(item);

    //Pozivamo funckiju ispod definisanu
    updateTasks();
    
    
}

function updateTasks() {

    //Moramo poništiti vrednost diva newItems jer bi pri dodavanju dodao i prošlu vrednost a mi želimo samo poslednju unetu
    newItems.innerHTML = "";

    //Pravimo petlju, ulazimo u niz items i pravimo za svaki item div, text preuzimamo iz varijable item i dugme i dodajemo to sve divu addedItem.
    items.forEach(function (item, index) {
        
        let addedItem = document.createElement('div');
        let itemText = document.createTextNode(item);
        let removeBtn = document.createElement('button');
        let textBtn = document.createTextNode('X');


        //Pre nego dodamo sve što smo napravili pravimo funckiju koja na klik novog dugmeta briše taj div sa odredjenim indexom koji je zadat kad smo kreirali niz. Pristupamo nizu i brisemo taj odredjeni index
        removeBtn.addEventListener('click', function () {
          items.splice(index, 1);

          //pozivamo ovu celu funckiju da bi update-ovali izgled svaki put kad korisnik klikne na dugme, inače se ne bi prikazala nova lista dok korisnik ne refresh-uje stranicu
          updateTasks();
        })

        removeBtn.appendChild(textBtn);
        addedItem.appendChild(itemText);
        addedItem.appendChild(removeBtn);

        newItems.appendChild(addedItem);

        //Na kraju funkcije vraćamo vrednost input polja na vrednost placeholdera
        document.querySelector('#item').value = "";

    })
}



