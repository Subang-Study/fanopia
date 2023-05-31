import React from "react";
import Profile from "../components/subscribe/Profile";
import SubscribeCard from "../components/subscribe/SubscribeCard";

export default function Subscribe() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <Profile />
            <SubscribeCard subsType="basic" />
            <SubscribeCard subsType="pro" />
        </div>
    );
}
