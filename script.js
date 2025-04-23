 // Mendapatkan elemen-elemen yang dibutuhkan
 const openMenu = document.getElementById('open-menu');
 const closeMenu = document.getElementById('close-menu');
 const mobileMenu = document.getElementById('mobile-menu');
 const dropdownToggles = document.querySelectorAll('.mobile-list'); // Menangkap elemen dengan kelas 'mobile-list'
 const dropdownToggles2 = document.querySelectorAll('.mobile-list2'); // Menangkap elemen dengan kelas 'mobile-list2'
 
 // Fungsi untuk membuka menu
 openMenu.addEventListener('click', () => {
     mobileMenu.style.display = 'flex'; // Tampilkan menu mobile secara fullscreen
     openMenu.style.display = 'none';   // Sembunyikan icon menu (bars)
     closeMenu.style.display = 'block'; // Tampilkan icon close (times)
 });
 
 // Fungsi untuk menutup menu
 closeMenu.addEventListener('click', () => {
     mobileMenu.style.display = 'none';  // Sembunyikan menu mobile
     openMenu.style.display = 'block';   // Tampilkan icon menu (bars)
     closeMenu.style.display = 'none';   // Sembunyikan icon close (times)
 
     // Tambahan: Tutup semua dropdown dan reset elemen ke kondisi awal
     closeAllDropdowns();
 });
 
 // Mengatur ulang display mobile menu saat resize ke mode desktop
 window.addEventListener('resize', () => {
     if (window.innerWidth > 768) {
         mobileMenu.style.display = 'none';  // Sembunyikan menu mobile
         openMenu.style.display = 'block';   // Tampilkan icon menu (bars)
         closeMenu.style.display = 'none';   // Sembunyikan icon close (times)
     }
 });
 
 // Fungsi untuk menutup semua dropdown menu
 function closeAllDropdowns() {
     const allDropdowns = document.querySelectorAll('.dropdown-mobile'); // Menangkap semua elemen dropdown
     allDropdowns.forEach(dropdown => {
         dropdown.classList.remove('show'); // Sembunyikan dropdown
     });
 
     // Atur ulang icon dropdown menjadi `fa-angle-right` untuk semua elemen
     const allIcons = document.querySelectorAll('.dropdown-icon');
     allIcons.forEach(icon => {
         icon.classList.remove('fa-angle-down');
         icon.classList.add('fa-angle-right');
     });
 
     // Tutup semua elemen <li> yang ada
     const allLiElements = document.querySelectorAll('.mobile-list, .mobile-list2');
     allLiElements.forEach(li => {
         li.classList.remove('active'); // Sembunyikan li
     });
 }
 





 
 
 