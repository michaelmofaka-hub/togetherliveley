/* =========================================
   YOUR WHATSAPP NUMBER
========================================= */

const phoneNumber = "254118043649";


/* =========================================
   GENERAL BUSINESS ORDER
========================================= */

function orderGeneral() {

    const message =
        "Hi Mama Nakuru 👋 I would like to make an order.";

    openWhatsApp(message);
}


/* =========================================
   PRODUCT ORDER
========================================= */

function orderProduct(product) {

    const message =
        `Hi Mama Nakuru 👋 I would like to order: ${product}.`;

    openWhatsApp(message);
}


/* =========================================
   WEBSITE CUSTOMER
========================================= */

function requestWebsite() {

    const message =
        "Hi Michael 👋 I saw your business website demo. " +
        "I'm interested in getting a website for my business " +
        "for KSh 500. I would like to know how it works.";

    openWhatsApp(message);
}


/* =========================================
   OPEN WHATSAPP
========================================= */

function openWhatsApp(message) {

    const encodedMessage =
        encodeURIComponent(message);

    const url =
        `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
}


/* =========================================
   SHARE WEBSITE
========================================= */

async function shareWebsite() {

    const shareData = {
        title: "Mama Nakuru",
        text: "Check out this business website.",
        url: window.location.href
    };

    if (navigator.share) {

        try {

            await navigator.share(shareData);

        } catch (error) {

            console.log("Share cancelled.");

        }

    } else {

        await navigator.clipboard.writeText(
            window.location.href
        );

        alert(
            "Website link copied! You can now paste it anywhere."
        );
    }
}