import styled from "styled-components";
import { COLORS } from "../../utils/color";
import { DEVICE_BREAKPOINTS } from "../../utils/device";
import TranslatedText from "../translated-text/TranslatedText";

export const CategoryHeader = styled(TranslatedText)`
    margin: 10px 0;
    border-bottom: 1px solid ${COLORS.GRAY};
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
        font-size: 16px;
    }
`
