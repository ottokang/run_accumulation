const ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: "radar",
    data: {
        labels: ["第一圈", "第二圈", "第三圈", "第四圈", "第五圈"],
        datasets: [
            {
                label: "跑步圈數累積",
                backgroundColor: "#FFF17644",
                borderColor: "black",
                borderWidth: 1,
                data: [65, 75, 80, 60, 80],
            },
        ],
    },
    options: {
        elements: {
            line: {
                borderWidth: 1,
            },
        },
    },
});
