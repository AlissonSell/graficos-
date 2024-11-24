import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function redesFavoritasMinhaEscola() {
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
        plot_bgcolor: getCSS('--bg-color'), // Fundo do gráfico em preto
        paper_bgcolor: getCSS('--bg-color'), // Fundo do papel em preto
        height: 700,
        title: {
            text: 'Redes sociais favoritas dos alunos da Escola',
            x: 0,
            font: {
                color: getCSS('--primary-color'), // Título em branco
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'), // Cor da legenda em branco
                size: 16
            }
        }
    }

    criarGrafico(data, layout)

    incluirTexto(`Entre as redes sociais mais populares, o <span>Instagram</span> se destaca como a <span>favorita</span> dos alunos da escola. Este gráfico revela o quanto o Instagram é apreciado em comparação com outras plataformas, como o <span>Facebook</span> e o <span>Twitter</span>. <br>A forte preferência pelo Instagram pode ser atribuída ao seu formato visual, que é ideal para o público jovem e engajado.`)
}

redesFavoritasMinhaEscola()
