function addNewBoard() {
    let title = prompt("Please provide a title", "");
    const newBoard = createNewBoard(title);
    let boardsList = document.getElementById("boards-list");
    boardsList.appendChild(newBoard);
}

function createNewBoard(title) {
    let board = document.createElement('div');
    board.id = "board_"+title+"_"+new Date().getTime();
    const boardTitle = createBoardTitle(title);
    const addButton = createAddButton(board.id);
    board.appendChild(boardTitle);
    const emptyList = document.createElement("ul");
    emptyList.id = "task-list";
    board.appendChild(emptyList);
    board.appendChild(addButton);
    board.classList.add("board");
    return board;
}

function createBoardTitle(title) {
    let boardTitle = document.createElement('h5');
    boardTitle.textContent = title;
    boardTitle.classList.add('board-title');
    return boardTitle;
}

function createAddButton(boardID) {
    let addBtn = document.createElement('button');
    addBtn.textContent = "Add Task";
    addBtn.classList.add('board-btn');
    addBtn.addEventListener("click", function() {
        addNewTask(boardID)
    });
    return addBtn;
}

function addNewTask(boardID) {
    const taskDescription = prompt("Please enter task Description");
    const desc = createTask(taskDescription);
    const board = document.getElementById(boardID);
    board.querySelector("ul").appendChild(desc);
    console.log(boardID);
}

function createTask(taskDescription) {
    let taskElement = document.createElement('li');
    taskElement.textContent = taskDescription;
    return taskElement;
}