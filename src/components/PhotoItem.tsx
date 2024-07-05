import { ReactEventHandler } from "react";
//import styled from "@emotion/styled";
import NoPhoto from "./NoPhoto";
import * as stylex from "@stylexjs/stylex";

interface Props {
    src?: string;
    onLoad?: ReactEventHandler<HTMLImageElement>;
    onClick?: ReactEventHandler<HTMLImageElement>;
}

function PhotoItem({ src, onLoad, onClick }: Props) {
    return src ? <img {...stylex.props(styles.root)} src={import.meta.env.BASE_URL + src.substring(1)} onLoad={onLoad} onClick={onClick} /> : <NoPhoto />;
    //return src ? <Image src={import.meta.env.BASE_URL + src.substring(1)} className={className} onLoad={onLoad} /> : <NoPhoto />;
}

export default PhotoItem;

const styles = stylex.create({
    root: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#000",
        display: "block",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: "auto",
    },
});
