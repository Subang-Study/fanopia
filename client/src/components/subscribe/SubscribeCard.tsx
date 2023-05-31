import React from "react";
import Button from "../basic/Button";

interface ISubscribeCardProps {
    subsType: "basic" | "pro";
}
export default function SubscribeCard({ subsType }: ISubscribeCardProps) {
    return (
        <div className="gradation-color p-[2px] rounded-xl">
            <div className="flex flex-col justify-center w-full p-2 rounded-[.625rem] bg-M-white">
                <div className="flex flex-row justify-between">
                    <span className="text-lg font-bold">아티스트명</span>
                    <span className="text-lg font-bold text-gray-600">
                        {subsType === "basic" ? "4,500원 / 월" : "9,900원 / 월"}
                    </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col text-gray-600">
                        <span>대화 참여</span>
                        {subsType === "pro" && <span>1 대 1 대화 가능 티켓</span>}
                    </div>
                    <Button
                        btnType="empty-pink"
                        onClick={() => {}}
                        className="px-4 py-0 w-fit h-fit"
                    >
                        구매
                    </Button>
                </div>
            </div>
        </div>
    );
}
