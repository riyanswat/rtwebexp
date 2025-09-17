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
                background: "#0F1115",
            }}
        >

            <Shipments limit={100} />
        </div>
    )
}