export default function PriceList(props) {
    const pl = props.priceList || []
    return (
        <div>

            {pl.map(price => (
                <div key={price.id}>
                    <div>
                        {price.name}
                    </div>
                    <div>
                        {price.price}
                    </div>
                </div>
            ))}
        </div>
    )
}