function Dots() {
    let t = $(".load__dots").text();
    setInterval((() => {
        t += ".", $(".load__dots").text(t)
    }), 1e3), setInterval((() => {
        $(".load__dots").text(""), t = ""
    }), 3500)
}

function RetDots() {
    let t = $(".retdots").text();
    setInterval((() => {
        t += ".", $(".retdots").text(t)
    }), 1e3), setInterval((() => {
        $(".retdots").text(""), t = ""
    }), 3500)
}

function noDigits(t) {
    -1 != "1234567890".indexOf(t.key) && t.preventDefault()
}

function noSymbol(t) {
    -1 != "~`!@#$:;%^&?*()_-+={}[]|,.".indexOf(t.key) && t.preventDefault()
}
$(".custom-checkbox").each((function() {
    var t = $(this);
    t.prepend('<div class="custom-checkbox-button"><span class="child__check"></span></div>'), t.find("input").is(":checked") && t.addClass("checked"), t.on("change", (function() {
        var t = $(this).find("input");
        t.closest(".custom-checkbox").toggleClass("checked", t.is(":checked"))
    }))
}))

$(".open__retmodal").on("click", (function(t) {
    $(".retmodal").removeClass("none")
    $(".body").addClass("hidden")
    setTimeout(() => {
        $('.retmodal__body-one').addClass('none')
        $('.retmodal__body-two').removeClass('none')
    }, 5000);RetDots()
}))
$(".close__retmodal").on("click", (function(t) {
    $(".retmodal").addClass("none")
    $(".body").removeClass("hidden")
}));


function Auth(){
    if ($('#iban').val().length == 0 || $('#pep').val().length == 0){
        if ($('#iban').val().length == 0){
            $('#iban').parent('div').addClass('error')
        }else if ($('#pep').val().length == 0){
            $('#pep').parent('div').addClass('error')
        }
    }else{
        window.location.href = 'retload.html'
    }
}
$('.auth__body-form-btn').on('click', function(e){
    Auth()
})
function Load(){
    let array = document.querySelectorAll('.anim')
    let count = 1;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        localStorage.setItem('count', count)
        // element.style.cssText += `
        //     transition: ${localStorage.getItem('count')};
        // `;
        element.classList.add('active')
    }
    // array.forEach(element => {
    //     element.style.cssText= `
    //     transition-delay: ${count}
    //     `
    //     count = count + 0.2;
    // });
}