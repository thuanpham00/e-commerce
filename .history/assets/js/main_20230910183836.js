function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const modalCategories = document.querySelector(".modal-categories");
const headerSearchLeft = document.querySelector(".header-search__left");
const modalCategoriesItem = document.querySelectorAll(
    ".modal-categories__item"
);
const categories = document.querySelector(".categories");

window.addEventListener("load", function () {
    headerSearchLeft.addEventListener("click", function (e) {
        modalCategories.classList.toggle("visible");
    });
    [...modalCategoriesItem].forEach((item) =>
        item.addEventListener("click", function (e) {
            [...modalCategoriesItem].forEach((item) =>
                item.classList.remove("hover")
            );
            item.classList.add("hover");
            const text = item.textContent;
            categories.textContent = text;
        })
    );

    // nav
    const navLink = document.querySelectorAll(".nav-list__link");
    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);
    [...navLink].forEach((item) =>
        item.addEventListener("mouseenter", function (e) {
            const cords = e.target.getBoundingClientRect(); // lấy tọa độ
            const { width, height, top, left } = cords;
            line.style.top = `${top + height}px`;
            line.style.left = `${left}px`;
            line.style.width = `${width}px`;
        })
    );
    const navList = document.querySelector(".nav-list");
    navList.addEventListener("mouseleave", function (e) {
        line.style.width = 0;
    });

    // banner
    var img = [
        "assets/img/banner/2.jpg",
        "assets/img/banner/1.jpg",
        "assets/img/banner/3.jpg",
        "assets/img/banner/4.jpg",
        "assets/img/banner/5.jpg",
        "assets/img/banner/6.jpg",
        "assets/img/banner/7.jpg",
        "assets/img/banner/8.jpg",
    ];
    let index = 0;
    const picture = document.querySelector(".banner__picture");
    const buttonLeft = document.querySelector(".left");
    const buttonRight = document.querySelector(".right");
    buttonLeft.addEventListener("click", function (e) {
        index = (index - 1 + img.length) % img.length;
        picture.src = img[index];
    });
    buttonRight.addEventListener("click", function (e) {
        index = (index + 1 + img.length) % img.length;
        picture.src = img[index];
    });
    let lastTitle;
    const random = setInterval(function () {
        const randomPic = img[Math.floor(Math.random() * img.length)];
        if (randomPic != lastTitle) {
            picture.src = randomPic;
        } // đầu tiên randomPic lần thứ 1
        // sau đó randomPic lần thứ 2 kiểm tra nếu
        // randomPic != lastTitle thì thay đổi src
        // còn nếu giống nhau thì bỏ qua
        lastTitle = randomPic;
    }, 5000);

    // recommend scroll
    const buttonRcm__left = document.querySelector(".left-rcm");
    const buttonRcm__right = document.querySelector(".right-rcm");
    const rcmList = document.querySelector(".rcm-2__list");
    buttonRcm__left.addEventListener("click", function (e) {
        const a = rcmList.scrollLeft;
        rcmList.scroll(a - 200, 0);
    });
    buttonRcm__right.addEventListener("click", function (e) {
        const a = rcmList.scrollLeft;
        rcmList.scroll(a + 200, 0);
    });

    // seen-ins scroll
    const seenIns__list = document.querySelector(".seen-ins__list");
    const buttonSeen__left = document.querySelector(".seen-ins__btn.left");
    const buttonSeen__right = document.querySelector(".seen-ins__btn.right");
    buttonSeen__left.addEventListener("click", function (e) {
        const b = seenIns__list.scrollLeft;
        seenIns__list.scroll(b - 800, 0);
        if (seenIns__list.scrollLeft == 0) {
            buttonSeen__left.classList.remove("visible");
        }
        if (seenIns__list.scrollLeft < 3845) {
            buttonSeen__right.classList.add("visible");
        }
    });
    buttonSeen__right.addEventListener("click", function (e) {
        const b = seenIns__list.scrollLeft;
        seenIns__list.scroll(b + 800, 0); // cộng vào tọa độ
        if (seenIns__list.scrollLeft > 10) {
            buttonSeen__left.classList.add("visible");
        }
        if (seenIns__list.scrollLeft == 3844.800048828125) {
            buttonSeen__right.classList.remove("visible");
            buttonRcm__left.classList.add("visible");
        }
        console.log(b);
    });

    // banner
    var img_2 = [
        "assets/img/banner-2/1.webp",
        "assets/img/banner-2/2.webp",
        "assets/img/banner-2/3.webp",
        "assets/img/banner-2/4.webp",
        "assets/img/banner-2/5.webp",
    ];
    let index2 = 0;
    const picture_2 = document.querySelector(".banner__picture.banner-2");
    const buttonLeft_2 = document.querySelector(".left.banner-2");
    const buttonRight_2 = document.querySelector(".right.banner-2");
    buttonLeft_2.addEventListener("click", function (e) {
        index2 = (index2 - 1 + img_2.length) % img_2.length;
        picture_2.src = img_2[index2];
    });
    buttonRight_2.addEventListener("click", function (e) {
        index2 = (index2 + 1 + img_2.length) % img_2.length;
        picture_2.src = img_2[index2];
    });
    let lastTitle2;
    const random2 = setInterval(function () {
        const randomPic2 = img_2[Math.floor(Math.random() * img_2.length)];
        if (randomPic2 != lastTitle2) {
            picture_2.src = randomPic2;
        } // đầu tiên randomPic lần thứ 1
        // sau đó randomPic lần thứ 2 kiểm tra nếu
        // randomPic != lastTitle thì thay đổi src
        // còn nếu giống nhau thì bỏ qua
        lastTitle2 = randomPic2;
    }, 5000);

    // alert
    function createAlert() {
        const template = `<div class="alert">
        <div class="alert__body">
            <div class="alert__circle">
                <i class="fa-solid fa-check"></i>
            </div>
            <span>Welcome to Pham Thuan back to web</span>
        </div>
    </div>`;
        document.body.insertAdjacentHTML("beforeend", template);
    }
    createAlert();
    const alert = document.querySelector(".alert");
    if (alert) {
        setTimeout(function () {
            alert.parentNode.removeChild(alert);
        }, 2000);
    }

    // modal
    function createModal(nameProduct, image, price) {
        const templateModal = `<div class="modal">
        <div class="container">
            <div class="modal__body">
                <figure class="modal__left">
                    <h3 class="modal__heading">
                        ${nameProduct}
                    </h3>
                    <img
                        src="${image}"
                        alt=""
                        class="modal__img"
                    />
                </figure>
                <div class="modal__right">
                    <div class="modal-sold">
                        <img
                            src="./assets/img/home/modal/1.jpg"
                            alt=""
                            class="modal-sold__icon"
                        />
                        <div class="modal-sold__desc">
                            365 sold in Last 3 days!
                        </div>
                    </div>
                    <div class="modal__box">
                        <div class="modal-info">
                            <div class="modal-info__size">Size:</div>
                            <button class="modal-info__all">
                                <span>All</span>
                                <i class="fa-solid fa-arrow-down arrowModal"></i>
                                
                            </button>
                            <div class="modal-tableSize">
                                <div class="modal-tableSize__row">
                                    <span class="modal-tableSize__size">All</span>
                                    <span class="modal-tableSize__price">${price}</span>
                                </div>
                                <div class="modal-tableSize__list row row-cols-lg-3">
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 4</span>
                                        <span class="modal-tableSize__price">$1,327</span>
                                    </div>
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 4.5</span>
                                        <span class="modal-tableSize__price">$600</span>
                                    </div>
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 5</span>
                                        <span class="modal-tableSize__price">$354</span>
                                    </div>
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 5.5</span>
                                        <span class="modal-tableSize__price">$458</span>
                                    </div>
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 6</span>
                                        <span class="modal-tableSize__price">$258</span>
                                    </div>
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 6.5</span>
                                        <span class="modal-tableSize__price">$277</span>
                                    </div>
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 7</span>
                                        <span class="modal-tableSize__price">$304</span>
                                    </div>
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 7.5</span>
                                        <span class="modal-tableSize__price">$327</span>
                                    </div>
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 8</span>
                                        <span class="modal-tableSize__price">$325</span>
                                    </div>
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 8.5</span>
                                        <span class="modal-tableSize__price">$328</span>
                                    </div>
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 9</span>
                                        <span class="modal-tableSize__price">$340</span>
                                    </div>
                                    <div class="modal-tableSize__item">
                                        <span class="modal-tableSize__size sizeUS">US M 9.5</span>
                                        <span class="modal-tableSize__price">$349</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-buy">
                            <div class="modal-buy__btn">
                                <a href="#!" class="modal-buy__link"
                                    >Place Bid</a
                                >
                            </div>
                            <div class="modal-buy__btn btn-2">
                                <a href="#!" class="modal-buy__link"
                                    >Buy for ${price}</a
                                >
                            </div>
                        </div>
                        <div class="modal-quantity">
                            <span>Số lượng</span>
                            <div class="modal-quantity__counter">
                                <button class="modal-quantity__counterLeft">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <span class="modal-quantity__counterNumber">1</span>
                                <button class="modal-quantity__counterRight">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
<div class="modal__priceProduct">
                                <div class="modal__priceProduct-row">
                                    <span class="price">Amount:</span>
                                    <span class="priceAmount">1</span>
                                </div>
                                <div class="modal__priceProduct-row">
                                    <span class="price">Price:</span>
                                    <span class="price">${price}$ </span>
                                </div>
                                <div class="modal__priceProduct-row">
                                    <span class="price">Total:</span>
                                    <span class="price priceTotal">${price}</span>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="modal__icon">
                    <i class="fa-solid fa-x"></i>
                </div>
            </div>
        </div>
    </div>`;
        document.body.insertAdjacentHTML("beforeend", templateModal);
    }
    const rcmImg = document.querySelectorAll(".recommend__pic");
    [...rcmImg].forEach((item) =>
        item.parentNode.parentNode.addEventListener("click", function (e) {
            // item
            const imageModal = e.target.querySelector(".recommend__pic"); // từ item di vào cái hình
            const imageModal2 = imageModal.getAttribute("src");

            const nameProduct = item.nextElementSibling.nextElementSibling;
            const nameProductModal = nameProduct.textContent;

            const priceRcm =
                item.nextElementSibling.nextElementSibling.nextElementSibling
                    .nextElementSibling.querySelector(".recommend__buy").textContent;

            createModal(nameProductModal, imageModal2, priceRcm);
            // xử lý bên trong modal
            const amountProduct = document.querySelector(".priceAmount");
            const numberModal = document.querySelector(
                ".modal-quantity__counterNumber"
            );
            document.body.addEventListener("click", function (e) {
                if (e.target.matches(".modal-quantity__counterLeft")) {
                    const text = parseInt(
                        e.target.nextElementSibling.textContent
                    );
                    const textMinus = text - 1;
                    if(text - 1 < 0) {
                        textMinus = 0;
                    }
                    numberModal.textContent = textMinus;
                    amountProduct.textContent = textMinus;
                } else if (e.target.matches(".modal-quantity__counterRight")) {
                    const text = parseInt(
                        e.target.previousElementSibling.textContent
                    );
                    const textPlus = text + 1;
                    numberModal.textContent = textPlus;
                    amountProduct.textContent = textPlus;
                }
            });
            const total = console.log(priceRcm)
            // console.log(total)
            // xử lý total

            // table size
            const tableSize = document.querySelector(".modal-tableSize");
            const modalInfoAll = document.querySelector(".modal-info__all");
            const iconArrowDown = document.querySelector(
                ".fa-solid.arrowModal"
            );
            modalInfoAll.addEventListener("click", function (e) {
                tableSize.classList.toggle("visible");
                iconArrowDown.classList.toggle("fa-arrow-up");
                iconArrowDown.classList.toggle("fa-arrow-down");
            });

            const sizeUS = document.querySelectorAll(".modal-tableSize__item");
            [...sizeUS].forEach((item) =>
                item.addEventListener("click", function (e) {
                    const textSize = item.querySelector(
                        ".modal-tableSize__size.sizeUS"
                    ).textContent;
                    const modalInfoAll =
                        item.parentNode.parentNode.previousElementSibling;
                    const All = modalInfoAll.querySelector(
                        ".modal-info__all span"
                    );
                    All.textContent = textSize;
                    e.target.parentNode.parentNode.classList.remove("visible");
                })
            );
        })
    );
    // remove modal
    document.body.addEventListener("click", function (e) {
        if (e.target.matches(".modal__icon")) {
            const removeModal = e.target.parentNode.parentNode.parentNode;
            removeModal.parentNode.removeChild(removeModal);
        } else if (e.target.matches(".modal")) {
            e.target.parentNode.removeChild(e.target);
        }
    });
});

// advertisement__banner-sidebar
const banner_advertisement = document.querySelector(".banner");
const bannerHeight = banner_advertisement && banner_advertisement.offsetHeight; // 360
const advertisement1 = document.querySelector(".adver__thumb-1");
const advertisement2 = document.querySelector(".adver__thumb-2");
window.addEventListener(
    "scroll",
    debounceFn(function (e) {
        const pageY = window.scrollY;
        if (pageY > bannerHeight) {
            // bannerHeight == 360
            advertisement1.classList.add("visible");
            advertisement2.classList.add("visible");
        }
        if (pageY == 0) {
            advertisement1.classList.remove("visible");
            advertisement2.classList.remove("visible");
        }
    }, 100)
);
