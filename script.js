<script>
(function () {

    // ================== CONFIG ==================
    const ACCEPT_URL = "https://example.com/accept";

    const rejectPages = [
        "https://example.com/page1",
        "https://example.com/page2",
        "https://example.com/page3"
    ];

    // ================== CSS ==================
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
        z-index:999999999;
        animation:rcwPop .4s ease, rcwBounce 1.2s ease-in-out infinite;
        overflow:hidden;
    }

    .rcw-callbar::before{
        content:"";
        position:absolute;
        inset:0;
        border-radius:18px;
        border:2px solid rgba(37,211,102,.5);
        animation:rcwRing 1.5s infinite;
        pointer-events:none;
    }

    .rcw-info,
    .rcw-actions{
        position:relative;
        z-index:2;
    }

    .rcw-info{
        display:flex;
        align-items:center;
        gap:10px;
    }

    .rcw-info img{
        width:52px;
        height:52px;
        border-radius:50%;
        object-fit:cover;
        animation:rcwAvatar 1s infinite ease-in-out;
        flex-shrink:0;
    }

    .rcw-text h3{
        margin:0;
        font-size:14px;
        font-weight:600;
    }

    .rcw-text p{
        margin:2px 0 0;
        font-size:12px;
        color:#bbb;
    }

    .rcw-actions{
        display:flex;
        gap:12px;
    }

    .rcw-btn{
        width:58px;
        height:58px;
        border:none;
        border-radius:50%;
        cursor:pointer;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        transition:.2s ease;
        flex-shrink:0;
    }

    .rcw-btn:hover{
        transform:scale(1.08);
    }

    .rcw-btn svg{
        width:26px;
        height:26px;
        fill:currentColor;
    }

    .rcw-accept{
        background:#25d366;
    }

    .rcw-reject{
        background:#ff3b30;
    }

    .rcw-reject svg{
        transform:rotate(135deg);
    }

    @keyframes rcwPop{
        from{
            transform:translateY(50px);
            opacity:0;
        }
        to{
            transform:translateY(0);
            opacity:1;
        }
    }

    @keyframes rcwBounce{
        0%,100%{
            transform:translateY(0);
        }
        50%{
            transform:translateY(-8px);
        }
    }

    @keyframes rcwRing{
        0%{
            transform:scale(1);
            opacity:.6;
        }
        100%{
            transform:scale(1.15);
            opacity:0;
        }
    }

    @keyframes rcwAvatar{
        0%,100%{
            transform:scale(1);
        }
        50%{
            transform:scale(1.08);
        }
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

        if(document.querySelector(".rcw-callbar")) return;

        const data = randomCaller();

        const box = document.createElement("div");
        box.className = "rcw-callbar";

        box.innerHTML = `
            <div class="rcw-info">
                <img src="${data.pic}" alt="Caller">
                <div class="rcw-text">
                    <h3>Incoming Call</h3>
                    <p>${data.name}</p>
                </div>
            </div>

            <div class="rcw-actions">

                <button type="button" class="rcw-btn rcw-reject" aria-label="Reject">
                    <svg viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24
                        1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1
                        C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1
                        0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                </button>

                <button type="button" class="rcw-btn rcw-accept" aria-label="Accept">
                    <svg viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24
                        1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1
                        C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1
                        0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                </button>

            </div>
        `;

        document.body.appendChild(box);

        // Accept
        box.querySelector(".rcw-accept").addEventListener("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            window.location.href = ACCEPT_URL;
        });

        // Reject
        box.querySelector(".rcw-reject").addEventListener("click", function(e){
            e.preventDefault();
            e.stopPropagation();

            const randomUrl = rejectPages[
                Math.floor(Math.random() * rejectPages.length)
            ];

            window.location.href = randomUrl;
        });
    }

    // ================== START ==================
    window.addEventListener("load", function(){
        setTimeout(createWidget, 2000);
    });

})();
</script>
