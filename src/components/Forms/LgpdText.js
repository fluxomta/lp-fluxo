// components/forms/LgpdText.js
import Link from "next/link";
const LgpdText = () => {
    return (
        <p className="m-0 mt-4 text-xs mx-auto text-gray-300 text-center">
            O FluxoMTA trata dados pessoais de acordo com a LGPD (Lei 13.709/18). Leia nossa{' '}
            <Link href="/politica-de-privacidade" className="text-secondary-500">
                política de privacidade
            </Link>.<br /> Os dados aqui fornecidos são protegidos pelos padrões de segurança da LGPD.
        </p>
    );
};

export default LgpdText;
