import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"


const Hero = () => {
    const navigate = useNavigate()

    const redirect = () => {
        navigate("/states")
    }
    return (
        <div style={{
                backgroundImage: 'url(/hero.webp)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                height: '80vh'
            }}
            className="flex justify-center items-center"
        >
            <div className="flex flex-col items-center justify-between h-[13rem] w-2/5 text-white">
                <div className="flex flex-col items-center">
                    <span className="text-6xl font-semibold">Nuevos terrenos</span>
                    <span className="text-2xl">Exclusivos de Terra Toscana</span>
                </div>
                <Button
                    onClick={redirect}
                    className="!bg-amber-50 w-60 h-14 !text-black !font-bold"
                >
                    Explorar
                </Button>
            </div>
        </div>
    )
}

export default Hero