(function () {
    const UNLOCK_KEY = "unlocked";
    const isProtected = location.pathname.includes("/app/");

    if (isProtected && localStorage.getItem(UNLOCK_KEY) !== "1") {
        const next = location.pathname + location.search + location.hash;
        sessionStorage.setItem("next", next);
        location.replace("../index.html");
    }
})();
