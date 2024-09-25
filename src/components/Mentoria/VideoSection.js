// src/components/VideoSection.js


import VimeoPlayer from '@/components/Global/VideoPlayer';

export default function VideoSection() {
    return (
        <section
            className="relative text-white bg-primary-500 h-auto md:min-h-[40vh] flex items-center"

        >
            <div className="w-full max-w-5xl p-1 mx-auto mb-8">
                <VimeoPlayer
                    videoId="1008216601"
                    autoplay={false}
                    loop={false}
                    muted={false}
                    coverImage="https://vumbnail.com/1008216601.jpg"
                    endCoverImage="https://vumbnail.com/1008216601.jpg"
                />
            </div>
        </section>
    );
}
