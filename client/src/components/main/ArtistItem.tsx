import React from "react";
import ProfileImg from "../basic/ProfileImg";
import { useNavigate } from "react-router";

interface IArtistItemProps {
    className: string;
    isSubscribed?: boolean;
    src?: string;
}

/**
 *
 * @param className 컴포넌트 크기(넓이) tailwind 설정
 * @param isSubscribed 구독한지 안한지 Boolean
 * @returns
 */
export default function ArtistItem({ className, isSubscribed, src }: IArtistItemProps) {
    const navigate = useNavigate();
    return (
        <div
            className={`flex flex-col items-center justify-center ${className}`}
            onClick={() => !isSubscribed && navigate("/subscribe/123")}
        >
            <ProfileImg className={`w-full`} isSubscribed={isSubscribed} src={src} />
            <span>Artist</span>
        </div>
    );
}
