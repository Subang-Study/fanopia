import React from "react";
import ArtistItem from "../components/main/ArtistItem";
import SearchInput from "../components/basic/SearchInput";
import CategoryList from "../components/main/CategoryList";
import { TbSearch } from "react-icons/tb";

export default function MainPage() {
    return (
        <section>
            <SearchInput className="w-[100%]">
                <TbSearch size={"1.5rem"} color="#7F7676"></TbSearch>
            </SearchInput>
            <CategoryList />
            <div className="flex flex-wrap items-center gap-[12.5%] gap-y-2 px-[calc(10%-1rem)]">
                <ArtistItem className="w-1/4" src="https://picsum.photos/80/120" />
                <ArtistItem className="w-1/4" isSubscribed={true} />
                <ArtistItem className="w-1/4" />
            </div>
        </section>
    );
}
