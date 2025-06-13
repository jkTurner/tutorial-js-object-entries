const user = { name: "Delta", age: 25, location: "Jupiter" };

export default function TipsPage() {
    return (
        <div className="flex flex-col w-[600px] h-[60vh] items-center justify-center mx-auto gap-4">
            <h1>Simple Object.entries()</h1>

            {Object.entries(user).map(([key, value]) => (
                <div key={key}>
                    {key}: {value}
                </div>
            ))}

            {/* Turn objectg into array first and map normally (only works if the object is flat) */}
            {[user].map((user) => (
                <div key={user.name}>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                    <p>Location: {user.location}</p>
                </div>
            ))}
            
        </div>
    )
}