//import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { mq } from "../theme";

import { useTaxon } from "../hooks";
import PhotoList from "../components/PhotoList";
//import SimilarTaxonList from "../components/SimilarTaxonList";

function TaxonDetail() {
    const { slug } = useParams();

    //const [open, setOpen] = useState(false);
    const { isPending, error, data: taxon, isFetching } = useTaxon(slug);

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <>
            <header>
                <h1>
                    {taxon.name}{" "}
                    <small>
                        <em>{taxon.latin}</em> {taxon.auctor}
                    </small>
                </h1>
            </header>
            <Section>
                <Article>
                    <PhotoList headline="Imago" slug={taxon.slug} stage={"imago"}></PhotoList>
                    <PhotoList headline="Larv" slug={taxon.slug} stage={"case"}></PhotoList>

                    {isFetching && <div>Updating...</div>}
                </Article>
                {/* 
        <Aside open={open}>
          <OpenButton
            onClick={() => {
              setOpen(true);
            }}
          ></OpenButton>
          <CloseButton
            onClick={() => {
              setOpen(false);
            }}
          ></CloseButton>
          {taxon.similar && (
            <SimilarTaxonList similar={taxon.similar}></SimilarTaxonList>
          )}
        </Aside>
        */}
            </Section>
        </>
    );
}

export default TaxonDetail;

const Section = styled.section({
    display: "flex",
    gap: "2rem",
});

const Article = styled.article`
    gap: 1rem;
    width: 100vw;

    ${mq["sm"]} {
        /* width: 80vw; */
    }
`;
/*
const Aside = styled.aside<{ open: boolean }>`
    position: fixed;
    top: 0;
    left: ${(props) => (props.open ? "0" : "100vw")};

    display: flex;

    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px;

    color: white;

    background: rgba(0 0 0 80%);

    ${mq["sm"]} {
        position: static;
        left: 0;

        display: flex;

        width: 20vw;

        color: black;

        background: transparent;
    }
`;

const Button = styled.div<{ disabled?: boolean }>`
    cursor: ${(props) => (props.disabled ? "auto" : "pointer")};

    display: flex;
    place-items: center center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    margin-bottom: 10px;

    font-family: monospace;
    font-size: 1.4rem;
    font-weight: bold;
    color: white;

    opacity: ${(props) => (props.disabled ? "0" : "1")};
    background-color: black;
    border: 1px solid white;
`;

const CloseButton = styled(Button)`
    &::after {
        content: "X";
    }
`;

const OpenButton = styled(Button)`
    position: absolute;
    right: 0;

    &::after {
        content: "O";
    }
`;
*/
