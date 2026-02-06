
function cmGetIframeHeight(iframe) {
    iframe.contentWindow.postMessage("getFrameHeight", "*");
}
function cmOnMessage(event) {
    if (event.data.hasOwnProperty("frameHeight")) {
        document.getElementById("cm-popup-iframe").height = event.data.frameHeight;        
    }
}
function cmAddModalContent() {
    var style = document.createElement('style');
    style.innerHTML = `
        #cm-popup-overlay {
            opacity: 0;
            animation-name: fadein;
            animation-duration: 1s;
            animation-delay: .5s;
            animation-fill-mode: forwards;
        }
        #p-container {
            position: relative;
            width: min(545px, 90vw);
            margin: 100px auto;
        }
        #cm-popup-iframe {
            width: 100%;
            border-radius: 4px;
        }
        .pq-popup-card {
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
            padding: 18px 18px 0 18px;
            margin-bottom: 12px;
        }
        .pq-popup-logo {
            height: 42px;
            width: auto;
            max-width: 220px;
            display: block;
            margin-bottom: 10px;
        }
        .pq-popup-title {
            font-size: 22px;
            line-height: 1.2;
            margin: 0 0 8px 0;
            color: #1f1f1f;
        }
        .pq-popup-text {
            font-size: 15px;
            line-height: 1.5;
            color: #4a4a4a;
            margin: 0 0 16px 0;
        }
        @media only screen and (max-width: 760px) {
            #p-container { width: 100%; margin: 0; }
            #cm-popup-iframe { width: 100%; border-radius: 0px;}
            .pq-popup-card { border-radius: 0; margin-bottom: 0; }
        }
        @keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    var o = document.createElement("div");
    o.innerHTML = `
    <div id="cm-popup-overlay" style="position:fixed; background:rgba(48, 69, 92, 0.1200); z-index:99999; height:100%; width:100%; top:0; left:0; overflow-y:auto;">
        <div id="p-container">
            <div class="pq-popup-card">
                <img class="pq-popup-logo" src="images/logotransparent.png" alt="Parche Queer">
                <h2 class="pq-popup-title">Comunidad, ofertas y acción en Parche Queer</h2>
                <p class="pq-popup-text">Recibe novedades de emprendimientos, eventos locales y oportunidades para apoyar marcas diversas en Colombia.</p>
            </div>
            <div id="cmsgpf-close-btn"
                style="height:16px;width:16px;display:inline-block;position:absolute;cursor:pointer;top:0;right:0;margin-top:10px;margin-right:10px;">
                <svg viewBox="0 0 512 512" fill="#987fb8">
                    <path
                        d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"
                        fillRule="evenodd" />
                </svg>
            </div>
            <iframe id="cm-popup-iframe" onload="cmGetIframeHeight(this)" title="Formulario de suscripción"
                src="popup-form.html" width="545" height="935"
                frameborder="0" marginwidth="0" margin="0" height="0" scrolling="no" allowfullscreen></iframe>
        </div>
    </div>`;
    document.getElementsByTagName("body")[0].appendChild(o); 
    var c = document.getElementById("cmsgpf-close-btn"); 
    c.onclick = function () { 
        document.getElementById("cm-popup-overlay").style.display = "none" 
        window.localStorage.setItem("cmsgpf-last-closed", new Date());
    }; 
}
document.addEventListener("DOMContentLoaded", function(){
    var t = 10000;
    window.addEventListener('message', cmOnMessage);
    setTimeout(() => { 
        var e = window.localStorage.getItem("cmsgpf-last-closed");
        var expire = new Date(e); 
        expire.setSeconds(expire.getSeconds() + 604800);
        if (isNaN(expire) || new Date() > expire) {
            cmAddModalContent();
        }
    }, t);
});