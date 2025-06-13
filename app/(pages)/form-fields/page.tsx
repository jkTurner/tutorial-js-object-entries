const formData = {
    name: "Delta",
    email: "delta@email.com",
    password: "",
}

export default function FormFieldsPage() {
    return (
        <div className="flex flex-col w-[600px] h-[60vh] mx-auto justify-center items-center gap-4">
            <h1 className="font-semibold text-lg">Render Dynamic Form Fields</h1>

            <form className="flex flex-col gap-4">
                {Object.entries(formData).map(([field, data]) => (
                    <div key={field} className="flex gap-4">
                        <label>{field}</label>
                        <input defaultValue={data} name={field} className="bg-slate-500 py-2 px-4" />
                    </div>
                ))}
            </form>
            
        </div>
    )
}