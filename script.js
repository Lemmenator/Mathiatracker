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
        showBoxes();
    } else {
        alert("Incorrect password! Please try again.");
    }
}

function showBoxes() {
    document.body.innerHTML = `
        <h1>Alberto Hernandez</h1>
        <h2 class="subheader">Mathia Tracker</h2>
        <div class="boxes-container">
            <div class="box">1: Reasoning with Shapes/ Razonar con formas
                <div class="mini-boxes">
                    ${Array.from({ length: 8 }, (_, j) => `
                        <div class="mini-box" onclick="toggleHighlight(this)">Mini Box ${j + 1}</div>
                    `).join('')}
                </div>
            </div>
            <div class="box">2: Establishing Proof/ Establecer demostraciones
                <div class="mini-boxes">
                    ${Array.from({ length: 5 }, (_, j) => `
                        <div class="mini-box" onclick="toggleHighlight(this)">Mini Box ${j + 1}</div>
                    `).join('')}
                </div>
            </div>
            <div class="box">3: Investigating Proportionality/ Investigar sobre proporcionalidad
                <div class="mini-boxes">
                    ${Array.from({ length: 5 }, (_, j) => `
                        <div class="mini-box" onclick="toggleHighlight(this)">Mini Box ${j + 1}</div>
                    `).join('')}
                </div>
            </div>
            <div class="box">4: Connecting Geometric and Algebraic Descriptions/ Conectar descripciones geométricas y algebraicas
                <div class="mini-boxes">
                    ${Array.from({ length: 5 }, (_, j) => `
                        <div class="mini-box" onclick="toggleHighlight(this)">Mini Box ${j + 1}</div>
                    `).join('')}
                </div>
            </div>
            <div class="box">5: Making Informed Decisions/ Tomar decisiones informadas
                <div class="mini-boxes">
                    ${Array.from({ length: 5 }, (_, j) => `
                        <div class="mini-box" onclick="toggleHighlight(this)">Mini Box ${j + 1}</div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    document.querySelector('.boxes-container').style.display = 'block';
}

function toggleHighlight(element) {
    element.classList.toggle('highlight');
}
