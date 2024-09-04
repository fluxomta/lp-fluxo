"use client"; // Adicionando "use client" no topo para o Next.js

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Player from '@vimeo/player'; // Importando o Vimeo Player SDK
import Icons from './Icons';

const VimeoPlayer = ({
    videoId,
    autoplay = false,
    loop = false,
    muted = false,
    coverImage,
    endCoverImage
}) => {
    const [isVideoPlaying, setVideoPlaying] = useState(false); // Estado para controlar quando o vídeo está tocando
    const [isVideoEnded, setVideoEnded] = useState(false); // Estado para verificar se o vídeo terminou
    const iframeRef = useRef(null);
    const playerRef = useRef(null); // Referência ao player do Vimeo

    useEffect(() => {
        if (iframeRef.current) {
            const player = new Player(iframeRef.current);
            playerRef.current = player; // Armazenar a referência do player para uso posterior

            player.on('play', () => {
                setVideoPlaying(true); // Define o estado de playing quando o vídeo inicia
                setVideoEnded(false);  // Reseta o estado de término se o vídeo for reproduzido novamente
            });

            player.on('ended', handleVideoEnd); // Detecta quando o vídeo termina
        }
    }, [iframeRef]);

    const handleVideoEnd = () => {
        setVideoEnded(true);
        setVideoPlaying(false); // Para de tocar ao final
    };

    const handleCoverClick = () => {
        if (playerRef.current) {
            playerRef.current.play(); // Inicia o vídeo ao clicar na imagem de cover
            setVideoPlaying(true); // Atualiza o estado para exibir o player
        }
    };

    const src = `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&muted=${muted ? 1 : 0}&dnt=1`;

    return (
        <>
            <div className="relative w-full rounded-md shadow-md aspect-video bg-primary-500">
                {/* Mostrar cover inicial se o vídeo não estiver tocando e não tiver terminado */}
                {!isVideoPlaying && !isVideoEnded && coverImage && (
                    <div
                        className="absolute flex items-center justify-center w-full h-full p-2 rounded-lg cursor-pointer bg-primary-500"
                        onClick={handleCoverClick}
                    >
                        <img src={coverImage} alt="Cover" className="object-cover w-full h-full rounded-lg " />
                        <div className='absolute rounded-full bg-secondary-500'><Icons.Play className='text-primary-500 relative w-16 left-0.5' /></div>
                    </div>
                )}

                {/* Player de vídeo */}
                <iframe
                    ref={iframeRef}
                    src={src}
                    className="relative w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Vimeo Player"
                    style={{ display: isVideoPlaying ? 'block' : 'none' }}
                ></iframe>

                {/* Div para texto "Vídeo Finalizado" */}

            </div>
            {isVideoEnded && (
                <div className="flex justify-center mt-4">
                    <p className="text-2xl text-white">Vídeo Finalizado</p>
                </div>
            )}
        </>
    );
};

VimeoPlayer.propTypes = {
    videoId: PropTypes.string.isRequired,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    coverImage: PropTypes.string,
    endCoverImage: PropTypes.string,
};

export default VimeoPlayer;
