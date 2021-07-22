function fileAdd(elem) {
    let vot = $(".card").clone(true).eq(0).addClass(`show-${elem.id}`);
    $(".products").append(vot);
}

function fileText(elem) {
    $(`.show-${elem.id} .headlines`).text(elem.title);
    $(`.show-${elem.id} .description-text`).text(elem.description);
    $(`.show-${elem.id} .important-text`).text("Rp " + elem.price);
    $(`.show-${elem.id} .card-img img`).attr("src", elem.image);
    $(`.show-${elem.id} .card-img img`).attr("alt", elem.category);

}

$(document).ready(() => {
    $(".button-more").on("click", () => {
        for (let i = 1; i <= 8; i++) {
            fetch(`https://fakestoreapi.com/products/${i}`)
                .then(res => res.json())
                .then(elem => {
                    fileAdd(elem);
                    fileText(elem);
                })
        }
        $(".button-more").css({ display: "none" })
    })
})


$('.arrow-next').on('click', function () {
    var carusel = $(this).parents('.inspirations');
    right_carusel(carusel);
});

$(".arrow-prev").on('click', function () {
    var carusel = $(this).parents('.inspirations');
    left_carusel(carusel);
});

function left_carusel(carusel) {
    $(carusel).find(".gallery-el").eq(-1).prependTo($(carusel).find(".gallery-contaner"));
    checkPhotoPrev(carusel);
    let elem = $('.inspirations .bot');
    let i = 0;
    for (i; i <= elem.length; i++) {
        if (elem[i].className === "bot active") {
            if (i == 0) {
                return $(carusel).find(".bot").removeClass("active").eq(-1).addClass("active");
            }
            elem[i].className = 'bot';
            elem[i].previousElementSibling.className = "bot active";
            return
        }
    }
}

function right_carusel(carusel) {
    $(carusel).find(".gallery-el").eq(0).appendTo($(carusel).find(".gallery-contaner"));
    checkPhoto(carusel);
    let elem = $('.inspirations .bot');
    const elemsLength = elem.length
    let i = 0;
    for (i; i <= elem.length; i++) {
        if (elem[i].className === "bot active") {
            if (i == elemsLength - 1) {
                return $(carusel).find(".bot").removeClass("active").eq(0).addClass("active");
            }
            elem[i].className = 'bot';
            elem[i].nextElementSibling.className = "bot active";
            return
        }
    }
}

function checkPhoto(carusel) {
    let photo = $(".inspirations .gallery-el");
    const elemsLength = photo.length
    let j = 0;
    for (j; j <= photo.length; j++) {
        if (photo[j].className === "gallery-el active") {
            if (j == elemsLength - 1) {
                return $(carusel).find(".gallery-el").removeClass("active").eq(0).addClass("active");
            }
            photo[j].className = 'gallery-el';
            photo[j].nextElementSibling.className = "gallery-el active";
            return
        }
    }
}

function checkPhotoPrev(carusel) {
    let photo = $(".inspirations .gallery-el");
    let j = 0;
    for (j; j <= photo.length; j++) {
        if (photo[j].className === "gallery-el active") {
            if (j == 2) {
                return $(carusel).find(".gallery-el").removeClass("active").eq(1).addClass("active");
            }
            photo[j].className = 'gallery-el';
            photo[j].nextElementSibling.className = "gallery-el active";
            return
        }
    }
}


$(".header .button:first").on("click", () => console.log("Show all the products"));
$(".header .button:last").on("click", () => console.log("Show all the rooms"));
$(".header .muse").on("click", () => console.log("You have selected the inspirations section"));
$(".header .heart").on("click", () => console.log("All likes"));
$(".header .cart").on("click", () => console.log("It is my cart"));
$(".header .guise").on("click", () => console.log("View profile"));
$(".contaner .button-link").on("click", () => console.log("You have selected the Shop Now section"));
$(".effect .effect-btn").on("click", () => console.log("You have added to cart"));
$(".effect .share").on("click", () => console.log("I will share with you"));
$(".effect .like").on("click", () => console.log("I like"));
$(".product .button-more").on("click", () => console.log("I really like it, I want to see more"));
$(".form .submit").on("click", () => console.log("I will subscribe to be the first"));


$(".header-smart").on("click", () => {
    $(".hamburger").toggleClass("active");
    $(".header-effect").toggleClass("active");
})


$(document).ready(function () {
    let vot = $(".contaner").width() + 17;
    if (vot <= 1024) {
        $('.choice').on('click', function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
})