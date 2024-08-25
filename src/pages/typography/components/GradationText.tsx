import React, { useState } from "react";
import styled from "@emotion/styled";

type HoverTextProps = {
    gradientX: number;
    gradientY: number;
    isHovered: boolean;
}

export const GradationText = () => {
    const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    /*
    e.clientX 가 브라우저 화면을 기준으로 한 마우스의 x 좌표이고,
    e.currentTarget.getBoundingClientRect().left 가 브라우저 화면을 기준으로 한 요소의 x 좌표이므로,
    e.clientX - e.currentTarget.getBoundingClientRect().left 는 요소를 기준으로 한 마우스의 x 좌표입니다.
    * */
    const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setGradientPosition({ x, y });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <GradationTextWrapper>
            <BaseText>
                Gaming is the future of experience.<br />
                We make games with heart.<br />
                We make games that deliver.
            </BaseText>
            <HoverLayer
                as={'p'}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                gradientX={gradientPosition.x}
                gradientY={gradientPosition.y}
                isHovered={isHovered}
            >
                Gaming is the future of experience.<br />
                We make games with heart.<br />
                We make games that deliver.
            </HoverLayer>
        </GradationTextWrapper>
    );
};


const GradationTextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: #262626;
    position: relative;
`;

const BaseTextStyle = styled.h1`
    position: absolute;
    font-size: 3rem;
    font-weight: bold;
    color: #00bfff;
    cursor: pointer;
    font-family: Biotif, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`

const BaseText = styled(BaseTextStyle)``;

const HoverLayer = styled(BaseTextStyle)<HoverTextProps>`
    color: transparent;
    background: ${(props) =>
            props.isHovered
                    ? `radial-gradient(circle at ${props.gradientX}px ${props.gradientY}px, 
                #FF69B4, #8A2BE2, #00BFFF, transparent 150px)`
                    : "transparent"};
    -webkit-background-clip: text;
    transition: background 0.1s ease;
    will-change: background;
`;
