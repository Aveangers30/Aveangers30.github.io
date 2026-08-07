const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

document.querySelectorAll('.brand').forEach((brand) => {
  brand.href = 'index.html';
  brand.setAttribute('aria-label', 'veangers home page');
  brand.innerHTML = '<span class="brand-mark">@</span> veangers';
});

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.querySelector('.form-message').textContent = 'Thanks for reaching out! Your message is ready to send.';
    form.reset();
  });
}

const contactIntro = document.querySelector('.contact-copy .intro');
if (contactIntro) {
  const contactStyles = document.createElement('link');
  contactStyles.rel = 'stylesheet';
  contactStyles.href = 'assets/css/contact-social.css';
  document.head.append(contactStyles);

  const socialList = document.createElement('div');
  socialList.className = 'social-contact-list';
  socialList.setAttribute('aria-label', 'Vea’s social media and phone number');
  socialList.innerHTML = '<a href="https://www.instagram.com/aveiingers" target="_blank" rel="noopener noreferrer"><span class="social-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle></svg></span> @aveiingers</a><a href="https://www.facebook.com/jovilyn.ringor.5" target="_blank" rel="noopener noreferrer"><span class="social-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V10H8.2v3h2.6v8h2.8Z"></path></svg></span> Vea Joyce Ringor</a><a href="tel:+639947809734"><span class="social-icon" aria-hidden="true">☎</span> 0994 780 9734</a>';
  socialList.insertAdjacentHTML('beforeend', '<a href="mailto:vearingor@gmail.com"><span class="social-icon" aria-hidden="true">✉</span> vearingor@gmail.com</a>');
  contactIntro.insertAdjacentElement('afterend', socialList);
}

const aboutHero = document.querySelector('.about-page-hero');
if (aboutHero) {
  const backgroundVideo = document.createElement('video');
  backgroundVideo.className = 'about-background-video';
  backgroundVideo.src = 'assets/video/vea-about-background.mp4';
  backgroundVideo.autoplay = true;
  backgroundVideo.muted = true;
  backgroundVideo.loop = true;
  backgroundVideo.playsInline = true;
  backgroundVideo.preload = 'auto';
  backgroundVideo.setAttribute('aria-hidden', 'true');
  aboutHero.prepend(backgroundVideo);

  const hobbiesArrow = document.createElement('a');
  hobbiesArrow.className = 'about-next-page';
  hobbiesArrow.href = 'hobbies.html';
  hobbiesArrow.setAttribute('aria-label', 'Go to the Hobbies page');
  hobbiesArrow.innerHTML = '<span>Next: Hobbies</span> <b aria-hidden="true">→</b>';
  aboutHero.append(hobbiesArrow);

  const intro = aboutHero.querySelector('.intro');
  const soundButton = document.createElement('button');
  soundButton.className = 'video-sound-button';
  soundButton.type = 'button';
  soundButton.setAttribute('aria-pressed', 'false');
  soundButton.textContent = '▶ Play sound';
  intro.insertAdjacentElement('afterend', soundButton);

  soundButton.addEventListener('click', async () => {
    const playSound = backgroundVideo.muted;
    backgroundVideo.muted = !playSound;
    backgroundVideo.volume = .45;
    soundButton.setAttribute('aria-pressed', String(playSound));
    soundButton.textContent = playSound ? '❚❚ Pause sound' : '▶ Play sound';

    if (playSound) {
      try {
        await backgroundVideo.play();
      } catch {
        soundButton.textContent = '▶ Play sound';
        soundButton.setAttribute('aria-pressed', 'false');
        backgroundVideo.muted = true;
      }
    }
  });
}

