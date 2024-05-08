import OnSaleCard from "./OnSaleCard"


const OnSales = () => {
    return (
        <div className="flex justify-between w-5/6 pt-16 flex-wrap">
            {
                Array.from(Array(10).keys()).map(el => (
                    <OnSaleCard data={""}/>
                ))
            }
        </div>
    )
}

export default OnSales