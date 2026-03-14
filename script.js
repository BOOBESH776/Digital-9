// var data = document.getElementById("RawData");
// var rec = document.getElementById("Recommendation");

// const { createElement } = require("react");

// let count = 0;

// let upto = 0;
// let counts = setInterval(updated, 1);
// function updated() {
//     let count = document.getElementById("ClientsServed");
//     count.innerHTML = ++upto;
//     if (upto === 499) {
//         clearInterval(counts);
//     }
// }

const plans = [
    [
        "25 Users Per Project",
        "100 Project",
        "10 TB Cloud Storage",
        "50 Reports",
        "100 GB Bandwidth",
        "50 Support Tickets"
    ],
    [
        "50 Users Per Project",
        "150 Project",
        "15 TB Cloud Storage",
        "75 Reports",
        "150 GB Bandwidth",
        "75 Support Tickets"
    ],
    [
        "100 Users Per Project",
        "200 Project",
        "20 TB Cloud Storage",
        "100 Reports",
        "200 GB Bandwidth",
        "100 Support Tickets"
    ]
];

const container = document.getElementById('pricing-container');

plans.forEach(function (features) {
    const col = document.createElement('div');
    col.className = 'plan-col';

    const ul = document.createElement('ul');
    ul.className = 'features';
    features.forEach(function (text) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    });

    const orderBtn = document.createElement('button');
    orderBtn.className = 'order-btn';
    orderBtn.textContent = 'Order Now';

    const arrowBtn = document.createElement('button');
    arrowBtn.className = 'arrow-btn';
    arrowBtn.innerHTML = '<svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><polygon points="7,4 22,14 7,24"/></svg>';

    col.appendChild(ul);
    col.appendChild(orderBtn);
    col.appendChild(arrowBtn);
    container.appendChild(col);
});