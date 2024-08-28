## TEST2

## 새롭게 시도해본 것
- background-clip: text; /* 텍스트만큼만 배경색이 적용됨 */
- 가로 스크롤을 구현할 때 'wheel' 이벤트
  // passive: false 이 설정은 브라우저에게 이벤트 핸들러가 e.preventDefault()를 호출할 수 있다는 정보를 전달합니다.
  passive: false 처리 - window.addEventListener("wheel", handleScroll, { passive: false });

- WheelEvent 의 deltaY 속성은 마우스 휠의 이동 방향을 나타내는 속성입니다.
  deltaY 값이 양수이면 마우스 휠을 아래로 내렸다는 의미이고, 음수이면 마우스 휠을 위로 올렸다는 의미입니다.
  - **deltaMode**
  - deltaMode 속성은 마우스 휠 이벤트의 delta 속성의 단위를 나타내는 속성입니다.
  - deltaMode 속성은 0, 1, 2 중 하나의 값을 가질 수 있습니다.
    - 0: DOM_DELTA_PIXEL
    - 1: DOM_DELTA_LINE
    - 2: DOM_DELTA_PAGE
  - DOM_DELTA_PIXEL: delta 속성의 값은 픽셀 단위입니다.
  - DOM_DELTA_LINE: delta 속성의 값은 한 줄의 높이를 나타냅니다.
  - DOM_DELTA_PAGE: delta 속성의 값은 한 페이지의 높이를 나타냅니다.

- transform : skew(-13deg) 로 이탤릭체 표기하기
- transform : translateX(휠 이벤트의 델타값) 로 휠이벤트 엮어서 스크롤하기
- idle, forward, backward 로 스크롤중인지 알 수 있게 하기
