import styled from 'styled-components';

export const InputGroupWrapper = styled.div`
    margin:0 0 16px 0;
   label{
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #0A2540;
    width:100%;
    display:block;
    margin-bottom: 5px;
   }
   input{
    height: 40px;
    border: 1px solid #E4E4EB;
    box-shadow: inset 0px 0.5px 4px rgba(96, 97, 112, 0.16);
    border-radius: 4px;
    background: #FFFFFF;
    width:100%;
    outline:none;
    padding:10px;
   }
   span{
    font-size: 12px;
    color:red;
   }
`;