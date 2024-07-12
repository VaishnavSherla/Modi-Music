const audios = [
    {
        img: process.env.PUBLIC_URL + '/assets/images/06.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/PehleBhiMain.mp3',
        songName: 'Pehle Bhi Main'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/01.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/UnnakuThaan.mp3',
        songName: 'Unnaku Thaan'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/02.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/Husn.mp3',
        songName: 'Husn'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/03.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/TheNights.mp3',
        songName: 'The Nights'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/04.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/SaariDuniyaJalaDenge.mp3',
        songName: 'Saari Duniya Jala Denge'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/05.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/Cheques.mp3',
        songName: 'Cheques'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/06.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/Ambarsariya.mp3',
        songName: 'Ambarsariya'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/07.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/Chaleya.mp3',
        songName: 'Chaleya'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/01.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/MaanMeriJaan.mp3',
        songName: 'Maan Meri Jaan'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/02.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/YadavBrand2.mp3',
        songName: 'Yadav Brand 2'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/03.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/DesiKalakaar.mp3',
        songName: 'Desi Kalakaar'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/04.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/OneLove.mp3',
        songName: 'One Love'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/05.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/ApnaBanaLePiya.mp3',
        songName: 'Apna Bana Le Piya'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/06.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/NoLove.mp3',
        songName: 'No Love'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/01.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/AamJaheMunde.mp3',
        songName: 'Aam Jahe Munde'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/02.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/Satranga.mp3',
        songName: 'Satranga'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/03.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/AgarTumSaathHo.mp3',
        songName: 'Agar Tum Saath Ho'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/04.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/AbhiMujhMeinKahin.mp3',
        songName: 'Abhi Mujh Mein Kahin'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/05.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/Kabira.mp3',
        songName: 'Kabira'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/06.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/Naina.mp3',
        songName: 'Naina'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/01.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/KalHoNaaHo.mp3',
        songName: 'Kal Ho Naa Ho'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/02.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/GulabiSadi.m4a',
        songName: 'Gulabi Sadi'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/03.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/LifeOfRam.m4a',
        songName: 'Life of Ram'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/04.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/Thenmozhi.mp3',
        songName: 'Thenmozhi'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/05.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/JamalKudu.mp3',
        songName: 'Jamal Kudu'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/06.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/AalumaDoluma.mp3',
        songName: 'Aaluma Doluma'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/01.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/MassMarana.mp3',
        songName: 'Mass Marana'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/02.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/Maamadura.mp3',
        songName: 'Maamadura'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/01.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/SomeTeluguMix.mp3',
        songName: 'Telugu Mix'
    },
    {
        img: process.env.PUBLIC_URL + '/assets/images/02.jpg',
        src: process.env.PUBLIC_URL + '/assets/audios/TamilMix.mp3',
        songName: 'Tamil Mix'
    },
]

export default audios;