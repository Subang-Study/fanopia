import React from "react";
import BorderDiv from "../basic/BorderDiv";
import UserImgWithBackground from "../../assets/userImgWithBackground.svg";
import { getDefaultSrc } from "../../utils/errors";

interface IProfileProps {
    src?: string;
}

export default function Profile({ src }: IProfileProps) {
    return (
        <BorderDiv
            outer="w-full aspect-square p-[.125rem] rounded-xl"
            inner="relative overflow-hidden rounded-[.625rem]"
        >
            <img
                className="w-full aspect-auto"
                src={src ? src : UserImgWithBackground}
                alt=""
                onError={e => getDefaultSrc(e, UserImgWithBackground)}
            />
            <div className="absolute bottom-0 w-full p-4 border-t-2 h-1/4 bg-M-white">
                <p>나는 ~~~아티스트입니다</p>
            </div>
        </BorderDiv>
    );
}
