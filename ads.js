<script>
(function() {
    var keyPhase = 'dv_phase_v4';       
    var keyStep = 'dv_step_v4';         
    var keyCycle = 'dv_cycle_v4';       
    var keyTime = 'dv_time_v4';         
    var keyRest = 'dv_rest_v4';         

    var gapSeconds = 20;                
    var phaseTransitionSeconds = 10;    
    var restHours = 2;                  

    var newDirectLink = 'https://desiviral.net/contenta';
    var link1 = 'https://desiviral.net/contentb';
    var link2 = 'https://desiviral.net/contentc';
    var link4 = 'https://desiviral.net/contentd';

    var profitonSmartlink = 'https://desiviral.net/contente'; 
    var phase2Link3 = 'https://desiviral.net/contentf'; 
    var newPhase2Link1 = 'https://desiviral.net/contentg';
    var newPhase2Link2 = 'https://desiviral.net/contenth';

    var isTelegram = (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData.length > 0);
    if (isTelegram) { window.Telegram.WebApp.expand(); }

    function isSafeZone(target) {
        if (target.closest('#customAgeGate') || 
            target.closest('#ageGateOverlay') || 
            target.closest('.age-verify-btn') || 
            target.closest('#sidebar') || 
            target.closest('#sidebarOverlay') || 
            target.closest('header') || 
            target.closest('.nopop')) { 
            return true; 
        }
        return false; 
    }

    function openSmartPopunder(url, event) {
        if (isTelegram) {
            window.Telegram.WebApp.openLink(url, {try_instant_view: false});
        } else {
            var targetLink = event.target.closest('a');

            if (targetLink && targetLink.href) {
                var newContentTab = window.open(targetLink.href, "_blank"); 
                if (newContentTab) {
                    event.preventDefault(); 
                    window.location.href = url;
                } else {
                    window.open(url, "_blank");
                }
            } else {
                window.open(url, "_blank");
            }
        }
    }

    document.addEventListener('click', function(e) {
        if (isSafeZone(e.target)) return;

        var now = Date.now();
        var restUntil = parseInt(localStorage.getItem(keyRest) || 0);

        if (now < restUntil) {
            console.log("Ads are resting...");
            return;
        }

        var lastTime = parseInt(localStorage.getItem(keyTime) || 0);
        var currentPhase = parseInt(localStorage.getItem(keyPhase) || 1);
        var currentStep = parseInt(localStorage.getItem(keyStep) || 1);
        var cycleCount = parseInt(localStorage.getItem(keyCycle) || 0);

        var isTransitionClick = (currentStep === 1 && cycleCount === 0 && (currentPhase === 2 || currentPhase === 3));
        var requiredDelay = isTransitionClick ? (phaseTransitionSeconds * 1000) : (gapSeconds * 1000);

        if (lastTime !== 0 && (now - lastTime) < requiredDelay) {
            console.log("Waiting for delay...");
            return;
        }

        if (currentPhase === 1 || currentPhase === 3) {
            if (currentStep === 1) {
                 openSmartPopunder(newDirectLink, e); 
            } 
            else if (currentStep === 2) openSmartPopunder(link2, e);
            else if (currentStep === 3) openSmartPopunder(link1, e);
            else if (currentStep === 4) openSmartPopunder(link4, e);
        } 
        else if (currentPhase === 2) {
            var phase2Ads = [
                function() { openSmartPopunder(profitonSmartlink, e); },
                function() { openSmartPopunder(phase2Link3, e); },
                function() { openSmartPopunder(newPhase2Link1, e); },
                function() { openSmartPopunder(newPhase2Link2, e); }
            ];

            var randomIndex = Math.floor(Math.random() * phase2Ads.length);
            phase2Ads[randomIndex]();
        }

        localStorage.setItem(keyTime, now);
        currentStep++;

        if (currentPhase === 1) {
            if (currentStep > 4) { currentStep = 1; cycleCount++; }
            if (cycleCount >= 2) { currentPhase = 2; cycleCount = 0; }
        } 
        else if (currentPhase === 2) {
            if (currentStep > 4) { currentStep = 1; cycleCount++; } 
            if (cycleCount >= 3) { currentPhase = 3; cycleCount = 0; }
        }
        else if (currentPhase === 3) {
            if (currentStep > 4) { currentStep = 1; cycleCount++; }
            if (cycleCount >= 1) { 
                var restTimeEnd = now + (restHours * 60 * 60 * 1000);
                localStorage.setItem(keyRest, restTimeEnd);
                currentPhase = 1; cycleCount = 0; currentStep = 1;
            }
        }

        localStorage.setItem(keyPhase, currentPhase);
        localStorage.setItem(keyStep, currentStep);
        localStorage.setItem(keyCycle, cycleCount);

    }, true); 

})();
</script>
<script>
    window.addEventListener('load', function() {
        setTimeout(function() {
            var adScript = document.createElement('script');
            adScript.src = "https://hatsharmonyarab.com/dc/83/a8/dc83a865a08e44e8f6e59c3b16710664.js";
            document.body.appendChild(adScript);
        }, 3000); 
    });
</script>
