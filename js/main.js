let lsEmoticons = ['😊','😁','😍','🤐','😥','😴','😎','🤔' ]


// replicando os itens na tebela
const tamanho = lsEmoticons.length;
for (let i = 0; i < tamanho; i++) {
    lsEmoticons.push(lsEmoticons[i])
    
}

// para cada bloco incluir o evento de click
let isBloco = document.getElementsByClassName('bloco');
for (const b of isBloco) {
    b.addEventListener('click', () => {
        mostrar(b)
    });
    
}

function mostrar(b){
 b.innerHTML = '😎'
}