const detailContainer = document.getElementById('attraction-detail');

// 解析URL参数
function getUrlParameter(name) {
    const url = window.location.search;
    const regex = new RegExp(`[?&]${name}=([^&#]*)`);
    const results = regex.exec(url);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// 显示景点详情
function displayAttractionDetail(attraction) {
    detailContainer.innerHTML = ''; // 清空之前的内容

    const detailHTML = `
        <h2>${attraction.name}</h2>
        <p><strong>位置：</strong>${attraction.location}</p>
        <p><strong>预算：</strong>约 ${attraction.budget.min}-${attraction.budget.max} 元</p>
        <p><strong>最佳季节：</strong>${attraction.bestSeason.join('、')}</p>
        <p><strong>亮点：</strong>${attraction.highlights.join('、')}</p>
        <p>${attraction.description}</p>
    `;
    detailContainer.innerHTML = detailHTML;
}

// 获取URL中的景点信息
const attractionStr = getUrlParameter('attraction');
const attraction = JSON.parse(attractionStr);

if (attraction) {
    displayAttractionDetail(attraction);
}