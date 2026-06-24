<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}
body{
    background:#f5f5f5;
}


/* Header */
header{
    width:100%;
    height:65px;
    background:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 15px;

    box-shadow:0 2px 8px rgba(0,0,0,.08);

    border-bottom:1px solid #e5e5e5;
}



/* Logo */
.logo img{
    height:40px;
    width:auto;
    display:block;
}

/* Small Fake Menu */
.fake-menu{
    width:24px;
    display:flex;
    flex-direction:column;
    gap:4px;
    cursor:default;
    user-select:none;
}

.fake-menu span{
    width:100%;
    height:3px;
    background:#222;
    border-radius:10px;
}



@media (max-width:600px){

    header{
        height:60px;
        padding:0 12px;
    }

    .logo img{
        height:35px;
    }

    .fake-menu{
        width:20px;
        gap:3px;
    }

    .fake-menu span{
        height:2.5px;
    }
}
</style>



<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#f5f5f5;
    font-family:Arial,sans-serif;
    
}

.container{

    margin:auto;
    background:#fff;
    overflow:hidden;
    box-shadow:0 2px 15px rgba(0,0,0,.08);
}

.content{
    padding:16px;
}

.title{
    font-size:26px;
    font-weight:700;
    color:#111;
    line-height:1.3;
}

.badge{
    display:inline-block;
    margin-left:6px;
    padding:4px 8px;
    border-radius:4px;
    background:#ff2d2d;
    color:#fff;
    font-size:11px;
    font-weight:600;
}

/* PLAYER */

.player{
    position:relative;
    width:100%;
    aspect-ratio:16/9;
    background:#000;
}

.play-btn{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:70px;
    height:50px;
    background:#ff0000;
    border-radius:12px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    font-size:24px;
}

.controls{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    padding:12px;
    background:linear-gradient(
        transparent,
        rgba(0,0,0,.9)
    );
}

.progress{
    width:100%;
    height:4px;
    background:#555;
    border-radius:20px;
    overflow:hidden;
}

.progress-fill{
    width:3%;
    height:100%;
    background:#ff0000;
}

.control-row{
    margin-top:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#fff;
    font-size:14px;
}

.left,
.right{
    display:flex;
    gap:12px;
    align-items:center;
}

/* ACTIONS */

.actions{
    background:#C7C5C5;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:10px 10px;
}

.item{
    text-decoration:none;
    color:#111;
    text-align:center;
}

.item i{
    display:block;
    font-size:20px;
    margin-bottom:5px;
}

.item small{
    color:#555;
}

.download{
    color:#ea580c;
}

@media(max-width:600px){
    .title{
        font-size:20px;
    }

    .play-btn{
        width:60px;
        height:42px;
        font-size:20px;
    }

    .item i{
        font-size:18px;
    }
}
</style>


<header>

    <!-- Logo Image -->
    <div class="logo">
        <img src="https://assets-cdn77.xvideos-cdn.com/v3/img/skins/default/logo/xvideos.black.svg" alt="Logo">
    </div>

    <!-- Fake Menu (Click korleo kaj korbe na) -->
    <div class="fake-menu">
        <span></span>
        <span></span>
        <span></span>
    </div>

</header>




<div class="container">

    <div class="content">
        <h1 class="title">
            I fuck my stepmother's fat best friend-Angel, Hanna and Alicia
            <span class="badge">1080P</span>
            <span class="badge">11 MIN</span>
        </h1>
    </div>

    <div class="player">

        <!-- PLAY BUTTON LINK -->
        <a href="https://example.com/video"
           target="_blank"
           class="play-btn">
            <i class="fas fa-play"></i>
        </a>

        <div class="controls">

            <div class="progress">
                <div class="progress-fill"></div>
            </div>

            <div class="control-row">

                <div class="left">
                    <i class="fas fa-play"></i>
                    <i class="fas fa-volume-high"></i>
                    <span>00:00 / 11:16</span>
                </div>

                <div class="right">
                    <i class="fas fa-gear"></i>
                    <i class="fas fa-expand"></i>
                </div>

            </div>

        </div>

    </div>

    <div class="actions">

        <div class="item">
            <i class="fas fa-thumbs-up"></i>
            <small>962K</small>
        </div>

        <div class="item">
            <i class="fas fa-thumbs-down"></i>
            <small>1%</small>
        </div>

        <div class="item">
            <i class="fas fa-comment"></i>
            <small>34</small>
        </div>

        <!-- DOWNLOAD BUTTON LINK -->
        <a href="https://example.com/download"
           target="_blank"
           class="item">
            <i class="fas fa-download download"></i>
            <small>Download</small>
        </a>

        <div class="item">
            <i class="fas fa-flag"></i>
            <small>Report</small>
        </div>

    </div>

</div>
