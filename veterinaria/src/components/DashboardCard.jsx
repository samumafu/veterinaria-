import React from "react";

const DashboardCard = ({
    title,
    icon,
    data,
    emptyMessage = "No hay datos disponibles",
    renderItem,
    className = "",
}) => {
    return (
    <section
        className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow ${className}`}
    >
        <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>

        <div className="space-y-3">
        {data && data.length > 0 ? (
            data.map((item, index) => (
            <div key={index}>{renderItem(item, index)}</div>
            ))
        ) : (
            <div className="text-center py-8">
            <div className="text-gray-400 text-4xl mb-2">{icon}</div>
            <p className="text-gray-500">{emptyMessage}</p>
            </div>
        )}
        </div>
    </section>
    );
};

export default DashboardCard;
