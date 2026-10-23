import styled from "styled-components";
import { RiCloseCircleFill } from "react-icons/ri";

export const LargeImg = styled.div`
    position: relative;
    width: 370px;
    height: 150px;
    border: 3px solid #4d2525;
    overflow: hidden;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 10;

    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    line-height: 0;
`;

export const Cross = styled(RiCloseCircleFill)`
    color: #000;
    font-size: 2em;

    &:hover {
        color: darkred;
    }
`;