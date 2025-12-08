var llff_items = [
    { image: "zhuan00.png", title: "Qualitative Comparison on LLFF dataset with 3-view", description: "Qualitative Comparison on LLFF dataset with 3-view" },
    { image: "zhuan01.png", title: "Qualitative Comparison on LLFF dataset with 6-view", description: "Qualitative Comparison on LLFF dataset with 6-view" },
    { image: "zhuan02.png", title: "Qualitative Comparison on LLFF dataset with 3-view", description: "Qualitative Comparison on LLFF dataset with 3-view" },
    { image: "zhuan03.png", title: "Qualitative Comparison on LLFF dataset with 3-view", description: "Qualitative Comparison on LLFF dataset with 3-view" },
    { image: "zhuan04.png", title: "Qualitative Comparison on LLFF dataset with 3-view", description: "Qualitative Comparison on LLFF dataset with 3-view" },
    { image: "zhuan05.png", title: "Qualitative Comparison on LLFF dataset with 3-view", description: "Qualitative Comparison on LLFF dataset with 3-view" },
    { image: "zhuan06.png", title: "Qualitative Comparison on LLFF dataset with 3-view", description: "Qualitative Comparison on LLFF dataset with 3-view" },
    { image: "zhuan07.png", title: "Qualitative Comparison on LLFF dataset with 3-view", description: "Qualitative Comparison on LLFF dataset with 3-view" },

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
