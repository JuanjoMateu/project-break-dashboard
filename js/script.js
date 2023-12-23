function backgroundImage() {
    const img = [
        'url(' + './assets/img/jase-bloor-oCZHIa1D4EU-unsplash.jpg' + ')',
        'url(' + './assets/img/sora-sagano-8sOZJ8JF0S8-unsplash.jpg' + ')',
        'url(' + './assets/img/su-san-lee-E_eWwM29wfU-unsplash.jpg' + ')',
        'url(' + './assets/img/syuhei-inoue-kaoHI0iHJPM-unsplash.jpg' + ')',
        'url(' + './assets/img/tianshu-liu-SBK40fdKbAg-unsplash.jpg' + ')',
    ];
  
    const randomImg = img[Math.floor(Math.random() * img.length)];
  
    document.body.style.backgroundImage = randomImg;
  }
backgroundImage();

setInterval(backgroundImage, 5000);

