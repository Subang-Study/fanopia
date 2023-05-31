import React from "react";

interface ISearchInputProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 *
 * @param className tailwind로 사이즈 사이즈 및 스타일 추가
 * @param children 인풋 안에 버튼
 * @returns
 */
export default function SearchInput({ className, children }: ISearchInputProps) {
    return (
        <div
            className={`rounded-xl focus-within:gradation-color overflow-hidden bg-[#e5e7eb] p-[3px] ${className}`}
        >
            <div className="flex items-center justify-between w-full h-full p-2 rounded-[.562rem] focus-within:border-none bg-M-white">
                <input
                    className="flex-auto bg-transparent focus:outline-none"
                    type="text"
                    placeholder="Search..."
                />
                {children}
            </div>
        </div>
    );
}
