const user = { name: "Delta", age: 25, location: "Jupiter" };

export default function SimplePage() {

    const test = Object.entries(user);
    console.log(test);

    return (
        <div className="flex flex-col w-[600px] h-[60vh] items-center justify-center mx-auto gap-4">
            <h1>Display Simple Object Info()</h1>

            {Object.entries(user).map(([key, value]) => (
                <div key={key}>
                    {key}: {value}
                </div>
            ))}

        </div>
    )
}