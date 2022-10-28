import styled from 'styled-components';
import { ROOT_CX } from '../../../../assets/constants';

export const MiddleCardWrapper = styled.div`
    width: 512px;
    background: #FFFFFF;
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16);
    border-radius: 8px;
    margin:40px auto 0;
    padding: 40px;
    .${ROOT_CX}card_title{
        margin:0 0 40px 0;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #3B5166;
    }
`;