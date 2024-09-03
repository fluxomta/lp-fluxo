// src/app/head.js
export default function Head() {
    return (
        <>
            <title>Home - Meu Site</title>
            <meta name="description" content="Bem-vindo à página inicial do meu site!" />
            <meta name="keywords" content="home, página inicial, meu site" />
            <meta property="og:title" content="Home - Meu Site" />
            <meta property="og:description" content="Bem-vindo à página inicial do meu site!" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.seusite.com/" />
            <meta property="og:image" content="https://www.seusite.com/imagem-home.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Home - Meu Site" />
            <meta name="twitter:description" content="Bem-vindo à página inicial do meu site!" />
            <meta name="twitter:image" content="https://www.seusite.com/imagem-home.jpg" />
        </>
    );
}
