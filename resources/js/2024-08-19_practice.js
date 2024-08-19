function changeColor() {
    let val = document.getElementById("selColor").value;    
    document.getElementById("area1").style.background = val;
}

function halfSize() {    
    resize(50,50);
}

function defaultSize() {
    resize(100,100);
}

function dobuleSize() {
    resize(200,200);
}

function resize(width, height) {
    document.getElementById("area2").style.width = width+'px';
    document.getElementById("area2").style.height = height+'px';
}

window.onload = function() {
    const area3 = document.getElementById("area3");

    // 마우스가 #area3 요소 안으로 들어갔을 때 : mouseenter
    area3.addEventListener('mouseenter', function() {
        this.style.background = 'red';
    });

    // 마우스가 #area3 요소 밖으로 나갔을때 : mouseout
    area3.addEventListener('mouseout', function() {
        this.style.background = 'black';
    });
}