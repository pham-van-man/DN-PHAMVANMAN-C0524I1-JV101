const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Các thông số cơ bản của game
const tileSize = 40;
const rows = 10;
const cols = 10;

// Tạo một mảng 2D để lưu trạng thái các ô
let board = [];
for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
        board[i][j] = Math.floor(Math.random() * 5); // Số ngẫu nhiên từ 0 đến 4
    }
}

// Hàm vẽ bàn cờ
function drawBoard() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ctx.fillStyle = getColor(board[i][j]);
            ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
            ctx.strokeRect(j * tileSize, i * tileSize, tileSize, tileSize);
        }
    }
}

// Hàm lấy màu sắc dựa trên giá trị
function getColor(value) {
    switch (value) {
        case 0:
            return 'red';
        case 1:
            return 'green';
        case 2:
            return 'blue';
        case 3:
            return 'yellow';
        case 4:
            return 'purple';
        default:
            return 'black';
    }
}

// Vẽ bàn cờ lần đầu
drawBoard();
let firstSelection = null;

canvas.addEventListener('click', function (event) {
    const x = event.offsetX;
    const y = event.offsetY;
    const row = Math.floor(y / tileSize);
    const col = Math.floor(x / tileSize);
    if (firstSelection) {
        // Kiểm tra xem có thể kết nối hai ô không
        if (canConnect(firstSelection.row, firstSelection.col, row, col)) {
            // Xóa các ô đã chọn
            board[firstSelection.row][firstSelection.col] = -1;
            board[row][col] = -1;
            drawBoard();
        }
        firstSelection = null;
    } else {
        firstSelection = {row, col};
    }
});

function canConnect(row1, col1, row2, col2) {
    // Logic kiểm tra kết nối giữa hai ô
    if (board[row1][col1] === board[row2][col2]) {
        // Kiểm tra nếu ô liền kề
        if ((Math.abs(row1 - row2) === 1 && col1 === col2) || (Math.abs(col1 - col2) === 1 && row1 === row2)) {
            return true;
        }
        // Các điều kiện kết nối khác
        // ...
    }
    return false;
}