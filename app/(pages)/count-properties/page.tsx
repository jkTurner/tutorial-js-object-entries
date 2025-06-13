const serverStatus = {
    server1: "online",
    server2: "offline",
    server3: "online",
    server4: "offline",
    server5: "online",
};

export default function CountPropertiesPage() {

    const onlineCount = Object.entries(serverStatus).reduce((count, [, status]) => {
        return status === "online" ? count + 1 : count;
    }, 0)

    const offlineCount = Object.entries(serverStatus).reduce((count, [, status]) => {
        return status === "offline" ? count + 1 : count;
    }, 0)

    return (
        <div className="flex flex-col w-[600px] h-[60vh] mx-auto justify-center items-center gap-4">
            <h1 className="font-semibold text-lg">Count Properties by Category</h1>
            <p>Online server: {onlineCount}</p>
            <p>Offline server: {offlineCount}</p>
        </div>
    )
}