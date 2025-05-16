function displayRecommendations() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const recommendations = JSON.parse(localStorage.getItem('recommendations'));
    const recommendationsContainer = document.getElementById('recommendations');

    if (!userData || !recommendations) {
        recommendationsContainer.innerHTML = '<p>未找到推荐数据，请返回重新提交表单。</p>';
        return;
    }

    recommendationsContainer.innerHTML = `
        <h3>${userData.name}${userData.gender === '男' ? '先生' : '女士'}，您好！</h3>
        <p>根据您的偏好，我们为您精心挑选了以下旅游景点：</p>
    `;

    if (recommendations.length === 0) {
        recommendationsContainer.innerHTML += `
            <p>抱歉，没有找到符合您要求的景点。</p>
            <p>您可以尝试调整预算或选择其他旅游类型。</p>
        `;
        return;
    }

    recommendations.forEach(attraction => {
        const recommendationEl = document.createElement('div');
        recommendationEl.className = 'recommendation';
        recommendationEl.innerHTML = `
            <h3>${attraction.name}</h3>
            <p><strong>位置：</strong>${attraction.location}</p>
            <p><strong>预算：</strong>约 ${attraction.budget.min}-${attraction.budget.max} 元</p>
            <p><strong>最佳季节：</strong>${attraction.bestSeason.join('、')}</p>
            <p><strong>亮点：</strong>${attraction.highlights.join('、')}</p>
            <p>${attraction.description}</p>
            <a href="detail.html?attraction=${encodeURIComponent(JSON.stringify(attraction))}" class="back-button">查看详情</a>
        `;
        recommendationsContainer.appendChild(recommendationEl);
    });
}

window.addEventListener('load', displayRecommendations);