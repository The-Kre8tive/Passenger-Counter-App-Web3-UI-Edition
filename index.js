let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalSumEl = document.getElementById("total-sum");
let count = 0;
let totalSum = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
    animateCounter();
}

function save() {
    if (count === 0) return;
    
    // Add to total sum
    totalSum += count;
    totalSumEl.textContent = totalSum;
    
    // Format the entry
    let countStr = count;
    if (saveEl.textContent === "No entries yet") {
        saveEl.textContent = countStr;
    } else {
        saveEl.textContent += ", " + countStr;
    }
    
    // Reset counter
    animateReset();
    count = 0;
}

function animateCounter() {
    countEl.style.transform = "scale(1.05)";
    setTimeout(() => {
        countEl.style.transform = "scale(1)";
    }, 200);
}

function animateReset() {
    countEl.style.transition = "all 0.3s ease";
    countEl.style.opacity = "0.5";
    countEl.style.transform = "translateY(8px)";
    
    setTimeout(() => {
        countEl.textContent = "0";
        countEl.style.opacity = "1";
        countEl.style.transform = "translateY(0)";
    }, 300);
    
    setTimeout(() => {
        countEl.style.transition = "";
    }, 600);
}