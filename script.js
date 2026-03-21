const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');

const imageNames = [
    'Koi_fish_swimming_202603211424(1)_003.jpg',
    'Koi_fish_swimming_202603211424(1)_004.jpg',
    'Koi_fish_swimming_202603211424(1)_005.jpg',
    'Koi_fish_swimming_202603211424(1)_006.jpg',
    'Koi_fish_swimming_202603211424(1)_007.jpg',
    'Koi_fish_swimming_202603211424(1)_008.jpg',
    'Koi_fish_swimming_202603211424(1)_009.jpg',
    'Koi_fish_swimming_202603211424(1)_010.jpg',
    'Koi_fish_swimming_202603211424(1)_011.jpg',
    'Koi_fish_swimming_202603211424(1)_012.jpg',
    'Koi_fish_swimming_202603211424(1)_013.jpg',
    'Koi_fish_swimming_202603211424(1)_014.jpg',
    'Koi_fish_swimming_202603211424(1)_015.jpg',
    'Koi_fish_swimming_202603211424(1)_016.jpg',
    'Koi_fish_swimming_202603211424(1)_017.jpg',
    'Koi_fish_swimming_202603211424(1)_018.jpg',
    'Koi_fish_swimming_202603211424(1)_019.jpg',
    'Koi_fish_swimming_202603211424(1)_020.jpg',
    'Koi_fish_swimming_202603211424(1)_021.jpg',
    'Koi_fish_swimming_202603211424(1)_022.jpg',
    'Koi_fish_swimming_202603211424(1)_023.jpg',
    'Koi_fish_swimming_202603211424(1)_024.jpg',
    'Koi_fish_swimming_202603211424(1)_025.jpg',
    'Koi_fish_swimming_202603211424(1)_026.jpg',
    'Koi_fish_swimming_202603211424(1)_027.jpg',
    'Koi_fish_swimming_202603211424(1)_028.jpg',
    'Koi_fish_swimming_202603211424(1)_029.jpg',
    'Koi_fish_swimming_202603211424(1)_030.jpg',
    'Koi_fish_swimming_202603211424(1)_031.jpg',
    'Koi_fish_swimming_202603211424(1)_032.jpg',
    'Koi_fish_swimming_202603211424(1)_033.jpg',
    'Koi_fish_swimming_202603211424(1)_034.jpg',
    'Koi_fish_swimming_202603211424(1)_035.jpg',
    'Koi_fish_swimming_202603211424(1)_036.jpg',
    'Koi_fish_swimming_202603211424(1)_037.jpg',
    'Koi_fish_swimming_202603211424(1)_038.jpg',
    'Koi_fish_swimming_202603211424(1)_039.jpg',
    'Koi_fish_swimming_202603211424(1)_040.jpg',
    'Koi_fish_swimming_202603211424(1)_041.jpg',
    'Koi_fish_swimming_202603211424(1)_042.jpg',
    'Koi_fish_swimming_202603211424(1)_043.jpg',
    'Koi_fish_swimming_202603211424(1)_044.jpg',
    'Koi_fish_swimming_202603211424(1)_045.jpg',
    'Koi_fish_swimming_202603211424(1)_046.jpg',
    'Koi_fish_swimming_202603211424(1)_047.jpg',
    'Koi_fish_swimming_202603211424(1)_048.jpg',
    'Koi_fish_swimming_202603211424(1)_049.jpg',
    'Koi_fish_swimming_202603211424(1)_050.jpg',
    'Koi_fish_swimming_202603211424(1)_051.jpg',
    'Koi_fish_swimming_202603211424(1)_052.jpg',
    'Koi_fish_swimming_202603211424(1)_053.jpg',
    'Koi_fish_swimming_202603211424(1)_054.jpg',
    'Koi_fish_swimming_202603211424(1)_055.jpg',
    'Koi_fish_swimming_202603211424(1)_056.jpg',
    'Koi_fish_swimming_202603211424(1)_057.jpg',
    'Koi_fish_swimming_202603211424(1)_058.jpg',
    'Koi_fish_swimming_202603211424(1)_059.jpg',
    'Koi_fish_swimming_202603211424(1)_060.jpg',
    'Koi_fish_swimming_202603211424(1)_061.jpg',
    'Koi_fish_swimming_202603211424(1)_062.jpg',
    'Koi_fish_swimming_202603211424(1)_063.jpg',
    'Koi_fish_swimming_202603211424(1)_064.jpg',
    'Koi_fish_swimming_202603211424(1)_065.jpg',
    'Koi_fish_swimming_202603211424(1)_066.jpg',
    'Koi_fish_swimming_202603211424(1)_067.jpg',
    'Koi_fish_swimming_202603211424(1)_068.jpg',
    'Koi_fish_swimming_202603211424(1)_069.jpg',
    'Koi_fish_swimming_202603211424(1)_070.jpg',
    'Koi_fish_swimming_202603211424(1)_071.jpg',
    'Koi_fish_swimming_202603211424(1)_072.jpg',
    'Koi_fish_swimming_202603211424(1)_073.jpg',
    'Koi_fish_swimming_202603211424(1)_074.jpg',
    'Koi_fish_swimming_202603211424(1)_075.jpg',
    'Koi_fish_swimming_202603211424(1)_076.jpg',
    'Koi_fish_swimming_202603211424(1)_077.jpg',
    'Koi_fish_swimming_202603211424(1)_078.jpg',
    'Koi_fish_swimming_202603211424(1)_079.jpg',
    'Koi_fish_swimming_202603211424_003.jpg',
    'Koi_fish_swimming_202603211424_004.jpg',
    'Koi_fish_swimming_202603211424_005.jpg',
    'Koi_fish_swimming_202603211424_006.jpg',
    'Koi_fish_swimming_202603211424_007.jpg',
    'Koi_fish_swimming_202603211424_008.jpg',
    'Koi_fish_swimming_202603211424_009.jpg',
    'Koi_fish_swimming_202603211424_010.jpg',
    'Koi_fish_swimming_202603211424_011.jpg',
    'Koi_fish_swimming_202603211424_012.jpg',
    'Koi_fish_swimming_202603211424_013.jpg',
    'Koi_fish_swimming_202603211424_014.jpg',
    'Koi_fish_swimming_202603211424_015.jpg',
    'Koi_fish_swimming_202603211424_016.jpg',
    'Koi_fish_swimming_202603211424_017.jpg',
    'Koi_fish_swimming_202603211424_018.jpg',
    'Koi_fish_swimming_202603211424_019.jpg',
    'Koi_fish_swimming_202603211424_020.jpg',
    'Koi_fish_swimming_202603211424_021.jpg',
    'Koi_fish_swimming_202603211424_022.jpg',
    'Koi_fish_swimming_202603211424_023.jpg',
    'Koi_fish_swimming_202603211424_024.jpg',
    'Koi_fish_swimming_202603211424_025.jpg',
    'Koi_fish_swimming_202603211424_026.jpg',
    'Koi_fish_swimming_202603211424_027.jpg',
    'Koi_fish_swimming_202603211424_028.jpg',
    'Koi_fish_swimming_202603211424_029.jpg',
    'Koi_fish_swimming_202603211424_030.jpg',
    'Koi_fish_swimming_202603211424_031.jpg',
    'Koi_fish_swimming_202603211424_032.jpg',
    'Koi_fish_swimming_202603211424_033.jpg',
    'Koi_fish_swimming_202603211424_034.jpg',
    'Koi_fish_swimming_202603211424_035.jpg',
    'Koi_fish_swimming_202603211424_036.jpg',
    'Koi_fish_swimming_202603211424_037.jpg',
    'Koi_fish_swimming_202603211424_038.jpg',
    'Koi_fish_swimming_202603211424_039.jpg',
    'Koi_fish_swimming_202603211424_040.jpg',
    'Koi_fish_swimming_202603211424_041.jpg',
    'Koi_fish_swimming_202603211424_042.jpg',
    'Koi_fish_swimming_202603211424_043.jpg',
    'Koi_fish_swimming_202603211424_044.jpg',
    'Koi_fish_swimming_202603211424_045.jpg',
    'Koi_fish_swimming_202603211424_046.jpg',
    'Koi_fish_swimming_202603211424_047.jpg',
    'Koi_fish_swimming_202603211424_048.jpg',
    'Koi_fish_swimming_202603211424_049.jpg',
    'Koi_fish_swimming_202603211424_050.jpg',
    'Koi_fish_swimming_202603211424_051.jpg',
    'Koi_fish_swimming_202603211424_052.jpg',
    'Koi_fish_swimming_202603211424_053.jpg',
    'Koi_fish_swimming_202603211424_054.jpg',
    'Koi_fish_swimming_202603211424_055.jpg',
    'Koi_fish_swimming_202603211424_056.jpg',
    'Koi_fish_swimming_202603211424_057.jpg',
    'Koi_fish_swimming_202603211424_058.jpg',
    'Koi_fish_swimming_202603211424_059.jpg',
    'Koi_fish_swimming_202603211424_060.jpg',
    'Koi_fish_swimming_202603211424_061.jpg',
    'Koi_fish_swimming_202603211424_062.jpg',
    'Koi_fish_swimming_202603211424_063.jpg',
    'Koi_fish_swimming_202603211424_064.jpg',
    'Koi_fish_swimming_202603211424_065.jpg',
    'Koi_fish_swimming_202603211424_066.jpg',
    'Koi_fish_swimming_202603211424_067.jpg',
    'Koi_fish_swimming_202603211424_068.jpg',
    'Koi_fish_swimming_202603211424_069.jpg',
    'Koi_fish_swimming_202603211424_070.jpg',
    'Koi_fish_swimming_202603211424_071.jpg',
    'Koi_fish_swimming_202603211424_072.jpg',
    'Koi_fish_swimming_202603211424_073.jpg',
    'Koi_fish_swimming_202603211424_074.jpg',
    'Koi_fish_swimming_202603211424_075.jpg',
    'Koi_fish_swimming_202603211424_076.jpg',
    'Koi_fish_swimming_202603211424_077.jpg',
    'Koi_fish_swimming_202603211424_078.jpg',
];

