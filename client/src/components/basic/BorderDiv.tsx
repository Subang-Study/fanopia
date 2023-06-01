import React from "react";

interface IBorderDivProps {
    outer?: string;
    inner?: string;
    children?: React.ReactNode;
}

/**
 * gradient border가 들어간 div
 * @param outer tailwind: 전체 크기(w, h), padding으로 외곽선 굵기, 곡률
 * @param inner tailwind: 곡률, 높이
 * @returns
 */
export default function BorderDiv({ outer, inner, children }: IBorderDivProps) {
    return (
        <div className={`gradation-color ${outer}`}>
            <div className={`w-full bg-M-white ${inner}`}>{children}</div>
        </div>
    );
}
