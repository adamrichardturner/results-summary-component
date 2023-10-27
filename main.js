const summaryContainer = document.querySelector(".summary__stats__wrapper");
fetch(
  "https://raw.githubusercontent.com/adamrichardturner/results-summary-component/main/data.json"
)
  .then((response) => response.json())
  .then((data) => {
    const dataMap = data
      .map((feature) => {
        return `
                <div class="summary__stats__wrapper__${feature.category.toLowerCase()}">
                    <div class="summary__stats__wrapper__${feature.category.toLowerCase()}-title">
                        <img src="${feature.icon}" alt="${feature.category}" />
                        <h3>${feature.category}</h3>
                    </div>
                    <div class="summary__stats__wrapper__${feature.category.toLowerCase()}-detail">
                        <h3>${feature.score}<span> / 100</span></h3>
                    </div>
                </div>
            `;
      })
      .join("");
    summaryContainer.innerHTML = dataMap;
  });
