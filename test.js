const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]



function contarOvejas(ovejas) {
  // aquí tu magia
  const ovejasContadas=[];
  ovejas.forEach(function(oveja){
    if (oveja.color==="rojo") {
      if( oveja.name.toLocaleLowerCase().indexOf("a") != -1){
        //console.log(oveja.name.toLocaleLowerCase());
        if(oveja.name.toLocaleLowerCase().indexOf("n") != -1){
          //ovejasContadas.push(oveja);
          console.log(oveja.name.toLocaleLowerCase());
        }

      }
    }

  });
  return ovejasContadas;
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
