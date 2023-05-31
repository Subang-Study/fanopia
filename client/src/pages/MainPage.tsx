import React from "react";
import ArtistItem from "../components/main/ArtistItem";
import SearchInput from "../components/basic/SearchInput";
import CategoryList from "../components/main/CategoryList";

export default function MainPage() {
    return (
        <section>
            <div className="p-2">
                <SearchInput className="w-[100%]" />
                <CategoryList />
            </div>
            <div className="flex flex-wrap items-center gap-[12.5%] gap-y-2 px-[10%]">
                <ArtistItem className="w-1/4" src="https://picsum.photos/80/80" />
                <ArtistItem className="w-1/4" isSubscribed={true} />
                <ArtistItem className="w-1/4" />
                <ArtistItem className="w-1/4" />
            </div>
        </section>
    );
}
