const names = [
    "Nusrat Jahan",
    "Siam Ahmed",
    "Tanvir Hasan",
    "Sadia Islam",
    "Mim Akter",
    "Arif Hossain",
    "Rahim Khan",
    "Jannat Akter",
    "Rifat Ahmed",
    "Nabila Noor"
];

const profilePics = [
    "https://picsum.photos/id/64/300/300",
    "https://picsum.photos/id/65/300/300",
    "https://picsum.photos/id/66/300/300",
    "https://picsum.photos/id/67/300/300",
    "https://picsum.photos/id/68/300/300",
    "https://picsum.photos/id/69/300/300",
    "https://picsum.photos/id/70/300/300",
    "https://picsum.photos/id/71/300/300",
    "https://picsum.photos/id/72/300/300",
    "https://picsum.photos/id/73/300/300"
];

function setRandomCaller(){
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomPic = profilePics[Math.floor(Math.random() * profilePics.length)];

    document.getElementById("callerName").textContent = randomName;
    document.getElementById("callerPic").src = randomPic;
}

setRandomCaller();

setTimeout(() => {
    document.getElementById("callBar").classList.add("show");
}, 2000);

function rejectCall(){
    document.getElementById("callBar").classList.remove("show");

    setTimeout(() => {
        setRandomCaller();
        document.getElementById("callBar").classList.add("show");
    }, 3000);
}

function acceptCall(){
    alert("✅ Call Accepted");
}
