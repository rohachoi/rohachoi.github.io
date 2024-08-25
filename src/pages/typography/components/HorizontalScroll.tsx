import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

type ScrollDirection = 'forward' | 'backward' | 'idle';

const HorizontalScroll: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("idle");

    useEffect(() => {
        let idleTimeout: number | undefined;

        const handleScroll = (e: WheelEvent) => {
            clearTimeout(idleTimeout);

            // 기본 세로 스크롤 동작 막음
            e.preventDefault();

            // deltaY 값이 양수이면 forward, 음수이면 backward
            const direction = e.deltaY > 0 ? "forward" : "backward";
            setScrollDirection(direction);
            setScrollPosition((prev) => prev + e.deltaY);

            idleTimeout = setTimeout(() => {
                setScrollDirection("idle");
            }, 50);
        };

        // wheel event listener
        // passive: false 이 설정은 브라우저에게 이벤트 핸들러가 e.preventDefault()를 호출할 수 있다는 정보를 전달합니다.
        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            clearTimeout(idleTimeout);
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <ScrollWrapper>
        <HorizontalScrollWrapper style={{ transform: `translateX(-${scrollPosition}px)` }}>
            <ScrollText scrollDirection={scrollDirection}>
                <Point>Gaming</Point> is the future of experience.
                <SubPoint> We</SubPoint> make games <Point>with heart</Point>.
                <SubPoint> We</SubPoint> make games that <Point>deliver</Point>.
            </ScrollText>
        </HorizontalScrollWrapper>
        </ScrollWrapper>
    );
};

export default HorizontalScroll;

const ScrollWrapper = styled.div`
    display: flex;
    height: 50%;
`;

const HorizontalScrollWrapper = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    transition: transform 0.1s ease-out;
`;


interface ScrollTextProps {
    scrollDirection: string;
}

const ScrollText = styled.h1<ScrollTextProps>`
    font-size: 10rem;
    font-weight: bold;
    color: black;
    padding: 50px;
    font-family: Biotif, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    transform: ${(props) =>
    props.scrollDirection === "forward" ? "skewX(-13deg)" : props.scrollDirection === "backward" ? "skewX(13deg)" : "none"};
    transition: transform 0.7s ease-out;
`;
const Point = styled.span`
    color: #00bfff;
`;

const SubPoint = styled.span`
    color: #ff69b4;
`;
