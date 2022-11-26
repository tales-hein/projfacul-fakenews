
// Ranking primeiro acesso
const ranking = document.querySelector(".ranking");
function generateElementString(htmlString) {
    const template = document.createElement("template");
    template.innerHTML = htmlString.trim();

    return template.content.firstElementChild;
}
const listRankingGeral = generateElementString(` 
    <div>
        <div class="item">
            <a href="#">1 Primeira notícia</a>
            <p>120 buscas</p>
        </div>
        <div class="item">
            <a href="#">2 Segunda notícia</a>
            <p>89 buscas</p>
        </div>
        <div class="item">
            <a href="#">3 Terceira notícia</a>
            <p>80 buscas</p>
        </div>
        <div class="item">
            <a href="#">4 Quarta notícia</a>
            <p>67 buscas</p>
        </div>
        <div class="item">
            <a href="#">5 Quinta notícia</a>
            <p>25 buscas</p>
        </div>
        <div class="item">
            <a href="#">6 Sexta notícia</a>
            <p>19 buscas</p>
        </div>
        <div class="item">
            <a href="#">7 Sétima notícia</a>
            <p>14 buscas</p>
        </div>
        <div class="item">
            <a href="#">8 Oitava notícia</a>
            <p>13 buscas</p>
        </div>
        <div class="item">
            <a href="#">9 Nona notícia</a>
            <p>10 buscas</p>
        </div>
        <div class="item">
            <a href="#">10 Décima notícia</a>
            <p>7 buscas</p>
        </div>
    </div>
`);
const listRankingUser = generateElementString(`
    <div>
        <div class="item">
            <a href="#">1 Primeira notícia</a>
            <p>Data: 06/11 15:29</p>
        </div>
        <div class="item">
            <a href="#">2 Segunda notícia</a>
            <p>Data: 16/10 12:13</p>
        </div>
        <div class="item">
            <a href="#">3 Terceira notícia</a>
            <p>Data: 13/10 13:25</p>
        </div>
        <div class="item">
            <a href="#">4 Quarta notícia</a>
            <p>Data: 02/10 20:08</p>
        </div>
        <div class="item">
            <a href="#">5 Quinta notícia</a>
            <p>Data: 28/09 09:10</p>
        </div>
        <div class="item">
            <a href="#">6 Sexta notícia</a>
            <p>Data: 28/09 09:08</p>
        </div>
    </div>

`);
ranking.appendChild(listRankingGeral);

// Função que carrega ranking mais buscadas

function rankGeral() {
    const btnRankGeral = document.querySelector("#rankGeral");
    const btnRankUser = document.querySelector("#rankUser");
    btnRankGeral.className = "btn-clicado";
    btnRankUser.className = "btn-nao-clicado";
    ranking.innerHTML = '';
    ranking.appendChild(listRankingGeral);
}

function rankUser() {
    const btnRankGeral = document.querySelector("#rankGeral");
    const btnRankUser = document.querySelector("#rankUser");
    btnRankUser.className = "btn-clicado";
    btnRankGeral.className = "btn-nao-clicado"; 
    ranking.innerHTML = '';
    ranking.appendChild(listRankingUser);
}