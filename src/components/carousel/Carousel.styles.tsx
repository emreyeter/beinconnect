import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../utils/device";

const IMAGE_HEIGHT = 350;


export const Container = styled.div`
    @media (max-width: ${DEVICE_BREAKPOINTS.XL}px) {
        margin: 0 -10px;
    }
`;


export const ImageContainer = styled.div<{ src: string }>`
    background: url(${(props) => props.src}) no-repeat center center;
    background-size: auto 100%;
    width: 100%;
    height: ${IMAGE_HEIGHT}px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

