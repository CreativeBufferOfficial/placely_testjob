import styled from 'styled-components';
import { ROOT_CX } from '../../../assets/constants';

export const MainLayoutWrapper = styled.div`
background: #fff7f0;
height: 100vh;
backdrop-filter: blur(50px);
    .${ROOT_CX}header_section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        display: -webkit-flex;
        -webkit-align-items: center;
        -webkit-justify-content: space-between;
        padding: 40px;
    }
`;