document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    if (lazyImage.tagName == "SOURCE") {
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");
                        lazyImageObserver.unobserve(lazyImage);
                    } else {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove("lazy");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

function showVisible() {
    if (window.pageYOffset >= sticky) {
        navFixed.classList.add("sticky")
    } else {
        navFixed.classList.remove("sticky");
    }
}

let navFixed = document.getElementById("nav-fixed");
let sticky = navFixed.offsetTop;
window.onscroll = showVisible;
showVisible();


function fileAdd(elem) {
    let vot = $(".card").clone(true).eq(0).addClass(`show-${elem.id}`);
    $(".products").append(vot);
}

function fileText(elem) {
    $(`.show-${elem.id} .headlines`).text(elem.title);
    $(`.show-${elem.id} .description`).text(elem.description);
    $(`.show-${elem.id} .spashil-price`).text("Rp " + elem.price);
    $(`.show-${elem.id} .normal-price`).text("");
    $(`.show-${elem.id} .card-img img`).attr("src", elem.image);
    $(`.show-${elem.id} .card-img source`).attr("srcset", elem.image);
    $(`.show-${elem.id} .card-img img`).attr("alt", elem.category);

}

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

    $(".smart-menu").on("click", function () {
        $(".hamburger").toggleClass("active");
        $(".nav-content").toggleClass("active");
    })

    $(".button[data-toggle]").on("click", function () {
        this.nextElementSibling.classList.toggle("active");
        if ($(".dropdown-menu").hasClass("active")) {
            $(this).css("background-color", "white");
        } else {
            $(this).css("background-color", "");
        }
    })

    $(".popup").on("click", function () {
        $(this).toggleClass("show");
        let text = document.createElement("span");
        if ($(this).hasClass("show")) {
            text.className = "popuptext"
            text.innerHTML = $(this).attr("aria-label");
            $(this).append(text);
        } else {
            $(".popuptext").remove()
        }
    })

})
