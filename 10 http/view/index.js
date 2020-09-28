exports.index = function (list) {
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web 기술</title>
</head>
<body>
    <h1>Web 기술</h1>
    <ul>
        ${list}
    </ul>
    <hr>
    <p>
        웹 개발(web development)은 인터넷(월드 와이드 웹)이나 인트라넷(사설망)을 위한 웹사이트를 개발하는 일을 가리킨다. 
        웹 개발은 가장 단순한 단일 정적 문서의 플레인 텍스트에서부터 가장 복잡한 웹 기반 인터넷 애플리케이션, 전자 비즈니스, 
        소셜 네트워크 서비스에 이르기까지 개발 범위가 다양하다. 일반적으로 웹 개발이라 부를 때는 웹 프로그래밍뿐만 아니라 더 포괄적인 작업인 웹 디자인, 
        웹 콘텐츠 개발, 클라이언트 사이드/서버 사이드 스크립트 작업, 웹 서버 및 네트워크 보안 구성, 전자 상업 개발을 아우른다.<br>
        더 큰 조직과 사업 공간에서 웹 개발 팀은 수백 명의 사람(웹 개발자)들을 이룰 수 있다. 
        크기가 작은 조직은 하나의 영구적인 웹마스터라든지 그래픽 디자이너 및 정보 시스템 기술자 등을 필요로 할 수 있다. 
        웹 개발은 특정 부서의 분야라기 보다는 부서 간 협업의 노력으로 볼 수 있다.
    </p>
    <hr>
    <button>추가</button>
    <button>수정</button>
    <button>삭제</button>
</body>
</html>
`
} 
