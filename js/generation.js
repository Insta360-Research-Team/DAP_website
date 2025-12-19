// Comparison on outdoor scenes (01-06)
var outdoor_items = [
    { image: "dap_03.jpg" },
    { image: "dap_04.jpg" },
    { image: "dap_05.jpg" },
    { image: "dap_02.jpg" },
    { image: "dap_06.jpg" },
    { image: "dap_01.jpg" },
];

// Comparison on indoor scenes (07-08)
var indoor_items = [
    { image: "dap_07.jpg" },
    { image: "dap_08.jpg" },
];

// Comparison on Fine-grained Details (09-11)
var details_items = [
    { image: "dap_09.jpg" },
    { image: "dap_10.jpg" },
    { image: "dap_11.jpg" },
];

// Comparison on robustness (12-13)
var robustness_items = [
    { image: "dap_12.jpg" },
    { image: "dap_13.jpg" },
];

// Comparison on scenes with human (14-18)
var human_items = [
    { image: "dap_15.jpg" },
    { image: "dap_16.jpg" },
    { image: "dap_17.jpg" },
    { image: "dap_18.jpg" },
];

// Comparison on scale ability (19-20)
var scale_items = [
    { image: "dap_19.jpg" },
    { image: "dap_20.jpg" },
];

// 通用模板函数
function carousel_item_template(item, info) {
    return `
        <div class="x-card" style="min-width: 300px; max-width: 900px; margin: 10px auto;">
            <div style="width: 100%; text-align: center;">
                <img src="assets/${item.image}" alt="" style="width: 100%; height: auto; border-radius: 8px;">
            </div>
        </div>
    `;
}
