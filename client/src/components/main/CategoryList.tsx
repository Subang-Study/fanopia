import React from "react";
import CategoryTag from "../basic/CategoryTag";

const categoryList = ["전체", "가수", "배우", "모델", "이플루언서", "크리에이터"];

export default function CategoryList() {
    return (
        <div className="w-full p-2 overflow-auto scroll-hide snap-x snap-mandatory">
            <ul className="flex gap-4">
                {categoryList.map((ele, idx) => (
                    <CategoryTag link="/main" key={idx}>
                        {ele}
                    </CategoryTag>
                ))}
            </ul>
        </div>
    );
}
