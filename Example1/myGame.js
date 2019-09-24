room = game.createRoom("room", "배경-1.png") // 방 생성

room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
    if(room.door.isClosed()){ // door가 closed 상태이면
        room.door.open() // door의 상태를 open으로 바꿈
    } else if (room.door.isOpened()){ // door가 opened 상태이면
        game.clear() // 게임 클리어
    } else if (room.door.isLocked()){ // door가 locked 상태이면
        printMessage("문이 잠겨있다") // 메시지 출력
    }
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
    room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 930, 250) // 위치 변경

room.keypad.onClick = function() {
    showKeypad("number", "3712" , function(){ // 키패드 1 - 숫자4자리
        room.door.unlock() // door의 잠금을 연다
        printMessage("잠금장치가 열리는 소리가 들렸다.")
     })
}

room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)

room.chair3 = room.createObject("chair3", "의자2-2.png")
room.chair3.setWidth(120)
room.locateObject(room.chair3, 600, 450)

room.table = room.createObject("table", "테이블2-2.png")
room.table.setWidth(350)
room.locateObject(room.table, 500, 500)

room.chair1 = room.createObject("chair1", "의자1-3.png")
room.chair1.setWidth(120)
room.locateObject(room.chair1, 350, 500)

room.chair2 = room.createObject("chair2", "의자1-3.png")
room.chair2.setWidth(120)
room.locateObject(room.chair2, 440, 520)

room.cup1 = room.createObject("cup1", "컵-닫힘.png")
room.cup1.setWidth(30)
room.locateObject(room.cup1, 470, 400)

room.cup2 = room.createObject("cup2", "컵-열림.png")
room.cup2.setWidth(30)
room.locateObject(room.cup2, 510, 400)

room.cookie = room.createObject("cookie", "쿠키.png")
room.cookie.setWidth(70)
room.locateObject(room.cookie, 540, 440)

room.obj = room.createObject("obj", "장식2-좌.png")
room.obj.setWidth(150)
room.locateObject(room.obj, 150, 430)

room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 140)
room.book.onClick = function() {
    showImageViewer("종이.png", "힌트.txt"); // 이미지 출력
}

game.start(room) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력 