import React from "react";
import { Link } from "react-router-dom";

interface ICategoryTagProps {
    className?: string;
    link: string;
    // onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    children: React.ReactNode;
}

export default function CategoryTag({ className, link, children }: ICategoryTagProps) {
    return (
        <li>
            <Link
                className={`snap-start block rounded text-neutral-600 text-center font-bold ${className}`}
                to={link}
            >
                {children}
            </Link>
        </li>
    );
}
