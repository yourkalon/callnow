(function () {

    const redirectLink = "https://example.com"; // 👈 এখানে তোমার লিংক দাও

    // ===== CSS inject =====
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

    .rcw-info{display:flex;align-items:center;gap:10px;}

    .rcw-info img{
        width:50px;height:50px;border-radius:50%;object-fit:cover;
    }

    .rcw-text h3{font-size:14px;margin:0;}
    .rcw-text p{font-size:12px;margin:0;color:#bbb;}

    .rcw-actions{display:flex;gap:10px;}

    .rcw-btn{
        width:42px;height:42px;
        border:none;border-radius:50%;
        cursor:pointer;font-size:16px;
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

    // ===== Data =====
    const names = [
        "Nusrat Jahan",
        "Siam Ahmed",
        "Tanvir Hasan",
        "Sadia Islam",
        "Mim Akter",
        "Arif Hossain"
    ];

    const pics = [
        "https://picsum.photos/id/64/200/200",
        "https://picsum.photos/id/65/200/200",
        "https://picsum.photos/id/66/200/200",
        "https://picsum.photos/id/67/200/200"
    ];

    function randomCaller(){
        return {
            name: names[Math.floor(Math.random() * names.length)],
            pic: pics[Math.floor(Math.random() * pics.length)]
        };
    }

    function goRedirect(){
        window.location.href = redirectLink;
    }

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

        // accept → redirect
        box.querySelector(".rcw-accept").onclick = () => {
            goRedirect();
        };

        // reject → redirect
        box.querySelector(".rcw-reject").onclick = () => {
            goRedirect();
        };
    }

    window.addEventListener("load", () => {
        setTimeout(createWidget, 2000);
    });

})();
