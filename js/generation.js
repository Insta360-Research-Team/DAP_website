// application.js 里
var llff_items = [
    { image: "zhuan00.png" },
    { image: "zhuan01.png" },
    { image: "zhuan02.png" },
    { image: "zhuan03.png" },
    { image: "zhuan04.png" },
    { image: "zhuan05.png" },
    { image: "zhuan06.png" },
    { image: "zhuan07.png" },
];

// 注意必须写两个参数 (item, info)，虽然 info 不用
function llff_carousel_item_template(item, info) {
    return `
        <div class="x-card" style="min-width: 400px; margin: 10px;">
            <div style="width: 100%; text-align: center;">
                <img src="assets/${item.image}" alt="" style="width: 100%; height: auto; border-radius: 8px;">
            </div>
        </div>
    `;
}
