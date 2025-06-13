const groupedProducts = {
    Clothing: [
        { id: 1, name: "T-shirt" },
        { id: 2, name: "Shoes" },
    ],
    Electronics: [
        { id: 3, name: "Laptop" },
    ],
};

export default function GroupedDataPage() {
    return (
        <div className="flex flex-col w-[600px] h-[60vh] mx-auto justify-center items-center gap-4">
            <h1>Display Grouped Data</h1>
            <div>
                {Object.entries(groupedProducts).map(([category, items]) => (
                    <div key={category}>
                        <h2 className="font-semibold">{category}</h2>
                        <div className="mb-4">
                            {items.map((item) => (
                                <p key={item.id}>{item.name}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}