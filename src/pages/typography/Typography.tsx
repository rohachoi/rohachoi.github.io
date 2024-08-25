import {Global} from "@emotion/react";
import {GlobalStyles} from "../../styles/GlobalStyles";
import {GradationText} from "./components/GradationText";
import HorizontalScroll from "./components/HorizontalScroll";
import React from "react";
import styled from "@emotion/styled";

export const Typography: React.FC = () => {
    return (
        <Wrapper>
            <Global styles={GlobalStyles} />
            <GradationText />
            <HorizontalScroll />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    user-select: none;
`;
