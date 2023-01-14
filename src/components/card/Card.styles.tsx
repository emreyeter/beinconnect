import styled from "styled-components";
import { COLORS } from "../../utils/color";
import { DEVICE_BREAKPOINTS } from "../../utils/device";
import TranslatedText from "../translated-text/TranslatedText";

const CARD_HEIGHT = 200
const CARD_TRANSLATE_Y_PCT = 70
const CARD_TRANSLATE_Y = CARD_HEIGHT * CARD_TRANSLATE_Y_PCT / 100
const CARD_TOP_HEIGHT = CARD_HEIGHT - CARD_TRANSLATE_Y

export const CardDescriptionContainer = styled.div`
    background: black;
    flex: 1;
    display: flex;
    flex-direction: column;
    opacity: 0.6;
    height: 100%;
    transform: translateY(${CARD_TRANSLATE_Y}px);
    transition: all 0.3s ease-in-out;
`
export const Container = styled.div.attrs(({style}) => ({
        style,
    }))`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: ${CARD_HEIGHT}px;
    display: flex;
    align-items: flex-end;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    &:hover ${CardDescriptionContainer}{
        transform: translateY(0);
        opacity: 0.8;
    }
`

export const CardHeader = styled(TranslatedText)`
    color: ${COLORS.WHITE};
    font-weight: bold;
    font-size: 16px;
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}px) {
        font-size: 12px;
    }
`

export const CardDescriptionYear = styled(CardHeader)`
    font-weight: normal;
`

export const CardTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${CARD_TOP_HEIGHT}px;
`

export const CardBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    margin-bottom: 10px;
`

export const CardDescription = styled(CardHeader)`
    font-weight: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px;
`