const studentStat = document.querySelector('.stats > div:first-child');
if (studentStat) {
  studentStat.classList.add('student-stat');
  studentStat.setAttribute('role', 'button');
  studentStat.setAttribute('tabindex', '0');
  studentStat.setAttribute('aria-expanded', 'false');
  studentStat.setAttribute('aria-controls', 'education-dialog');

  const educationDialog = document.createElement('div');
  educationDialog.className = 'education-dialog';
  educationDialog.id = 'education-dialog';
  educationDialog.hidden = true;
  educationDialog.setAttribute('role', 'dialog');
  educationDialog.setAttribute('aria-modal', 'true');
  educationDialog.setAttribute('aria-labelledby', 'education-title');
  educationDialog.innerHTML = `<div class="education-panel"><button class="education-close" type="button" aria-label="Close education background">×</button><p class="eyebrow">ACADEMIC PLAYLIST</p><h2 id="education-title">My education</h2><p>The schools and experiences shaping my journey.</p><div class="education-list"><article class="education-item"><p class="education-year">2025–2028</p><h3>Bachelor of Science in Criminology</h3><p>University of the Cordilleras<br>Governor Pack Road, Baguio City, Philippines 2600</p></article><article class="education-item"><p class="education-year">2023–2025</p><h3>Senior High School</h3><p>President Diosdado Macapagal High School<br>8th St., Barangay Katuparan, Taguig City</p></article><article class="education-item"><p class="education-year">2018–2023</p><h3>Junior High School</h3><p>President Diosdado Macapagal High School<br>8th St., Barangay Katuparan, Taguig City</p></article><article class="education-item"><p class="education-year">2013–2018</p><h3>Elementary</h3><p>Kapt. Eddie T. Reyes Integrated School<br>Phase 2, Barangay Pinagsama, Taguig City</p></article></div></div>`;
  document.body.append(educationDialog);

  const closeEducation = () => {
    educationDialog.hidden = true;
    studentStat.setAttribute('aria-expanded', 'false');
    studentStat.focus();
  };
  const openEducation = () => {
    educationDialog.hidden = false;
    studentStat.setAttribute('aria-expanded', 'true');
    educationDialog.querySelector('.education-close').focus();
  };
  studentStat.addEventListener('click', openEducation);
  studentStat.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openEducation(); }
  });
  educationDialog.querySelector('.education-close').addEventListener('click', closeEducation);
  educationDialog.addEventListener('click', (event) => { if (event.target === educationDialog) closeEducation(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !educationDialog.hidden) closeEducation(); });
}

