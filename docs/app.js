function order(product) {

    const phone = "254118043649";

    const message =
        `Hello, I would like to order ${product}.`;

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
async function shareBusiness() {

    if (navigator.share) {

        await navigator.share({
            title: "Mama Nakuru",
            text: "Check out Mama Nakuru",
            url: window.location.href
        });

    } else {

        await navigator.clipboard.writeText(
            window.location.href
        );

        alert("Business link copied!");
    }
}