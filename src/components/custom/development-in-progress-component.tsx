
const DevelopmentInProgressComponent = () => {
    return (
        <section className="flex flex-col items-center gap-6 p-6 md:p-12 bg-gray-900 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center">
                DEVELOPMENT IN PROGRESS
            </h2>
            <p className="text-center text-gray-300 text-base md:text-lg max-w-lg">
                We are working hard to bring you this feature. Stay tuned for updates!
            </p>

            <div className="flex flex-col items-center justify-center w-full max-w-md h-64 md:h-80 border-2 border-dashed border-white/20 rounded-xl bg-gray-800 shadow-lg">
                <span className="text-white/70 text-xl md:text-2xl font-semibold">
                    Coming Soon
                </span>
                <p className="text-gray-400 text-sm md:text-base mt-2 text-center px-4">
                    This feature is under active development. We appreciate your patience.
                </p>
            </div>

          
        </section>
    );
};

export default DevelopmentInProgressComponent;