const creativeStat = document.querySelector('.stats > div:last-child');
if (creativeStat) {
  creativeStat.classList.add('creative-stat');
  creativeStat.setAttribute('role', 'button');
  creativeStat.setAttribute('tabindex', '0');
  creativeStat.setAttribute('aria-expanded', 'false');
  creativeStat.setAttribute('aria-controls', 'awards-dialog');

  const awardsDialog = document.createElement('div');
  awardsDialog.className = 'education-dialog';
  awardsDialog.id = 'awards-dialog';
  awardsDialog.hidden = true;
  awardsDialog.setAttribute('role', 'dialog');
  awardsDialog.setAttribute('aria-modal', 'true');
  awardsDialog.setAttribute('aria-labelledby', 'awards-title');
  awardsDialog.innerHTML = `<div class="education-panel"><button class="education-close" type="button" aria-label="Close awards and recognitions">×</button><p class="eyebrow">CREATIVE AT HEART</p><h2 id="awards-title">Awards &amp; recognitions</h2><p>Milestones that reflect my creativity, leadership, service, and commitment to learning.</p><div class="education-list"><article class="education-item"><p class="education-year">2026</p><h3>Basic First Aid and REC</h3><p>Resuscitation and Emergency Care</p></article><article class="education-item"><p class="education-year">2025</p><h3>Digital Poster Making — 1st Place</h3></article><article class="education-item"><p class="education-year">2024</p><h3>Division School Press Conference</h3><p>Campus Journalist in Pagsulat ng Agham</p></article><article class="education-item"><p class="education-year">2024</p><h3>Boy Scouts of the Philippines</h3><p>Member, National Capital Region — Taguig City Council</p></article><article class="education-item"><p class="education-year">2023–2024</p><h3>Senior High School — Consistent With Honors</h3></article><article class="education-item"><p class="education-year">2023</p><h3>English Student Teacher</h3><p>President Diosdado Macapagal High School</p></article><article class="education-item"><p class="education-year">2023</p><h3>Junior High School Graduate</h3><p>Consistent Performing Student and With High Honors</p></article><article class="education-item"><p class="education-year">2023</p><h3>Journalism Club in Filipino</h3><p>Former member</p></article><article class="education-item"><p class="education-year">2019–2020</p><h3>Class President Nominee</h3></article><article class="education-item"><p class="education-year">2016–2018</p><h3>Red Cross Youth</h3><p>Former officer</p></article><article class="education-item"><p class="education-year">2018</p><h3>Grade 6 Representative Candidate</h3><p>Supreme Student Government</p></article><article class="education-item"><p class="education-year">2016</p><h3>District Festival of Talents — 1st Place</h3><p>Poster Making Contest</p></article></div></div>`;
  document.body.append(awardsDialog);

  const closeAwards = () => { awardsDialog.hidden = true; creativeStat.setAttribute('aria-expanded', 'false'); creativeStat.focus(); };
  const openAwards = () => { awardsDialog.hidden = false; creativeStat.setAttribute('aria-expanded', 'true'); awardsDialog.querySelector('.education-close').focus(); };
  creativeStat.addEventListener('click', openAwards);
  creativeStat.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openAwards(); } });
  awardsDialog.querySelector('.education-close').addEventListener('click', closeAwards);
  awardsDialog.addEventListener('click', (event) => { if (event.target === awardsDialog) closeAwards(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !awardsDialog.hidden) closeAwards(); });
}

const curiousStat = document.querySelector('.stats > div:nth-child(2)');
if (curiousStat) {
  curiousStat.classList.add('curious-stat');
  curiousStat.setAttribute('role', 'button');
  curiousStat.setAttribute('tabindex', '0');
  curiousStat.setAttribute('aria-expanded', 'false');
  curiousStat.setAttribute('aria-controls', 'fun-facts-dialog');

  const funFactsDialog = document.createElement('div');
  funFactsDialog.className = 'education-dialog';
  funFactsDialog.id = 'fun-facts-dialog';
  funFactsDialog.hidden = true;
  funFactsDialog.setAttribute('role', 'dialog');
  funFactsDialog.setAttribute('aria-modal', 'true');
  funFactsDialog.setAttribute('aria-labelledby', 'fun-facts-title');
  funFactsDialog.innerHTML = `<div class="education-panel"><button class="education-close" type="button" aria-label="Close fun facts">×</button><p class="eyebrow">CURIOUS BY NATURE</p><h2 id="fun-facts-title">Fun facts about me</h2><p>A few little things that keep my world interesting.</p><div class="fun-facts-grid"><article class="fun-fact"><span>☕</span>I enjoy learning new skills whenever I have free time.</article><article class="fun-fact"><span>📖</span>I love discovering creative ways and thrilling activities.</article><article class="fun-fact"><span>🎨</span>Digital poster design is one of my favorite hobbies.</article><article class="fun-fact"><span>🚑</span>I enjoy learning practical life-saving skills.</article><article class="fun-fact"><span>📷</span>I like capturing meaningful moments through photos.</article><article class="fun-fact"><span>🌱</span>I believe every day is a chance to learn something new.</article><article class="fun-fact wide"><span>✦</span>I love being an independent woman, and every experience teaches me something worth remembering.</article></div></div>`;
  document.body.append(funFactsDialog);
  const closeFunFacts = () => { funFactsDialog.hidden = true; curiousStat.setAttribute('aria-expanded', 'false'); curiousStat.focus(); };
  const openFunFacts = () => { funFactsDialog.hidden = false; curiousStat.setAttribute('aria-expanded', 'true'); funFactsDialog.querySelector('.education-close').focus(); };
  curiousStat.addEventListener('click', openFunFacts);
  curiousStat.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openFunFacts(); } });
  funFactsDialog.querySelector('.education-close').addEventListener('click', closeFunFacts);
  funFactsDialog.addEventListener('click', (event) => { if (event.target === funFactsDialog) closeFunFacts(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !funFactsDialog.hidden) closeFunFacts(); });
}

