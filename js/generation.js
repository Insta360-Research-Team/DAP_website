// Comparison on outdoor scenes (01-06)
var outdoor_items = [
    { image: "dap_02.png" },
    { image: "dap_03.png" },
    { image: "dap_04.png" },
    { image: "dap_05.png" },
    { image: "dap_06.png" },
    { image: "dap_01.png" },
];

// Comparison on indoor scenes (07-08)
var indoor_items = [
    { image: "dap_07.png" },
    { image: "dap_08.png" },
];

// Comparison on Fine-grained Details (09-11)
var details_items = [
    { image: "dap_09.png" },
    { image: "dap_10.png" },
    { image: "dap_11.png" },
];

// Comparison on robustness (12-13)
var robustness_items = [
    { image: "dap_12.png" },
    { image: "dap_13.png" },
];

// Comparison on scenes with human (14-18)
var human_items = [
    { image: "dap_14.png" },
    { image: "dap_15.png" },
    { image: "dap_16.png" },
    { image: "dap_17.png" },
    { image: "dap_18.png" },
];

// Comparison on scale ability (19-20)
var scale_items = [
    { image: "dap_19.png" },
    { image: "dap_20.png" },
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
