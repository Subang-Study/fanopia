import React from "react";
import Button from "../components/basic/Button";

export default function Example() {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <Button btnType="empty-blue" className="w-[15%]" onClick={() => console.log("click")}>
                Button
            </Button>
            <div className="w-full h-[3.5rem] gradation-color rounded-xl"></div>
        </div>
    );
}