const hobbyGrid = document.querySelector('.hobby-grid');
if (hobbyGrid) {
  const hobbyStyles = document.createElement('link');
  hobbyStyles.rel = 'stylesheet';
  hobbyStyles.href = 'assets/css/hobbies-library.css';
  document.head.append(hobbyStyles);

  const hobbyPhotoStyles = document.createElement('link');
  hobbyPhotoStyles.rel = 'stylesheet';
  hobbyPhotoStyles.href = 'assets/css/hobbies-photos.css';
  document.head.append(hobbyPhotoStyles);

  const peoplePhotoStyles = document.createElement('link');
  peoplePhotoStyles.rel = 'stylesheet';
  peoplePhotoStyles.href = 'assets/css/hobbies-people.css';
  document.head.append(peoplePhotoStyles);

  const albumStyles = document.createElement('link');
  albumStyles.rel = 'stylesheet';
  albumStyles.href = 'assets/css/hobbies-albums.css';
  document.head.append(albumStyles);

  const hobbiesHero = document.querySelector('.page-hero');
  if (hobbiesHero) {
    const heart = document.createElement('div');
    heart.className = 'love-alarm-heart';
    heart.setAttribute('aria-hidden', 'true');
    heart.innerHTML = '<span></span>';
    hobbiesHero.append(heart);
    const videoBackdrop = document.createElement('div');
    videoBackdrop.className = 'hobbies-video-backdrop';
    videoBackdrop.setAttribute('aria-hidden', 'true');
    videoBackdrop.innerHTML = '<video autoplay muted loop playsinline preload="metadata"><source src="assets/video/hobbies-background.mp4" type="video/mp4"></video>';
    hobbiesHero.append(videoBackdrop);
  }

  const hobbyLibrary = document.createElement('section');
  hobbyLibrary.className = 'hobby-library';
  hobbyLibrary.setAttribute('aria-labelledby', 'hobby-library-title');
  hobbyLibrary.innerHTML = `<div class="library-topbar"><div><p class="library-kicker">YOUR LIBRARY</p><h2 id="hobby-library-title">My hobby playlists</h2></div><div class="library-search" aria-label="Hobby search placeholder">⌕&nbsp; Search my hobbies</div></div><div class="library-layout"><div class="library-filters" aria-label="Hobby categories"><span class="library-filter active">All</span><span class="library-filter">By Vea</span><span class="library-filter">Favorites</span></div><div class="hobby-library-grid"><article class="library-card"><div class="library-cover cover-travel">⌁</div><h3>Photography</h3><p>Captured moments</p></article><article class="library-card"><div class="library-cover cover-creative">✎</div><h3>Modelling</h3><p>Creative confidence</p></article><article class="library-card"><div class="library-cover cover-friends">♥</div><h3>loml</h3><p>My favorite person</p></article><article class="library-card"><div class="library-cover cover-friends">♥</div><h3>People I love</h3><p>My favorite company</p></article><article class="library-card"><div class="library-cover cover-fitness">✦</div><h3>Achievements</h3><p>Milestones I am proud of</p></article><article class="library-card"><div class="library-cover cover-music">♫</div><h3>Music mood</h3><p>Your favorite tracks</p></article><article class="library-card"><div class="library-cover cover-memories">☼</div><h3>Foods :)</h3><p>Favorite flavors and treats</p></article><article class="library-card"><div class="library-cover cover-learning">+</div><h3>Learning era</h3><p>Skills and discoveries</p></article><article class="library-card"><div class="library-cover cover-reading">⌕</div><h3>Reading corner</h3><p>Stories I love</p></article></div></div>`;
  const readingCard = Array.from(hobbyLibrary.querySelectorAll('.library-card')).find((card) => card.querySelector('h3')?.textContent === 'Reading corner');
  readingCard?.remove();
  const learningCard = Array.from(hobbyLibrary.querySelectorAll('.library-card')).find((card) => card.querySelector('h3')?.textContent === 'Learning era');
  if (learningCard) {
    learningCard.querySelector('h3').textContent = 'Run 🏃';
    learningCard.querySelector('p').textContent = 'Fun run memories';
  }

  const modellingCard = Array.from(hobbyLibrary.querySelectorAll('.library-card')).find((card) => card.querySelector('h3')?.textContent === 'Modelling');
  if (modellingCard) {
    const modellingCover = modellingCard.querySelector('.library-cover');
    modellingCover.className = 'library-cover cover-modelling';
    modellingCover.innerHTML = '<img src="assets/images/modelling-beach-day.jpeg" alt="Vea modelling on a beach"><img src="assets/images/modelling-beach-sunset.jpeg" alt="Vea modelling at the beach during sunset"><img src="assets/images/modelling-sunny-day.jpeg" alt="Vea modelling outdoors on a sunny day">';
  }

  const lomlCard = Array.from(hobbyLibrary.querySelectorAll('.library-card')).find((card) => card.querySelector('h3')?.textContent === 'loml');
  if (lomlCard) {
    const lomlCover = lomlCard.querySelector('.library-cover');
    lomlCover.className = 'library-cover cover-loml-video';
    lomlCover.innerHTML = '<video playsinline preload="metadata" aria-label="Video for the loml album"></video>';
    const lomlVideo = lomlCover.querySelector('video');
    const lomlVideos = ['assets/video/loml-cover.mov', 'assets/video/loml-second.mov'];
    let lomlVideoIndex = 0;
    const playLomlVideo = async () => {
      lomlVideo.muted = false;
      lomlVideo.volume = 1;
      try {
        await lomlVideo.play();
        lomlVideo.controls = true;
      } catch { /* The visitor can tap the video again if playback is blocked. */ }
    };
    lomlVideo.src = lomlVideos[lomlVideoIndex];
    lomlVideo.load();
    lomlVideo.addEventListener('click', () => { if (lomlVideo.paused) playLomlVideo(); });
    lomlVideo.addEventListener('ended', () => {
      if (lomlVideoIndex < lomlVideos.length - 1) {
        lomlVideoIndex += 1;
        lomlVideo.addEventListener('canplay', playLomlVideo, { once: true });
        lomlVideo.src = lomlVideos[lomlVideoIndex];
        lomlVideo.load();
        return;
      }
      lomlVideoIndex = 0;
      lomlVideo.src = lomlVideos[lomlVideoIndex];
      lomlVideo.controls = false;
      lomlVideo.load();
    });
  }

  const peopleCard = Array.from(hobbyLibrary.querySelectorAll('.library-card')).find((card) => card.querySelector('h3')?.textContent === 'People I love');
  const peoplePhotos = [
    'people-ff6a13be-8b11-4f24-a053-95e0bcee286e.jpeg', 'people-09168e7d-b95d-463e-bd98-6a74551973f5.jpeg', 'people-70fd748a-dbe0-4cfa-bbe2-bb98bebf92c4.jpeg',
    'people-64fd37f2-c00d-4c23-8500-a037ad9f0027.jpeg', 'people-c01572b2-f01d-4698-bd8a-3e6aa7140882.jpeg', 'people-77c8fe08-aa7e-4149-ae25-ed3c6bab71e7.jpeg',
    'people-34941027-276d-4000-ab7f-9f6c7e5d6d51.jpeg', 'people-8e2f8910-8ba6-4f0b-84c1-a259006b7a34.jpeg', 'people-eb1f5b85-d654-4a34-9a83-895d4d85e785.jpeg'
  ];
  if (peopleCard) {
    peopleCard.classList.add('people-album');
    peopleCard.setAttribute('role', 'button');
    peopleCard.setAttribute('tabindex', '0');
    peopleCard.setAttribute('aria-haspopup', 'dialog');
    peopleCard.setAttribute('aria-label', 'Open People I love photo album');
    const peopleCover = peopleCard.querySelector('.library-cover');
    peopleCover.className = 'library-cover cover-people';
    peopleCover.innerHTML = peoplePhotos.slice(0, 3).map((photo, index) => `<img src="assets/images/${photo}" alt="People I love, photo ${index + 1}">`).join('');

    const gallery = document.createElement('div');
    gallery.className = 'people-gallery';
    gallery.hidden = true;
    gallery.setAttribute('role', 'dialog');
    gallery.setAttribute('aria-modal', 'true');
    gallery.setAttribute('aria-labelledby', 'people-gallery-title');
    gallery.innerHTML = `<div class="people-gallery-panel"><button class="people-gallery-close" type="button" aria-label="Close People I love album">×</button><p class="eyebrow">PHOTO ALBUM</p><h2 id="people-gallery-title">People I love</h2><p>A collection of some of my favorite people and memories.</p><div class="people-gallery-grid">${peoplePhotos.map((photo, index) => `<figure><img src="assets/images/${photo}" alt="People I love, memory ${index + 1}"></figure>`).join('')}</div></div>`;
    document.body.append(gallery);
    const closeGallery = () => { gallery.hidden = true; peopleCard.focus(); };
    const openGallery = () => { gallery.hidden = false; gallery.querySelector('.people-gallery-close').focus(); };
    peopleCard.addEventListener('click', openGallery);
    peopleCard.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openGallery(); } });
    gallery.querySelector('.people-gallery-close').addEventListener('click', closeGallery);
    gallery.addEventListener('click', (event) => { if (event.target === gallery) closeGallery(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !gallery.hidden) closeGallery(); });
  }

  const setupPhotoAlbum = (title, description, photos, coverPhotos = photos, coverClass = '') => {
    const card = Array.from(hobbyLibrary.querySelectorAll('.library-card')).find((item) => item.querySelector('h3')?.textContent === title);
    if (!card) return;

    const galleryTitleId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-gallery-title`;
    card.classList.add('people-album');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-haspopup', 'dialog');
    card.setAttribute('aria-label', `Open ${title} photo album`);
    const cover = card.querySelector('.library-cover');
    cover.className = `library-cover cover-people${coverPhotos.length === 1 ? ' cover-single' : ''}${coverClass ? ` ${coverClass}` : ''}`;
    cover.innerHTML = coverPhotos.slice(0, 3).map((photo, index) => `<img src="assets/images/${photo}" alt="${title}, photo ${index + 1}">`).join('');

    const gallery = document.createElement('div');
    gallery.className = 'people-gallery';
    gallery.hidden = true;
    gallery.setAttribute('role', 'dialog');
    gallery.setAttribute('aria-modal', 'true');
    gallery.setAttribute('aria-labelledby', galleryTitleId);
    gallery.innerHTML = `<div class="people-gallery-panel"><button class="people-gallery-close" type="button" aria-label="Close ${title} album">×</button><p class="eyebrow">PHOTO ALBUM</p><h2 id="${galleryTitleId}">${title}</h2><p>${description}</p><div class="people-gallery-grid${photos.length === 1 ? ' single-photo-gallery' : ''}">${photos.map((photo, index) => `<figure><img src="assets/images/${photo}" alt="${title}, memory ${index + 1}"></figure>`).join('')}</div></div>`;
    document.body.append(gallery);

    const closeGallery = () => { gallery.hidden = true; card.focus(); };
    const openGallery = () => { gallery.hidden = false; gallery.querySelector('.people-gallery-close').focus(); };
    card.addEventListener('click', openGallery);
    card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openGallery(); } });
    gallery.querySelector('.people-gallery-close').addEventListener('click', closeGallery);
    gallery.addEventListener('click', (event) => { if (event.target === gallery) closeGallery(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !gallery.hidden) closeGallery(); });
  };

  setupPhotoAlbum('Photography', 'A collection of favorite places, views, and little moments.', [
    'photography-6311895758411600912.jpg', 'photography-6311895758411600939.jpg', 'photography-6311895758411600913.jpg',
    'photography-6311895758411600911.jpg', 'photography-6311895758411600962.jpg', 'photography-6311895758411600943.jpg',
    'photography-6311895758411600963.jpg', 'photography-6311895758411600938.jpg', 'photography-6311895758411600964.jpg',
    'photography-6311895758411600937.jpg', 'photography-6311895758411600965.jpg', 'photography-6311895758411600966.jpg',
    'photography-6311895758411600914.jpg', 'photography-6311895758411600936.jpg',
    'photography-6311895758411600973.jpg', 'photography-6311895758411600975.jpg', 'photography-6311895758411600974.jpg'
  ], ['photography-6311895758411600912.jpg'], 'photography-cover-front');
  setupPhotoAlbum('Modelling', 'A collection of my modelling photos and creative moments.', [
    'modelling-beach-day.jpeg', 'modelling-beach-sunset.jpeg', 'modelling-sunny-day.jpeg',
    'modelling-6311895758411600849.jpg', 'modelling-6311895758411600909.jpg',
    'modelling-6311895758411600910.jpg', 'modelling-6311895758411600915.jpg',
    'modelling-6311895758411600988.jpg', 'modelling-6311895758411600989.jpg'
  ], ['modelling-6311895758411600849.jpg'], 'modelling-cover-front');
  setupPhotoAlbum('Achievements', 'Graduation memories, awards, and milestones I am proud of.', [
    'achievements-medals-and-certificates.png',
    'achievements-graduation-and-awards.png'
  ], ['achievements-medals-and-certificates.png']);
  setupPhotoAlbum('Foods :)', 'Favorite meals, snacks, and sweet treats.', [
    'food-6311895758411600951-cropped.jpg', 'food-6311895758411600955.jpg', 'food-6311895758411600954.jpg',
    'food-6311895758411600953.jpg', 'food-6311895758411600949.jpg', 'food-6311895758411600952.jpg',
    'food-6311895758411600948.jpg', 'food-6311895758411600947.jpg', 'food-6311895758411600946.jpg',
    'food-6311895758411600940.jpg', 'food-6311895758411600941.jpg'
  ], ['food-6311895758411600951-cropped.jpg'], 'food-cover-front');
  setupPhotoAlbum('Run 🏃', 'Fun run memories and finishing-line moments.', [
    'run-6311895758411600969.jpg', 'run-6311895758411600971.jpg', 'run-6311895758411600970.jpg',
    'run-6311895758411600976.jpg', 'run-6311895758411600977.jpg', 'run-6311895758411600978.jpg'
  ], ['run-6311895758411600970.jpg'], 'run-cover-front');

  const photoLightbox = document.createElement('div');
  photoLightbox.className = 'photo-lightbox';
  photoLightbox.hidden = true;
  photoLightbox.setAttribute('role', 'dialog');
  photoLightbox.setAttribute('aria-modal', 'true');
  photoLightbox.setAttribute('aria-label', 'Full-size photo');
  photoLightbox.innerHTML = '<button class="photo-lightbox-close" type="button" aria-label="Close full-size photo">×</button><img alt="">';
  document.body.append(photoLightbox);
  const photoLightboxImage = photoLightbox.querySelector('img');
  let selectedGalleryImage;
  const closePhotoLightbox = () => { photoLightbox.hidden = true; selectedGalleryImage?.focus(); };
  const openPhotoLightbox = (image) => {
    selectedGalleryImage = image;
    photoLightboxImage.src = image.src;
    photoLightboxImage.alt = image.alt;
    photoLightbox.hidden = false;
    photoLightbox.querySelector('.photo-lightbox-close').focus();
  };
  document.querySelectorAll('.people-gallery-grid img').forEach((image) => {
    image.classList.add('gallery-image-button');
    image.setAttribute('role', 'button');
    image.setAttribute('tabindex', '0');
    image.setAttribute('aria-label', `View full-size ${image.alt}`);
    image.addEventListener('click', () => openPhotoLightbox(image));
    image.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openPhotoLightbox(image); } });
  });
  photoLightbox.querySelector('.photo-lightbox-close').addEventListener('click', closePhotoLightbox);
  photoLightbox.addEventListener('click', (event) => { if (event.target === photoLightbox) closePhotoLightbox(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !photoLightbox.hidden) { event.stopPropagation(); closePhotoLightbox(); }
  }, true);

  const musicFlashcard = Array.from(hobbyGrid.querySelectorAll('.hobby-card')).find((card) => card.querySelector('h2')?.textContent === 'Music');
  if (musicFlashcard) {
    musicFlashcard.classList.add('music-flashcard');
    musicFlashcard.insertAdjacentHTML('beforeend', '<iframe class="music-track-player" src="https://open.spotify.com/embed/track/2ezMnGfGww3WSOJp7TwI1N?utm_source=generator" title="Music track player" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>');
  }

  const memoriesFlashcard = Array.from(hobbyGrid.querySelectorAll('.hobby-card')).find((card) => card.querySelector('h2')?.textContent === 'Making memories');
  const memoryPhotos = Array.from(document.querySelectorAll('.people-gallery-grid img')).map((image) => image.src);
  if (memoriesFlashcard && memoryPhotos.length) {
    memoriesFlashcard.classList.add('memories-flashcard');
    const memoriesMovieImage = document.createElement('img');
    memoriesMovieImage.className = 'memories-movie-image';
    memoriesMovieImage.alt = '';
    memoriesMovieImage.setAttribute('aria-hidden', 'true');
    memoriesFlashcard.prepend(memoriesMovieImage);
    let memoryPhotoIndex = 0;
    const showMemoryPhoto = () => {
      memoriesMovieImage.src = memoryPhotos[memoryPhotoIndex];
      memoryPhotoIndex = (memoryPhotoIndex + 1) % memoryPhotos.length;
    };
    showMemoryPhoto();
    window.setInterval(showMemoryPhoto, 5000);
  }

  const musicCard = Array.from(hobbyLibrary.querySelectorAll('.library-card')).find((card) => card.querySelector('h3')?.textContent === 'Music mood');
  if (musicCard) {
    const playlistUrl = 'https://open.spotify.com/playlist/01tKGMSRQYS1NZob1yOg6s?si=3d2f37f7d8be4aa0';
    const openPlaylist = () => window.open(playlistUrl, '_blank', 'noopener,noreferrer');
    musicCard.classList.add('people-album');
    const musicCover = musicCard.querySelector('.library-cover');
    musicCover.className = 'library-cover cover-people cover-single music-cover-guitar';
    musicCover.innerHTML = '<img src="assets/images/music-guitar-6311895758411600990.jpg" alt="Vea playing guitar">';
    musicCard.setAttribute('role', 'link');
    musicCard.setAttribute('tabindex', '0');
    musicCard.setAttribute('aria-label', 'Open Vea’s Music Mood Spotify playlist');
    musicCard.addEventListener('click', openPlaylist);
    musicCard.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openPlaylist(); } });
  }

  hobbyGrid.insertAdjacentElement('beforebegin', hobbyLibrary);
}
