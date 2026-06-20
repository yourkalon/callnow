(function () {

    // ================== CONFIG (তুমি চাইলে change করো) ==================
    const ACCEPT_URL = "https://example.com/accept";
    const REJECT_URL = "https://example.com/reject";

    const rejectPages = [
        "https://example.com/page1",
        "https://example.com/page2",
        "https://example.com/page3"
    ];

    // ================== CSS INJECT ==================
    const style = document.createElement("style");
    style.innerHTML = `
    .rcw-callbar{
        position:fixed;
        bottom:20px;
        right:20px;
        width:420px;
        background:#111;
        color:#fff;
        border-radius:18px;
        padding:12px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        box-shadow:0 10px 30px rgba(0,0,0,.4);
        font-family:Segoe UI,sans-serif;
        z-index:999999;
        animation:rcwPop .4s ease;
    }

    .rcw-info{
        display:flex;
        align-items:center;
        gap:10px;
    }

    .rcw-info img{
        width:50px;
        height:50px;
        border-radius:50%;
        object-fit:cover;
    }

    .rcw-text h3{
        font-size:14px;
        margin:0;
    }

    .rcw-text p{
        font-size:12px;
        margin:0;
        color:#bbb;
    }

    .rcw-actions{
        display:flex;
        gap:10px;
    }

    .rcw-btn{
        width:42px;
        height:42px;
        border:none;
        border-radius:50%;
        cursor:pointer;
        font-size:16px;
    }

    .rcw-accept{background:#25d366;color:#fff;}
    .rcw-reject{background:#ff3b30;color:#fff;}

    @keyframes rcwPop{
        from{transform:translateY(50px);opacity:0;}
        to{transform:translateY(0);opacity:1;}
    }

    @media(max-width:600px){
        .rcw-callbar{
            width:90%;
            right:5%;
            bottom:10px;
        }
    }
    `;
    document.head.appendChild(style);

// ================== DATA ==================
const names = [
    "নুসরাত জাহান",
    "সিয়াম আহমেদ",
    "তানভীর হাসান",
    "সাদিয়া ইসলাম",
    "মিম আক্তার",
    "আরিফ হোসেন",
    "রহিম খান",
    "জান্নাত আক্তার"
];

    const pics = [
        "https://i.pinimg.com/736x/cc/be/64/ccbe6479e3962436ad5094a6558a0d24.jpg",
        "https://i.pinimg.com/736x/fd/39/27/fd3927291e77f4bbf20a9b3bac4bd604.jpg",
        "https://i.pinimg.com/736x/fd/39/27/fd3927291e77f4bbf20a9b3bac4bd604.jpg",
        "https://i.pinimg.com/1200x/d2/48/71/d24871f2751d2866232dea90523772a6.jpg"
    ];

    function randomCaller(){
        return {
            name: names[Math.floor(Math.random() * names.length)],
            pic: pics[Math.floor(Math.random() * pics.length)]
        };
    }

    // ================== CREATE WIDGET ==================
    function createWidget(){

        const data = randomCaller();

        const box = document.createElement("div");
        box.className = "rcw-callbar";

        box.innerHTML = `
            <div class="rcw-info">
                <img src="${data.pic}">
                <div class="rcw-text">
                    <h3>📞 Incoming Call</h3>
                    <p>${data.name}</p>
                </div>
            </div>

            <div class="rcw-actions">
                <button class="rcw-btn rcw-reject">✖</button>
                <button class="rcw-btn rcw-accept">✔</button>
            </div>
        `;

        document.body.appendChild(box);

        // ================== ACCEPT ==================
        box.querySelector(".rcw-accept").onclick = () => {
            window.location.href = ACCEPT_URL;
        };

        // ================== REJECT ==================
        box.querySelector(".rcw-reject").onclick = () => {
            const randomReject =
                rejectPages[Math.floor(Math.random() * rejectPages.length)];
            window.location.href = randomReject;
        };
    }

    // ================== START ==================
    window.addEventListener("load", () => {
        setTimeout(createWidget, 2000);
    });

})();
