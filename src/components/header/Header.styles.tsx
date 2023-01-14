
import styled from 'styled-components'
import { COLORS } from '../../utils/color'
import { DEVICE_BREAKPOINTS } from '../../utils/device'
import TranslatedText from '../translated-text/TranslatedText'

export const Container = styled.div`
    background-color: ${COLORS.PRIMARY};
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 16px;
`

export const Body = styled.div`
    max-width: ${DEVICE_BREAKPOINTS.MD}px;
    flex: 1;
    display: flex;
    justify-content: space-between;
`

export const HeaderText = styled(TranslatedText)`
    color: ${COLORS.WHITE};
    font-weight: bold;
    font-size: 18px;
`