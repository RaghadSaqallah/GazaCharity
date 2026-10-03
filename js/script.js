
$(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,   // سرعة التحديث
        time: 1200   // الوقت المستغرق ليكتمل العد (بالمللي ثانية)
    });
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        rtl: true, // مهم جداً لأن الموقع بالعربي
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        touchDrag: true,
        center: true, // لتفعيل خاصية تكبير وتوسيط الكارد الأوسط
        navText: [
            '<i class="fa-solid fa-chevron-right"></i>',
            '<i class="fa-solid fa-chevron-left"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

// home page
const name = document.getElementById("name");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");
const btnSend = document.getElementById("btn-send");
const form = document.getElementById("send-form");
// end of var validator

// start side list var
const btnList = document.querySelector(".btn-list"); // font awesome list drop
const ul = document.getElementById("nav-menu");
const xBtn = document.getElementById("x");

// side list 
btnList.onclick = () => {
    // if (ul.classList.contains("ul-hidden")) {
    // ul.classList.remove("ul-hidden");
    ul.style.left = "0px";
    xBtn.classList.remove("hidden");
    // }
};

xBtn.onclick = () => {
    // ul.classList.add("ul-hidden");
    ul.style.left = "-300px";
    xBtn.classList.add("hidden");
};


// contact form

document.addEventListener('DOMContentLoaded', function () {
    var sendBtn = document.getElementById('send');
    var statusEl = document.getElementById('status');
    var WHATSAPP_NUMBER = '972593419076';

    function showStatus(message, ok) {
        if (!statusEl) return;
        statusEl.textContent = message;
        statusEl.className = 'min-h-[1.5rem] text-sm ' + (ok ? 'text-olive' : 'text-melon');
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', function () {
            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var msg = document.getElementById('msg');

            if (!name.value.trim()) {
                showStatus('اكتب اسمك من فضلك.', false);
                name.focus();
                return;
            }

            var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
            if (!emailOk) {
                showStatus('أدخل بريد إلكتروني صحيح.', false);
                email.focus();
                return;
            }

            if (msg.value.trim().length < 5) {
                showStatus('اكتب رسالتك (5 أحرف على الأقل).', false);
                msg.focus();
                return;
            }

            var text =
                'رسالة من موقع الجمعية\n' +
                'الاسم: ' + name.value.trim() + '\n' +
                'البريد: ' + email.value.trim() + '\n' +
                'الرسالة: ' + msg.value.trim();

            window.open(
                'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text),
                '_blank', 'noopener'
            );

            showStatus('تم فتح واتساب. اضغطي إرسال هناك لإكمال الرسالة.', true);
            name.value = '';
            email.value = '';
            msg.value = '';
        });
    }
});