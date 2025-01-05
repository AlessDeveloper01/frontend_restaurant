import React from "react";

const Badges = ({ activo }: { activo: boolean }) => {
    return (
        <div>
            <span
                className={`inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded-md text-xs font-medium border ${
                    activo
                        ? "border-success text-success"
                        : "border-danger text-danger"
                }`}>
                {activo ? "Activo" : "Inactivo"}
            </span>
        </div>
    );
};

export default Badges;
