import Hero from "@/components/Hero"
import OnSales from "@/components/OnSales"

const Home = () => {

    return (
        <div className="w-full flex flex-col items-center">
            <Hero />
            <div className="w-5/6 pt-20 flex flex-col items-center">
                <span className="text-3xl font-light">¿Qué estás buscando?</span>
                <div className="flex w-full  pt-12">
                    <div className="relative w-3/6 h-[25rem] !cursor-pointer hover:scale-105 transition-transform">
                        <div
                            style={{
                                backgroundImage: 'url(/lote_compra.jpg)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            className="absolute inset-0 flex justify-center items-center w-full h-full font-bold text-4xl text-white transition-opacity opacity-100 hover:opacity-75"
                        >
                            Comprar
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 transition-opacity hover:opacity-25"></div>
                    </div>
                    <div className="relative w-3/6 h-[25rem] !cursor-pointer hover:scale-105 transition-transform">
                        <div
                            style={{
                                backgroundImage: 'url(/lote_invertir.jpg)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            className="absolute inset-0 flex justify-center items-center w-full h-full font-bold text-4xl text-white transition-opacity opacity-100 hover:opacity-75"
                        >
                            Invertir
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 transition-opacity hover:opacity-25"></div>
                    </div>
                </div>
            </div>
            <OnSales />
        </div>
    )
}

export default Home