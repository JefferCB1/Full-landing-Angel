const Footer = () => {
    return (
        <footer className="w-full py-8 border-t border-white/10 bg-black relative z-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
                <p>© 2026 IA Masters. Todos los derechos reservados.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-400 transition-colors">Aviso Legal</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Privacidad</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Términos</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
