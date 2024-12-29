import styled from "@emotion/styled";

interface Props {
    className?: string;
}

function NoPhoto({ className }: Props) {
    return <Placeholder className={className}></Placeholder>;
}

export default NoPhoto;

const Placeholder = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center center;

    box-sizing: border-box;
    aspect-ratio: 4/3;
    width: 100%;
    max-width: 100rem;
    height: auto;

    font-size: 1.5em;
    font-weight: 400;
    color: rgb(0 0 0 / 80%);
    text-align: center;
    vertical-align: middle;

    background-color: #fff;
    border: 1px solid black;

    &::after {
        content: "Ingen bild";
    }
`;
