import { getCSS, tickConfig, criarGrafico } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color') // O gráfico de barras será colorido com a cor primária (branco)
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'), // Fundo do gráfico em preto
        paper_bgcolor: getCSS('--bg-color'), // Fundo do papel em preto
        title: {
            text: 'Redes sociais com mais usuários no mundo',
            x: 0,
            font: {
                color: getCSS('--primary-color'), // Título em branco
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes sociais',
                font: {
                    color: getCSS('--secondary-color') // Cor do título do eixo X em cinza
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color') // Cor do título do eixo Y em cinza
                }
            }
        }
    }

    criarGrafico(data, layout)
}

quantidadeUsuariosPorRede()
