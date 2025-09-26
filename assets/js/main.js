<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dubai Info Hub 24/7 - Ingyenes Tanácsok</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Egyedi stílusok -->
    <style>
        body {
            background: linear-gradient(135deg, #1e40af 0%, #f59e0b 50%, #dc2626 100%);
            min-height: 100vh;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .language-btn {
            transition: all 0.3s ease;
        }
        .language-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .webcam-frame {
            border: 3px solid #f59e0b;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        .pulse-animation {
            animation: pulse 2s infinite;
        }
    </style>
</head>
<body>
    
    <!-- Cookie/GDPR Banner -->
    <div id="cookieBanner" class="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50" style="display: none;">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-sm">
                🍪 Ez az oldal cookie-kat használ a jobb felhasználói élmény érdekében. Folytatással elfogadod a szabályzatot.
            </p>
            <div class="flex gap-3">
                <button onclick="acceptCookies()" class="bg-green-600 px-4 py-2 rounded text-sm hover:bg-green-700">Elfogadom</button>
                <button onclick="rejectCookies()" class="bg-gray-600 px-4 py-2 rounded text-sm hover:bg-gray-700">Elutasítom</button>
            </div>
        </div>
    </div>

    <!-- Nyelvválasztó betöltő -->
    <div id="language-container"></div>

    <!-- Fő tartalom -->
    <main class="container mx-auto px-4 py-8">
        <div class="max-w-7xl mx-auto">
            
            <!-- Header betöltő -->
            <div id="header-container"></div>

            <!-- Webcam szekció betöltő -->
            <div id="webcam-container"></div>

            <!-- Időjárás szekció betöltő -->
            <div id="weather-container"></div>

            <!-- Strandok szekció betöltő -->
            <div id="beaches-container"></div>

            <!-- Tippek szekció betöltő -->
            <div id="tips-container"></div>

            <!-- Hírlevél szekció betöltő -->
            <div id="newsletter-container"></div>

        </div>
    </main>

    <!-- Footer betöltő -->
    <div id="footer-container"></div>

    <!-- Betöltési indikátor -->
    <div id="loading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-8 text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-700">Dubai Hub betöltése...</p>
        </div>
    </div>

    <!-- JavaScript -->
    <script src="assets/js/main.js"></script>
    
    <!-- Betöltés befejezése -->
    <script>
        // Betöltési indikátor elrejtése
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
            }, 1000);
        });
    </script>

</body>
</html>
