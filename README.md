Velopert 님 블로그 공부
react-router
https://velopert.com/3417

SPA(Single Page Application); page가 하나인 어플리케이션
(화면 ... 주소) 서로 연관되어 있음

라우팅; 다른 주소에 따라 다른 뷰를 보여주는 것

react-router; 써드파티 라이브러리, 클라이언트 사이드에서의 라우팅을 간단하게 해줌

src/ 디렉터리에 추가
    components: 컴포넌트 들이 위치하는 디렉토리
    pages: 각 라우트들이 위치하는 디렉토리
    client: 브라주져 측에서 사용할 최상위 컴포넌트. 여기서 라우터 설정
    server: 서버 측에서 사용할 리엑트 관련 코드 
    shared: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트. App.js가 위치
    lib: 나중에 웹 연동 구현할 때, 사용할 API와 코드 스프리팅 할 때 필요한 코드 위치

라우트에 경로에 특정값을 넣는 방법
    1) 'params'를 사용하는 법
    2) 'query'를 사용하는 법

라우트로 설정한 Component는 3 가지 props를 전달받게 됨
    1) history : push, replace를 통해 다른 경로로 이동하거나 앞/뒤 페이지로 전환 할 수 있음
    2) location : 이 객체는 현재 경로에 대한 정보 가지고 있고.
                 URL 쿼리 정보 갖고 o
                 *"URL 쿼리" | /about?foo=bar
                 -> URL 쿼리의 경우 Component 내에서 동적으로 사용 o
                 -> 주의할 점! 받아오는 값은 모두 문자열! 그러므로 쓸때 타입 변환!
    3) match : 이 객체는 어떤 라우트에 매칭이 되어 있는지에 대한 정보가 o
               params 정보를 가지고 o
               *"params" | /about/:name 
               -> params 같은 경우 사용전에 꼭 라우트에서 지정을 해줘야 한다!


라우트가 받는 props 중 헷갈리는 값
    1) location.pathname : 현재 브라우져 상의 위치를 알려줌. 이 값은 어떤 라우트에서 렌더링하던 동일
    2) match.path 
    3) match.url : match 값을 설정한 Route와 직접적으로 관련된 값만을 보여줌.

<코드 예시>
    Posts
        "location.pathname : "          /posts/3 
        "match.path : "                 /posts
        "match.url : "                  /posts
    => Posts를 보여주는 라우트에서는 ":id" 값을 설정하지 않았으니 path와 url 이 모두 /posts임


    Post
        "location.pathname : "          /posts/3
        "match.path : "                 /posts/:id
        "match.url : "                  /posts/3
    => Post를 보여주는 라우트에서는 path의 경우 라우트에서 설정한 path 값이 그대로 나타난다
        url의 경우는 ":id" 부분에 값이 들어간 상태를 나타낸다.