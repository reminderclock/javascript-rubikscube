# ↔️ 단어 밀어내기

### 주어진 요구사항

1. 단어 밀어내기

- 입력제한에 맞춰 인자의 범위를 지정한다.
- 단어 밀어내기를 구현한다.
- 입력: 사용자로부터 단어 하나, 정수 숫자 하나`( -100 <= N < 100)` , `L` 또는 `R`을 입력받는다. `L` 또는 `R`은 대소문자 모두 입력 가능하다.
- 주어진 단어를 `L`이면 주어진 숫자 갯수만큼 왼쪽으로, `R`이면 오른쪽으로 밀어낸다.
- 밀려나간 단어는 반대쪽으로 채워진다.

### 조작어 추가 설명

- 입력은 공백을 구분으로 입력을 받는다.
- 결과값은 브라우저에 출력된다.

### 단어 밀어내기 구현 동작(함수 별)

1. 입력형식에 맞는 input만 받을 `limitRange()`
2. 실제로 이동되는 방향을 결정할 `decideShift()`
3. 왼쪽으로 밀 `shiftLeft()`
4. 오른쪽으로 밀 `shiftRight()`
5. 결과를 출력할 `displayWord()`
