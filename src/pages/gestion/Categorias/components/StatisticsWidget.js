import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactApexCharts from 'react-apexcharts';
const StatisticsWidget = ({ variant, cardTitle, title, stats, change, dataSince, classname, chartSeries, colors }) => {
    const apexOpts = {
        chart: {
            height: 72,
            width: 72,
            type: 'donut',
        },
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                },
            },
        },
        stroke: {
            colors: ['transparent'],
        },
        dataLabels: {
            enabled: false,
        },
        colors: colors,
        labels: ['Categorías', 'Capacidad'],
    };
    return (_jsx("div", { className: "card", children: _jsx("div", { className: "p-6", children: _jsxs("div", { className: "flex justify-between", children: [_jsxs("div", { className: "grow overflow-hidden", children: [_jsx("h5", { className: "text-base/3 text-gray-400 font-normal mt-0", title: title, children: cardTitle }), _jsx("h3", { className: "text-2xl my-6", children: stats }), _jsxs("p", { className: "text-gray-400 truncate", children: [_jsxs("span", { className: `${variant} rounded-md text-xs px-1.5 py-0.5 text-white me-1`, children: [_jsx("i", { className: "ri-arrow-up-line" }), " ", change] }), "\u00A0", _jsx("span", { children: dataSince })] })] }), _jsx("div", { className: "shrink", children: _jsx(ReactApexCharts, { className: classname, options: apexOpts, series: chartSeries, type: "donut", width: 95, height: 95 }) })] }) }) }));
};
export default StatisticsWidget;
