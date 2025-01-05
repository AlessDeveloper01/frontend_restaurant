interface StatisticsWidgetProps {
    variant: string;
    cardTitle: string;
    title: string;
    change: string;
    stats: string;
    dataSince: string;
    classname: string;
    chartSeries: number[];
    colors: string[];
}
declare const StatisticsWidget: ({ variant, cardTitle, title, stats, change, dataSince, classname, chartSeries, colors }: StatisticsWidgetProps) => import("react/jsx-runtime").JSX.Element;
export default StatisticsWidget;