const targetFps = 10;
const frameDuration = 1000 / targetFps;
const frameCount = imageNames.length;

const images = new Array(frameCount);
let loadedImagesCount = 0;
let currentFrame = 0;
let lastTime = 0;

let isVisible = true;
document.addEventListener('visibilitychange', () => {
    isVisible = !document.hidden;
});

const preloadImages = () => {
    imageNames.forEach((fileName, index) => {
        const img = new Image();
        img.src = `assets/image-hero/${fileName}`;
        
        img.onload = () => {
            loadedImagesCount++;
            
            if (loadedImagesCount === 1) {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }

            if (loadedImagesCount === frameCount) {
                requestAnimationFrame(animate);
            }
        };
        
        img.onerror = () => {
            loadedImagesCount++;
        };

        // Salvar na posição correta do array
        images[index] = img;
    });
};

const animate = (time) => {
    if (!isVisible) {
        lastTime = time;
        requestAnimationFrame(animate);
        return;
    }

    if (!lastTime) lastTime = time;
    const deltaTime = time - lastTime;

    if (deltaTime >= frameDuration) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const img = images[currentFrame];
        if (img && img.complete && img.naturalWidth > 0) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }

        currentFrame = (currentFrame + 1) % frameCount;
        lastTime = time - (deltaTime % frameDuration);
    }

    requestAnimationFrame(animate);
};

