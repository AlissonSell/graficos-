import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent',
            textfont: { color: '#FFFFFF' }  // Garantindo que o texto dentro do gráfico seja branco
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'), // Preto
        paper_bgcolor: getCSS('--bg-color'), // Preto
        height: 700,
        title: {
            text: 'Redes sociais que os usuários mais gostam',
            x: 0,
            font: {
                color: getCSS('--primary-color'), // Vermelho
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'), // Vermelho
                size: 16
            }
        }
    }

    criarGrafico(data, layout)

    incluirTexto(`Embora o <span>Instagram</span> ocupe a quarta posição em termos de número total de usuários entre as redes sociais, destaca-se como a <span>preferida pelos usuários</span>. Supera até mesmo o <span>Facebook</span>, a plataforma com mais usuários, sendo a terceira opção mais apreciada pelos usuários. <br>Essa preferência evidencia a forte conexão e apreço que as pessoas têm pelo Instagram em comparação com outras redes sociais`)
}

redesFavoritasMundo()
