import './Banner.css'

function Banner() {
    // JSX -> parece html mas não é! o react interpreta, "traduz" para html e faz o .append() no DOM
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
    )
}

export default Banner