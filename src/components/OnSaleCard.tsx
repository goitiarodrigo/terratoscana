import SquareFootIcon from '@mui/icons-material/SquareFoot';

interface IProps {
    data: any
}

const OnSaleCard = ({ data }: IProps) => {
    return (
        <div className='flex flex-col justify-between w-[20rem] h-[27rem] shadow-lg mb-10'>
            <div style={{
                    backgroundImage: 'url(/lote_compra.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
                className="w-full h-3/6"
            />
            <div className='flex flex-col p-5 gap-2 border-b-2 border-slate-400'>
                <span className='text-2xl font-semibold'>Ramón Corona 1234</span>
                <span className='text-[14px]'>Florencio Varela, Bs. As.</span>
                <span className='font-semibold'>USD 10.000</span>
            </div>
            
            <div className='flex flex-col p-5'>
                <SquareFootIcon style={{width: 30, height: 30}}/>
                <span>2.5m2</span>
            </div>
        </div>
    )
}

export default OnSaleCard;