import React from "react";
import Button from "../components/basic/Button";
import ProfileImg from "../components/basic/ProfileImg";
import CategoryList from "../components/main/CategoryList";
import BorderDiv from "../components/basic/BorderDiv";

export default function Example() {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <Button btnType="fill-gray" className="w-[15%]" onClick={() => console.log("click")}>
                Button
            </Button>
            <div className="w-full h-[3.5rem] gradation-color rounded-xl"></div>
            <ProfileImg className="w-20" />
            <CategoryList />
            <BorderDiv outer="w-20 p-[2px] rounded-xl" inner="rounded-[.625rem] p-2">
                lkjlkj
            </BorderDiv>
        </div>
    );
}