preloadImages();

// === EFEITO PARALLAX NA HERO ===
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Limitar cálculo de parallax apenas enquanto a hero está visível
    if (scrollPos <= window.innerHeight && heroContent) {
        // Move o conteúdo verticalmente 40% da quantia de rolagem (dando profundidade)
        heroContent.style.transform = `translateY(${scrollPos * 0.4}px)`;
        
        // Aplica um fade-out gradual na opacidade, sumindo ao descer de vez
        heroContent.style.opacity = Math.max(0, 1 - (scrollPos / (window.innerHeight * 0.6)));
    }
});

// === CARROSSEL DA SEÇÃO SOBRE ===
const sobreSlides = document.querySelectorAll('.carousel-backgrounds .slide');

if (sobreSlides.length > 0) {
    let currentSlide = 0;
    // O setInterval irá rotacionar as imagens adicionando e removendo a classe 'active'
    setInterval(() => {
        sobreSlides[currentSlide].classList.remove('active');
        // Avança pro próximo slide e dá um reset se chegar no final da array
        currentSlide = (currentSlide + 1) % sobreSlides.length;
        sobreSlides[currentSlide].classList.add('active');
    }, 6000); // Crossfade a cada 6 segundos
}

// JS dos Cards foi removido pois agora o layout utiliza cards tradicionais já expansos.
