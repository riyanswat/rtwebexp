import React from "react";
import Shipments from "@/components/Shipments";

export default function ShipmentsPage() {
    return (
        <div
            style={{
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#121723",
            }}
        >

            <Shipments limit={6} />
        </div>
    )
}