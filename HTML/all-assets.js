$.getJSON("wallet.json", function (data) {
    console.log("Data loaded:", data);
  
    const assets = JSON.parse(localStorage.getItem("assets")) || [];
  
    if (assets && assets.length > 0) {
      console.log("Assets Data:", assets);
        // show all assets in the assetsContainer
        assets.forEach((asset) => {
            if (asset && asset.coverImage) {
                let assetContainer = document.createElement("div");
                assetContainer.classList.add("assetContainer");
                assetContainer.setAttribute("data-id", asset.id);
                assetContainer.innerHTML = `
                <div class="assetImage">
              <img src="${asset.coverImage}" alt="Asset Image">
            </div>
            <div class="assetName">
              <p>${asset.name}</p>
            </div>
            <div class="assetCategory">
              <p>${asset.category}</p>
            </div>
            <div class="assetAmount">
              <p>${asset.amount}</p>
            </div>
            <div class="assetStatus">
              <p>${asset.status}</p>
            </div>  
            <div class="assetAction">
              <button class="assetActionButton" onclick="deleteAsset(${asset.id})">Delete</button>
            </div>  
            `;
            document.getElementById("assetsContainer").appendChild(assetContainer);
        }
    });
  
    } else {
      console.log("No assets found in local storage.");
    }
  

  });
  function deleteAsset(id) {
    let assets = JSON.parse(localStorage.getItem("assets")) || [];
    
    assets.splice(id, 1)
    localStorage.setItem("assets", JSON.stringify(assets));
    
    location.reload();
    
    const assetContainer = document.querySelector(`.assetContainer[data-id='${id}']`);
    if (assetContainer) {
        assetContainer.remove();
    }
    console.log(`Asset with ID ${id} deleted.`);
}
  