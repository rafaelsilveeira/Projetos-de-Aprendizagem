function gerar(){
    for(i=0;i<1000000;i++){
        emitirCertificado();
    }
    
    listaLinks = [
        'https://codepen.io/rafaelsilveeira/full/KKdPgOQ', 
        'https://codepen.io/rafaelsilveeira/full/LYpRYJJ', 
        'https://codepen.io/rafaelsilveeira/full/JjYyvEY',
        'https://codepen.io/rafaelsilveeira/full/vYNZwev'
    ];
    atividade = [
        'Calculadora de tarifa para app de mobilidade',
        'Calculadora de IMC',
        'Sorteador de número aleatório',
        'Botões de like - Face e Instagram'
    ];
    
    listalinkscomhtml = "";
    for(cont=0;cont<listaLinks.length;cont++){
        let link = listaLinks[cont];
        let projeto = atividade[cont];
        listalinkscomhtml += `<li><a href = "${link}" target='blank'> ${projeto}</a></li>`;
    }

    document.body.innerHTML = `
        ${emitirCertificado(inputNome.value)}
        <ol>
            ${listalinkscomhtml}
        </ol>
    `;
}


