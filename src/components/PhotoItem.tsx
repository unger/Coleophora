import { ReactEventHandler } from "react";
import styled from "@emotion/styled";
import NoPhoto from "./NoPhoto";

interface Props {
    src?: string;
    onLoad?: ReactEventHandler<HTMLImageElement>;
    className?: string;
}

function PhotoItem({ src, onLoad, className }: Props) {
    return src ? <Image src={import.meta.env.BASE_URL + src.substring(1)} className={className} onLoad={onLoad} /> : <NoPhoto />;
}

export default PhotoItem;

const Image = styled.img`
    display: block;

    box-sizing: border-box;
    max-width: 100%;
    height: auto;

    border: 1px solid black;
`;
