(function () {
    const PASSWORD = "0812"; // ⚠️ 가림막이므로 노출 가능
    const UNLOCK_KEY = "unlocked";

    function submit() {
        const pw = document.getElementById("pw").value;
        const err = document.getElementById("err");

        if (pw === PASSWORD) {
            localStorage.setItem(UNLOCK_KEY, "1");
            const next = sessionStorage.getItem("next") || "./app/home.html";
            sessionStorage.removeItem("next");
            location.href = next;
        } else {
            err.textContent = "비밀번호가 틀렸습니다.";
        }
    }

    document.getElementById("btn").addEventListener("click", submit);
    document.getElementById("pw").addEventListener("keydown", (e) => {
        if (e.key === "Enter") submit();
    });
})();
