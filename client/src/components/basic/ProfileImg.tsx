import React from "react";
import DefaultImg from "../../assets/userDefaultImg.svg";
import BorderDiv from "./BorderDiv";
import { GradientHeart } from "../../assets/Icons";
import { getDefaultSrc } from "../../utils/errors";

interface IProfileImg {
    className: string;
    isSubscribed?: boolean;
    src?: string | undefined;
}

/**
 *
 * @param className: tailwind로 크기 설정 이미지 넓이 설정
 * @param isSubscribed: 구독한지 안한지 Boolean
 * @param src: image Url
 * @returns
 */

export default function ProfileImg({ className, isSubscribed, src }: IProfileImg) {
    return (
        <BorderDiv
            outer={`${className} rounded-full aspect-square  p-[3px] `}
            inner="relative border-2 rounded-full border-M-white bg-transparent"
        >
            <img
                className={`w-full rounded-full aspect-square user-image`}
                src={src ? src : DefaultImg}
                alt="userProfile"
                onError={e => getDefaultSrc(e, DefaultImg)}
            />
            {!!isSubscribed && (
                <div className="rounded-full cover-shade">
                    <GradientHeart className="w-1/2" />
                </div>
            )}
        </BorderDiv>
    );
}
