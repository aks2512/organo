import './Banner.css';

interface BannerProps {
    enderecoImagem: string;
    textoAlterantivo?: string;
}

export const Banner = ({enderecoImagem, textoAlterantivo}: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={enderecoImagem} alt={textoAlterantivo} />
        </header>
    )
}

export default Banner;