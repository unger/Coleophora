import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "../theme";

import { useTaxons } from "../hooks";
import TaxonGroupedPhoto from "./TaxonGroupedPhoto";

function SimilarTaxonList({ similar }: { similar: SimilarTaxon[] }) {
  const [open, setOpen] = useState(false);
  const { isPending, error, data, isFetching } = useTaxons(
    undefined,
    (item) => similar.find((x) => x.latin === item.latin) !== undefined
  );

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <SimilarWrapper>
      <Headline
        onClick={() => {
          setOpen(!open);
        }}
      >
        Liknande arter
      </Headline>
      <SimilarContent open={open}>
        {data.map((item: Taxon) => {
          return (
            <TaxonGroupedPhoto
              taxon={item}
              key={item.artId}
              stage={"imago"}
            ></TaxonGroupedPhoto>
          );
        })}
      </SimilarContent>
      {isFetching && <div>Updating...</div>}
    </SimilarWrapper>
  );
}

export default SimilarTaxonList;

const SimilarWrapper = styled.div`
  font-size: 80%;

  ${mq["sm"]} {
    max-width: 150px;
  }
`;

const Headline = styled.h2`
  /*
  background-color: black;
  color: white;
  writing-mode: vertical-lr;
  padding: 5px;
  */

  ${mq["sm"]} {
    /*
    writing-mode: horizontal-tb;
    background-color: transparent;
    color: black;
    */
  }
`;

const SimilarContent = styled.div<{ open: boolean }>`
  /* display: none; */
  flex-direction: column;

  ${(props) =>
    props.open &&
    css`
      /*
    display: flex;   
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0 0 0 / 50%);
    */
    `}

  ${mq["sm"]} {
    /* display: flex;
    max-width: 150px; */
  }
`;
