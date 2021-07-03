
let teclados = ['Reddragon', 'Noganet', 'Soul', 'Xtrike-me', 'Nisuta',  'Genius'];

let marcaMala = 'Genius';
function filtrarArray(teclados, marcaMala) { 
    
        return teclados.filter(function(filtrar){ 
            return filtrar != marcaMala; 
            }); 
    }
console.log(filtrarArray(teclados, marcaMala));

