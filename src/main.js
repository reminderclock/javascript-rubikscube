let main={};
main.white = 'W';
main.red = 'R';
main.yellow='Y';
main.orange='O';
main.blue='B';
main.green='G';
main.empty=' ';
main.info=[];
main.proto=[];
main.input='';
main.temp=[[],[],[],[],[],[],[],[],[]];
main.rever=["U'","R'","F'","L'"];
main.two = 'U2';
main.cnt=0;
main.shiftInfo = ["U","U'","R","R'","L","L'","F","F'","Q"];
main.inputInfo=[];
main.allInfo = ["R","U","F","L","Q","'","2"];
main.type='';
main.q='';
main.realCnt=0;
main.clone=[[],[],[],[],[],[],[],[],[]];
main.random=[];

// 기본 2차원 배열 생성
main.createInfo = function() {
    this.info = [[this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.blue, this.blue,this.blue,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
                [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.blue, this.blue,this.blue,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
                [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.blue, this.blue,this.blue,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
                [this.white,this.white,this.white,this.empty,this.empty, this.empty, this.orange, this.orange, this.orange, this.empty, this.empty, this.empty, this.green, this.green, this.green, this.empty, this.empty, this.empty, this.yellow, this.yellow, this.yellow],
                [this.white,this.white,this.white,this.empty,this.empty, this.empty, this.orange, this.orange, this.orange, this.empty, this.empty, this.empty, this.green, this.green, this.green, this.empty, this.empty, this.empty, this.yellow, this.yellow, this.yellow],
                [this.white,this.white,this.white,this.empty,this.empty, this.empty, this.orange, this.orange, this.orange, this.empty, this.empty, this.empty, this.green, this.green, this.green, this.empty, this.empty, this.empty, this.yellow, this.yellow, this.yellow],
                [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.red, this.red,this.red,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
                [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.red, this.red,this.red,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
                [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.red, this.red,this.red,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty]];
                for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 21; j++) {
                        main.clone[i][j] = main.info[i][j];
                    }
                }
                this.makefrist();
}

// 초기 형태 만듬.
main.makefrist= function() {
    this.proto=[];
    this.info.forEach( (arr) => {
        this.proto += arr.join(' ') + '\n';
    });
    console.log(this.proto);
    // setData();
}

// 무작위 버튼 클릭스 무작위로 큐브 생성
main.makeRandom = function() {
    let random = 'BBBBBBBBWWWWWWWWOOOOOOOORRRRRRRRGGGGGGGGYYYYYYYY'.split('');
    random.sort(() => Math.random() - 0.5);
    this.random = [[this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,random[0], random[1],random[2],this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
    [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,random[3], this.blue, random[4],this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
    [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,random[5], random[6],random[7],this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
    [random[8],random[9],random[10],this.empty,this.empty, this.empty, random[16],random[17], random[18], this.empty, this.empty, this.empty, random[24], random[25], random[26], this.empty, this.empty, this.empty, random[32], random[33], random[34]],
    [random[11],this.white,random[12],this.empty,this.empty, this.empty, random[19], this.orange, random[20], this.empty, this.empty, this.empty, random[27], this.green, random[28], this.empty, this.empty, this.empty, random[35], this.yellow, random[36]],
    [random[13],random[14],random[15],this.empty,this.empty, this.empty, random[21], random[22], random[23], this.empty, this.empty, this.empty, random[29], random[30], random[31], this.empty, this.empty, this.empty, random[37], random[38], random[39]],
    [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,random[40], random[41],random[42],this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
    [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,random[43], this.red,random[44],this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty],
    [this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,random[45], random[46],random[47],this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty,this.empty]];
    for(let i=0; i<9; i++) {
        for(let j=0; j<21; j++) {
            main.info[i][j] = main.random[i][j];
        }
    }
    this.makefrist();
}

// 시작하기 
function startJust() {
    setData();
}

// 데이터 입력 받는 부분 추가
function setData() {
    main.input = prompt(`R U L F R' U' L' F' U2 Q 조합만 입력가능합니다.\ncube>`);
    if(main.shiftInfo.includes(main.input)===false){
        return limitRange();
    }
    makeTemp();
}

// 범위 제한
function limitRange() {
    main.inputInfo =main.input.split('');
    main.type='string';
    for(let i=0; i<main.inputInfo.length; i++) {
        if(main.allInfo.includes(main.inputInfo[i])===false) {
            return alert("입력형식에 벋어납니다.");
        }
    }
    return makeInput();
}

// 연속된 문자열 처리 
function makeInput() {
    main.input = main.inputInfo.shift();
    if(main.inputInfo[0]==="'"){
        main.inputInfo.shift();
        main.input += "'";
    }
    else if(main.inputInfo[0]==="2"){
        main.inputInfo.shift();
        main.input += "2";
    }
    if(main.input==="Q"){
        main.q='q';
    }
    if(main.input===undefined && main.q!=='q'){
        return setData();
    }
    return makeTemp();
}

// 현상태 배열 임시저장할 배열 생성
function makeTemp(){
    for(let i=0; i<9; i++) {
        for(let j=0; j<21; j++) {
            main.temp[i][j] = main.info[i][j];
        }
    }
    return decideCase()
}
// 입력 케이스별 함수 호출
function decideCase(){
    switch(main.input) {
    case "U":
    case "U'":
    case "U2":
    return rotateUp();
    case "L":
    case "L'":
    return rotateLeft();
    case "R":
    case "R'":
    return rotateRight();
    case "F":
    case "F'":
    return rotateFront();
    case "Q":
    return addMessage();     
    }
}

// 종료 되는 부분 추가
function endGame() {
    let t2 = Date.now();
    let time = Math.floor((t2-t1)/1000);
    let minute = 0;
    let second = 0;
    while(time>=60){
        minute++;
        time -= 60;
    }
    second = time;
    console.log(`경과시간: ${minute}분:${second}초`);
    console.log(`조작개수: ${main.realCnt}`);
    console.log("이용해주셔서 감사합니다. 뚜뚜뚜");
}

// 전부 맞추었을 경우 축하메세지 출력
function addMessage() {
    let fristCube='';
    let newCube='';
    main.clone.forEach((arr) => {
        fristCube += arr.join(' ') + '\n';
    });
    main.info.forEach((arr) => {
        newCube += arr.join(' ') + '\n';
    });
    if(newCube===fristCube){
        console.log("축하합니다. 모두 맞추었습니다!!")
    }
    endGame();
}

// 앞쪽면(red) 이동함수
function rotateFront() {
    for(let i=0; i<3; i++) {
        main.info[5][12+i] = main.temp[5][6+i];
        main.info[5][6+i] = main.temp[5][i];
        main.info[5][i] = main.temp[5][18+i];
        main.info[5][18+i] = main.temp[5][12+i];
    }
    if(main.input==="F'" && main.cnt<2){
        main.cnt++;
        return makeTemp();
    }
    main.cnt=0;
    createNewCube();
}

// 오른쪽면(green) 이동 함수
function rotateRight() {
    for(let i=0; i<3; i++) {
        main.info[i][11] = main.temp[3+i][8];
        main.info[3+i][8] = main.temp[6+i][11];
        main.info[6+i][11] = main.temp[5-i][18];
        main.info[5-i][18] = main.temp[i][11];
    }
    if(main.input==="R'" && main.cnt<2){
        main.cnt++;
        return makeTemp();
    }
    main.cnt=0;
    createNewCube();
}

// 왼쪽면(white) 이동 함수 
function rotateLeft() {
    for(let i=0; i<3; i++) {
        main.info[8-i][9] = main.temp[5-i][6];
        main.info[5-i][6] = main.temp[2-i][9];
        main.info[2-i][9] = main.temp[3+i][20];
        main.info[3+i][20] = main.temp[8-i][9];
    }
    if(main.input==="L'" && main.cnt<2){
        main.cnt++;
        return makeTemp();
    }
    main.cnt=0;
    createNewCube();
}

// 윗면(orange) 이동 함수
function rotateUp() {
    for(let i=0; i<3; i++) {
        main.info[5-i][12] = main.temp[2][11-i];
        main.info[6][9+i] = main.temp[5-i][12];
        main.info[3+i][2] = main.temp[6][9+i];
        main.info[2][11-i] = main.temp[3+i][2];
    }
    if(main.input==="U'" && main.cnt<2){
        main.cnt++;
        return makeTemp();
    }
    else if(main.input==="U2" && main.cnt<1){
        main.cnt++;
        return makeTemp();
    }
    main.cnt=0;
    createNewCube();
}

// 적용된 배열로 새로운 큐브 구현
function createNewCube() {
    if(main.input==="Q"){
        return;
    }
    let newCube='';
    newCube += main.input + '\n';
    main.info.forEach( (arr) => {
        newCube += arr.join(' ') + '\n';
    });
    if(main.input==="U2"){
        main.realCnt++;
    }
    main.realCnt++;
    console.log(newCube);
    if(main.type==='string'){
        return makeInput();
    }
    setData();
}

let t1 = Date.now();
main.createInfo();