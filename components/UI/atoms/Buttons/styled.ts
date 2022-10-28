import styled from 'styled-components';
import { ROOT_CX } from '../../../../assets/constants';

export const FillButtonWrapper = styled.button`
    background: #ED5B53;
    border: 1px solid #DE4D45;
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.15), 1px 1px 2px rgba(96, 97, 112, 0.15);
    border-radius: 4px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    -webkit-flex-direction: row;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    padding: 10px 50px;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    width:100%;
    cursor:pointer;
    &:hover{
        background: #DE4D45;
    }
    &[disabled]{
        opacity:0.6;
    }
`;