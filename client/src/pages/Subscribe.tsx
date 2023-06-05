import React from "react";
import Profile from "../components/subscribe/Profile";
import SubscribeCard from "../components/subscribe/SubscribeCard";

export default function Subscribe() {
    return (
        <div className="flex flex-col gap-4">
            <Profile src="https://picsum.photos/200/200" />
            <SubscribeCard subsType="basic" />
            <SubscribeCard subsType="pro" />
        </div>
    );
}
