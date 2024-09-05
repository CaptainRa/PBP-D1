function subKategori(){
    const kategori = document.getElementById("kategori").value;
    const subKategori = document.getElementById("subkategori");

    switch(kategori){
        case "baju":
            subKategori.innerHTML = `
            <option value="">--Pilih Sub Kategori</option>
            <option value="bajupria">Baju Pria</option>
            <option value="bajuwanita">Baju Wanita</option>
            <option value="bajuanak">Baju Anak</option>
            `;
        break

        case "elektronik":
            subKategori.innerHTML = `
            <option value="">--Pilih Sub Kategori</option>
            <option value="mesincuci">Mesin Cuci</option>
            <option value="kulkas">Kulkas</option>
            <option value="ac">AC</option>
            `;
        break

        case "alattulis":
            subKategori.innerHTML=`
            <option value="">--Pilih Sub Kategori</option>
            <option value="kertas">Kertas</option>
            <option value="map">Map</option>
            <option value="pulpen">Pulpen</option>
            `;
    }
}

function validasi(){
    const val = true;

    //Validasi Nama Produk
    const namaProduk = document.getElementById("namaProduk").value;
    if (namaProduk.length < 5 || namaProduk.length >30){
        document.getElementById("errNama").innerHTML = "*Nama harus diisi 5-30 karakter";
        val = false;
    } else {
        document.getElementById("errNama").innerHTML ="";
    }

    //Validasi Deskripsi
    const deskripsi = document.getElementById("deskripsi").value;
    if (deskripsi.length < 5 || deskripsi.length >100){
        document.getElementById("errdeskripsi").innerHTML = "*Deskripsi harus diisi 5-100 karakter";
        val = false;
    } else {
        document.getElementById("errdeskripsi").innerHTML ="";
    }

    //Validasi Kategori
    const kategori = document.getElementById("kategori");
    if (kategori.value ==""){
        document.getElementById("errKategori").innerHTML = "*Pilih Kategori";
        val = false;
    } else {
        document.getElementById("errKategori").innerHTML ="";
    }

    //Validasi Sub Kategori
    const subKategori = document.getElementById("subkategori");
    if (subKategori.value == ""){
        document.getElementById("errSubkategori").innerHTML = "*Pilih Sub Kategori";
        val = false;
    } else {
        document.getElementById("errSubkategori").innerHTML ="";
    }

    //Validasi Harga Satuan
    const hargaSatuan = document.getElementById("harga");
    if (hargaSatuan.value == ""){
        document.getElementById("errHarga").innerHTML = "*Masukkan Harga Satuan";
        val = false;
    } else {
        document.getElementById("errHarga").innerHTML ="";
    }

    //Validasi Grosir dan Harga Grosir
    const grosirYa = document.getElementById("grosirya");
    const grosirTidak = document.getElementById("grosirtidak");
    const hargaGrosir = document.getElementById("hargagrosir");
    if(!grosirYa.checked && !grosirTidak.checked){
        document.getElementById("errGrosir").innerHTML="Pilih salah satu";
        val = false;
    } else if (grosirYa.checked){
        if(hargaGrosir.value == ""){
            document.getElementById("errHargaGrosir").innerHTML = "*Masukkan harga grosir";
            val = false;
        } else {
            document.getElementById("errHargaGrosir").innerHTML ="";
        }
    }

    //Validasi Jasa Kirim
    let countJakir = 0;
    const jakir = document.querySelectorAll('input[name="jakir"]');

    jakir.forEach(function(jasa){
        if (jasa.checked){
            countJakir ++;
        }
    });

    if(countJakir < 3){
        document.getElementById("errJakir").innerHTML = "*Pilih paling sedikit 3 jasa";
        val = false;
    } else {
        document.getElementById("errJakir") .innerHTML ="";
    }

    //Validasi Captcha
    const captcha = document.getElementById("kodecaptcha");
    const input = document.getElementById("captcha");
    if(captcha.value != input.value ){
        document.getElementById("errCaptcha").innerHTML = "*Captcha salah";
        val = false;
    } else {
        document.getElementById("errCaptcha") .innerHTML ="";
    }

    if(val){
        alert("Poduk berhasil ditambahkan");
        document.getElementById("form").reset();
        document.getElementsByClassName("err").disabled = true;
    }
}