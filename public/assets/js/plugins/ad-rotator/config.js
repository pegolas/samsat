const instance = rotator(
    document.getElementById('ads-1'),
    [{
            url: 'https://tokopedia.link/GhuGt0pTFrb',
            img: 'assets/img/ads/Dudukan-Handphone-Tablet-Folding-Desktop-phone-stand-Holder-Mini.jpg'
        },
        {
            url: 'https://tokopedia.link/7jPlIFvTFrb',
            img: 'assets/img/ads/Holder-hp-motor-spion-universal-bahan-besi-antikarat.jpg'
        },
        {
            url: 'https://tokopedia.link/h2IIN2xTFrb',
            img: 'assets/img/ads/CAR-MOUNT-PHONE-HP-HOLDER-DASHBOARD-KACA-MOBIL.jpg'
        },
        {
            url: 'https://tokopedia.link/ZUU8U1GTFrb',
            img: 'assets/img/ads/all-Black-Full-Face-Masker-Balaclava.jpg'
        },
        {
            url: 'https://tokopedia.link/KhRjoSjTFrb',
            img: 'assets/img/ads/Bagus-Anti-Bau-Mobil.jpg'
        },
        {
            url: 'https://tokopedia.link/NQw9g7nSFrb',
            img: 'assets/img/ads/Pelindung-Pintu-Mobil-Kedap-Suara-Silikon-karet-Meredam-Getaran.jpg'
        },
        {
            url: 'https://tokopedia.link/6vBamOJTFrb',
            img: 'assets/img/ads/Jas-Hujan-Setelan-Premium-All-Size-Pria-Wanita-Tebal.jpg'
        },
    ], {
        timer: 60,
        random: true,
        newTab: true
    }
);
instance.start();