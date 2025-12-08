var llff_items = [
    { image: "zhuan00.png"},
    { image: "zhuan01.png"},
    { image: "zhuan02.png"},
    { image: "zhuan03.png"},
    { image: "zhuan04.png"},
    { image: "zhuan05.png"},
    { image: "zhuan06.png"},
    { image: "zhuan07.png"},

];


function llff_carousel_item_template(item) {
    return `<div class="x-card" style="min-width: 400px; margin: 10px;">
                <div style="width: 100%; text-align: center;">
                    <img src="assets/${item.image}" alt="${item.title}" style="width: 100%; height: auto; border-radius: 8px;">
                </div>
                <div class="caption" style="text-align: center; margin-top: 10px;">
                    <div style="font-weight: 600; font-size: 16px;">
                        ${item.title}
                    </div>
                </div>
            </div>`;
}
