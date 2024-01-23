import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";

import PhotoItem from "./PhotoItem";
import PhotoDescription from "./PhotoDescription";

interface Props {
  data: TaxonPhoto[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function PhotoList({
  data,
  selectedIndex,
  setSelectedIndex,
}: Props) {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.classList.add("fullscreen-modal");

    return () => {
      rootElement.classList.remove("fullscreen-modal");
    };
  }, [selectedIndex]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        nextPhoto();
      }
      if (e.key === "ArrowLeft") {
        prevPhoto();
      }
      if (e.key === "ArrowUp") {
        transformComponentRef.current?.zoomIn();
      }
      if (e.key === "ArrowDown") {
        transformComponentRef.current?.zoomOut();
      }
      if (e.key === "Escape") {
        closePhoto();
      }
    }

    window.addEventListener("keydown", handleKeyDown, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, selectedIndex, closePhoto, prevPhoto, nextPhoto]);

  function nextPhoto() {
    if (selectedIndex + 1 < data.length) {
      setSelectedIndex(selectedIndex + 1);
    }
  }

  function prevPhoto() {
    if (selectedIndex - 1 >= 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }

  function closePhoto() {
    setSelectedIndex(-1);
  }

  function hasPreviousPhoto() {
    return selectedIndex - 1 >= 0;
  }

  function hasNextPhoto() {
    return selectedIndex + 1 < data.length;
  }

  function firstLoad() {
    if (isFirstLoad) {
      transformComponentRef.current?.centerView();
      setIsFirstLoad(false);
    }
  }

  return (
    <>
      {createPortal(
        <Overlay>
          <Controls>
            <ZoomControls>
              <ZoomInButton
                onClick={() => transformComponentRef.current?.zoomIn()}
              ></ZoomInButton>
              <ZoomOutButton
                onClick={() => transformComponentRef.current?.zoomOut()}
              ></ZoomOutButton>
            </ZoomControls>
            <CloseButton
              onClick={() => {
                closePhoto();
              }}
            ></CloseButton>
          </Controls>
          <TransformWrapper ref={transformComponentRef}>
            <TransformComponent
              wrapperStyle={{ width: "100%", height: "100%" }}
            >
              <StyledPhotoItem
                src={data[selectedIndex].image}
                onLoad={firstLoad}
              ></StyledPhotoItem>
            </TransformComponent>
          </TransformWrapper>
          <StyledPhotoDescription>
            <PrevButton
              onClick={() => {
                prevPhoto();
              }}
              disabled={!hasPreviousPhoto()}
            ></PrevButton>
            <PhotoDescription photo={data[selectedIndex]}></PhotoDescription>
            <NextButton
              onClick={() => {
                nextPhoto();
              }}
              disabled={!hasNextPhoto()}
            ></NextButton>
          </StyledPhotoDescription>
        </Overlay>,
        document.body
      )}
    </>
  );
}

const Overlay = styled.div`
  cursor: pointer;

  position: fixed;
  z-index: 2;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0 0 0 / 80%);
`;

const StyledPhotoItem = styled(PhotoItem)({
  border: "none",
});

const Controls = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;

  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  width: 100%;
  padding: 10px;
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

const ZoomControls = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center center;
  justify-content: center;
`;

const ZoomInButton = styled(Button)`
  &::after {
    content: "+";
  }
`;

const ZoomOutButton = styled(Button)`
  &::after {
    content: "-";
  }
`;

const PrevButton = styled(Button)`
  &::after {
    content: "<";
  }
`;
const NextButton = styled(Button)`
  &::after {
    content: ">";
  }
`;

const StyledPhotoDescription = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  width: 100%;
  padding: 10px;

  background-color: #fff;
`;
