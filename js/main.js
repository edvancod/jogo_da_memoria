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

function mostrar(b){
 b.innerHTML =  blocos[b.id];
 
}
function sortear(){
 return Math.floor(Math.random() * lsEmoticons.length);
 
}