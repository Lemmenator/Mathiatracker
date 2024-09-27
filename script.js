const passwords = {
    1: "Password1",
    2: "Password2",
    3: "Password3",
    4: "Password4",
    5: "Password5",
    6: "Password6",
    7: "Password7",
};

function checkPassword(imageNum) {
    const password = prompt(`Enter password for Image ${imageNum}:`);
    if (password === passwords[imageNum]) {
        showBoxes(imageNum);
    } else {
        alert("Incorrect password! Please try again.");
    }
}

function showBoxes(imageNum) {
    document.body.innerHTML = `
        <h1>Alberto Hernandez</h1>
        <div class="boxes-container">
            ${Array.from({ length: 5 }, (_, i) => `
                <div class="box" onclick="toggleHighlight(this)">
                    Box ${i + 1}
                    <div class="mini-boxes">
                        ${Array.from({ length: 5 }, (_, j) => `
                            <div class="mini-box" onclick="toggleHighlight(this)">Mini Box ${j + 1}</div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    document.querySelector('.boxes-container').style.display = 'block';
}

function toggleHighlight(element) {
    element.classList.toggle('highlight');
}
