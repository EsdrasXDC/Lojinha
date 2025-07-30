// document.querySelector("#trocatema").addEventListener("click", () => {})
$("#trocatema").on("click", function () {
    var body = document.querySelector("body")
    console.log(body)


    if (body.classList.contains("temaclaro")) {
        body.classList.replace("temaclaro", "temaescuro")
        $("#trocatema").text("🌑")
    } else {
        body.classList.replace("temaescuro", "temaclaro")
        $("#trocatema").text("☀")
    }


})
$("#secaoprodutos").hide(0)
$("#secaoprodutos").show(500)

var produtos 