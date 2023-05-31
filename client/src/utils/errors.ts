import { SyntheticEvent } from "react";

export const getDefaultSrc = (e: SyntheticEvent<HTMLImageElement, Event>, defaultImg: string) => {
    e.currentTarget.src = defaultImg;
};
