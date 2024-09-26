// src/components/BgGlobe.js

export default function BgGlobe() {
    return (
        <section
            className="relative h-auto text-white"
            style={{
                backgroundImage: 'url(/images/bg/bg-05.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg h-screen relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 577 580" fill="none"><path opacity="0.5" d="M288.06 570.918C446.558 570.918 575.06 443.561 575.06 286.439C575.06 129.317 446.558 1.9599 288.06 1.9599C129.563 1.9599 1.06055 129.317 1.06055 286.439C1.06055 443.561 129.563 570.918 288.06 570.918Z" stroke="#333333" stroke-width="2"></path><path d="M56.6645 120.817L54.8087 138.037L40.823 127.82L56.6645 120.817Z" fill="#333333"></path><path d="M519.845 121.012L503.938 114.159L517.826 103.81L519.845 121.012Z" fill="#333333"></path><path d="M275.989 569.182L290.929 560.418L291.049 577.738L275.989 569.182Z" fill="#333333"></path></svg>
                </div>
            </div>
        </section>
    );
}
