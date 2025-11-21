// Ambil elemen-elemen yang dibutuhkan
const links = document.querySelectorAll('.project-link');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

// Fungsi menutup modal (dipanggil dari tombol 'x' dan event lainnya)
function closeModal() {
    modal.classList.remove('active');
    // Bersihkan src setelah animasi selesai agar tidak flicker saat dibuka kembali
    setTimeout(() => {
        modalImg.src = "";
    }, 400);
}

// Tambahkan event listener untuk setiap link project
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah link berpindah halaman
        
        // Ambil URL gambar dari atribut data-img
        const imgSrc = this.getAttribute('data-img');
        
        // Set source gambar modal
        modalImg.src = imgSrc;
        
        // Tampilkan modal dengan class 'active'
        modal.classList.add('active');
    });
});

// Tutup modal jika area gelap di luar gambar diklik
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Tutup modal dengan tombol ESC
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" && modal.classList.contains('active')) {
        closeModal();
    }
});