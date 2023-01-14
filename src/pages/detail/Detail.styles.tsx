import styled from "styled-components";
import TranslatedText from "../../components/translated-text/TranslatedText";
import { COLORS } from "../../utils/color";
import { DEVICE_BREAKPOINTS } from "../../utils/device";

const IMAGE_HEIGHT = 250;
const IMAGE_WIDTH = 200;

export const ModelTitle = styled(TranslatedText)`
    font-size: 20px;
    font-weight: bold;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
        text-align: center;
    }
`;

export const Description = styled(TranslatedText)`
    font-size: 16px;
`;

export const Category = styled(TranslatedText)`
    font-size: 16px;
    color: ${COLORS.GRAY};
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
        text-align: center;
    }
`;


export const Container = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
        flex-direction: column;
    }
`;

export const RightContainer = styled.div`
    flex: 1;
`;

export const ImageContainer = styled.div<{ src: string }>`
    background: url(${(props) => props.src}) no-repeat center center;
    background-size: auto 100%;
    height: ${IMAGE_HEIGHT}px;
    width: ${IMAGE_WIDTH}px;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
        align-self: center;
    }
  
`;
