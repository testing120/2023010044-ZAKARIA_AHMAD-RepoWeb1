function loadContent(page) {
  const isiDiv = document.querySelector(".isi");

  const contents = {
    home: `
        <h2>Selamat Datang</h2>
        <p>Belajar membuat layout desain web menggunakan HTML dan CSS dengan mudah.</p>
        <h2>Galeri</h2>
        <img src="assets/img/ahyar.jpg" width="100px" alt="Ahyar" />
      `,
    visi: `
        <h2>Visi & Misi</h2>
        <h3>Visi</h3>
        <p>Menjadi Politeknik yang Berdaya Saing Global, Professional dan beraqidah Ahlus Sunnah Wal Jama’ah</p>
        <h3>Misi</h3>
        <ul>
          <li> Menyelenggarakan dan mengembangkan pendidikan yang mampu berdaya saing dalam era globalisasi</li>
          <li>Menyelenggarakan dan menghasilkan pendidikan yang profesional sesuai dengan prinsip good university governance</li>
          <li>Membangun komunitas yang ikhlas, toleransi, moderat dan religi dalam menjaga Negara Kesatuan Republik Indonesia</li>
        <li> Melaksanakan Tri Dharma peguruan tinggi.</li>
          </ul>
      `,
    informasi: `
        <h2>Informasi</h2>
        <p>Informasi terkini tentang kegiatan kampus dan pengumuman penting.</p>
      `,
    dosen: `
        <h2>Daftar Dosen</h2>
        <ul>
          <li>Indra Kurniawan M.Kom - Pemrograman Web</li>
          <li>Sofia Ulfah - Basis Data</li>
          <li>Akhlis Noor Kholili - Jaringan Komputer</li>
        </ul>
      `,
    kontak: `
        <h2>Kontak Kami</h2>
        <p>Email: politbang@polibang.ac.id</p>
        <p>Telepon: (0291) 123456</p>
        <p>Alamat: Gemiring Lor, nalumsari, Jepara</p>
      `,
    gallery: `
        <h2>Galeri Foto</h2>
        <div class="gallery-container">
          <img src="assets/img/ahyar.jpg" width="100px" alt="Foto 1" />
          <img src="assets/img/dikri.jpg" width="100px" alt="Foto 2" />
          <img src="assets/img/fahmi.jpg" width="100px" alt="Foto 3" />
        </div>
      `,
  };

  isiDiv.innerHTML = contents[page] || contents.home;
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page");
      loadContent(page);
    });
  });
});
