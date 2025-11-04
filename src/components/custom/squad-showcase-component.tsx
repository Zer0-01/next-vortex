const SquadShowcaseComponent = () => {
    return (
        <div className="grid p-8 gap-8">
            <div className="text-4xl font-bold text-center"> Squad Showcase</div>
            <div className="text-center">Meet the talented players who wear the Vortex Academia jersey</div>
            <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
                <div className="flex flex-col bg-pink-600 text-white p-8 gap-4 rounded-2xl items-center">
                    <div className="text-4xl">67</div>
                    <div>Goal Scored</div>
                </div>
                <div className="flex flex-col bg-pink-600 text-white p-8 gap-4 rounded-2xl items-center">
                    <div className="text-4xl">67</div>
                    <div>Goal Scored</div>
                </div> <div className="flex flex-col bg-pink-600 text-white p-8 gap-4 rounded-2xl items-center">
                    <div className="text-4xl">67</div>
                    <div>Goal Scored</div>
                </div> <div className="flex flex-col bg-pink-600 text-white p-8 gap-4 rounded-2xl items-center">
                    <div className="text-4xl">67</div>
                    <div>Goal Scored</div>
                </div>
            </div>
        </div>
    )
}

export default SquadShowcaseComponent