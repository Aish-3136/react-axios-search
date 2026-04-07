async function getCrypto(){
    const crypto = document.getElementById("cryptoInput").value.trim().toLowerCase();
    if(!crypto){
        alert("Enter a cryptocurrency");
        return;
    }

    try{
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto}`);
        if(!response.ok) throw new Error("Crypto not found");

        const data = await response.json();

        document.getElementById("name").innerText = data.name;
        document.getElementById("price").innerText = "Price: $" + data.market_data.current_price.usd.toLocaleString();
        document.getElementById("change").innerText = "24h Change: " + data.market_data.price_change_percentage_24h.toFixed(2) + "%";
        document.getElementById("marketCap").innerText = "Market Cap: $" + data.market_data.market_cap.usd.toLocaleString();
        document.getElementById("logo").src = data.image.small;

        // Dynamic background
        const body = document.getElementById("body");
        if(data.market_data.price_change_percentage_24h >= 0){
            body.style.background = "linear-gradient(#56ab2f,#a8e063)"; // green
        } else {
            body.style.background = "linear-gradient(#cb2d3e,#ef473a)"; // red
        }

    }catch(e){
        alert("Cryptocurrency not found");
    }
}

// Allow Enter key
document.getElementById("cryptoInput").addEventListener("keyup", function(event){
    if(event.key === "Enter") getCrypto();
});
