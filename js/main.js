let lsEmoticons = ['😊','😁','😍','🤐','😥','😴','😎','🤔' ]


// replicando os itens na tebela
const tamanho = lsEmoticons.length;
for (let i = 0; i < tamanho; i++) {
    lsEmoticons.push(lsEmoticons[i])
    
}

// para cada bloco incluir o evento de click
let blocos = {

};

let isBloco = document.getElementsByClassName('bloco');
let id = 0;

for (const b of isBloco) {
    b.addEventListener('click', () => {
        mostrar(b)
    });
    icon = lsEmoticons.splice(sortear(),1); // aramazenar o icon
    blocos[`id${id}`] = icon;
    b.id = `id${id}`;
    id++;
}

//variavel global
let aberto = ['', '']

function mostrar(b){

if(b.innerHTML != '') return;

if(aberto[0] != '' && aberto[1] != "") testar();

  if(aberto[0] == ''){
    aberto[0] = b;
    b.innerHTML = blocos[b.id];
    return;

   }
  if(aberto[1] == ''){
    aberto[1] = b;
    b.innerHTML = blocos[b.id];
    return;
   }

}
function testar(){

    if(aberto[0].innerHTML !=  aberto[1].innerHTML){
        aberto[0].innerHTML = "";
        aberto[1].innerHTML = "";
     } 
     aberto[0] = '';
     aberto[1] = '';
}
function sortear(){
 return Math.floor(Math.random() * lsEmoticons.length);
 
}