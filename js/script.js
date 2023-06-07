$(document).ready(function(){
    // Sticky header
    const header = document.getElementById("main-header");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
          header.classList.add("header-scrolled");
          header.querySelector(".container-xxl").classList.remove("align-items-start");
          header.querySelector(".container-xxl").classList.add("align-items-center");
          header.querySelector(".logo-img").classList.add("small");
          header.querySelector("#navbarNav").style.padding = "0";
        } else {
          header.classList.remove("header-scrolled");
          header.querySelector(".container-xxl").classList.remove("align-items-center");
          header.querySelector(".container-xxl").classList.add("align-items-start");
          header.querySelector(".logo-img").classList.remove("small");
          header.querySelector("#navbarNav").style.padding = "20px";
        }
    });      

    // Smoot scroll to section when clicking on the menu links
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-scroll');
            const sectionPosition = document.getElementById(target).offsetTop;
            const headerHeight = header.offsetHeight;
            window.scrollTo({
                top: sectionPosition - headerHeight,
                behavior: 'smooth'
            });
        });
    });



    // Smooth scroll to section when clicking on the button "Listen now"
    const listenNowBtn = document.getElementById('listen-now-btn');
    listenNowBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const videosSection = document.getElementById('videos-section');
        const sectionPosition = videosSection.offsetTop;
        const headerHeight = 93.56;//header.offsetHeight;
        window.scrollTo({
            top: sectionPosition - headerHeight,
            behavior: 'smooth'
        });
    });


    // Add track event listeners
    const trackModal = document.getElementById('trackModal');
    const trackElements = document.querySelectorAll('.poster-button');
    trackElements.forEach((trackElement) => {
        trackElement.addEventListener('click', (event) => {
            event.preventDefault();

            const audioUrl = trackElement.dataset.audioSrc;
            const posterUrl = trackElement.dataset.posterSrc;
            const trackName = trackElement.previousElementSibling.innerText;
            const artistName = trackElement.previousElementSibling.previousElementSibling.innerText;

            // Set the audio source and load it
            const audioPlayer = document.getElementById('audioPlayer');
            const audioSource = document.getElementById('audioSource');
            audioSource.src = audioUrl;
            audioPlayer.load();

            // Update the modal content with the track info
            const trackModalLabel = document.getElementById('trackModalLabel');
            const trackModalArtist = document.getElementById('trackModalArtist');
            const trackModalPicture = document.getElementById('trackModalPicture');
            trackModalLabel.innerText = trackName;
            trackModalArtist.innerText = artistName;
            trackModalPicture.src = posterUrl;

            // Open the modal
            const modal = new bootstrap.Modal(trackModal);
            modal.show();
        });
    });

    // Slick carousel
    $('.video-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '50%',
        infinite: true,
        speed: 300,
        prevArrow: '<i class="fa-sharp fa-solid fa-caret-left slick-prev"></i>',
        nextArrow: '<i class="fa-sharp fa-solid fa-caret-right slick-next"></i>',
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1
            }
        }
        ]
    });

    // Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    // Capture the form and the success message
    const form = document.getElementById('newsletterForm');
    const successMessage = document.getElementById('successMessage');
    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          form.style.display = 'none';
          successMessage.classList.remove('d-none');
        }
        form.classList.add('was-validated');
    });      

});