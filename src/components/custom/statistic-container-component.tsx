
interface StatisticContainerComponentProps {
    title: string;
    subtitle: string;
}

const StatisticContainerComponent = ({ title, subtitle }: StatisticContainerComponentProps) => {
    return (
        <div className="flex flex-col  justify-center items-center bg-amber-300 rounded-md px-8 py-2">
            <div className="text-white text-2xl font-bold">
                {title}
            </div>
            <div>
                {subtitle}
            </div>
        </div>
    );
}

export default StatisticContainerComponent