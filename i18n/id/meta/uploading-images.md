---
title: Mengunggah Gambar
---

Berikut ini adalah beberapa aturan umum untuk berkontribusi pada Privacy Guides:

## Gambar

- Kami **lebih suka** gambar SVG, tetapi jika tidak ada, kami dapat menggunakan gambar PNG

Logo perusahaan memiliki ukuran kanvas:

- 128x128px
- 384x128px

## Optimasi

### PNG

Gunakan [OptiPNG](https://sourceforge.net/projects/optipng/) untuk mengoptimalkan gambar PNG:

```bash
optipng -o7 file.png
```

### SVG

#### Inkscape

*[Scour](https://github.com/scour-project/scour)* semua gambar SVG.

Dalam Inkscape:

1. Simpan Berkas Sebagai..
2. Atur jenis ke SVG yang Dioptimalkan (*.svg)

Pada tab **Opsi**:

- **Jumlah digit signifikan untuk koordinat** > **5**
- [x] Aktifkan **Persingkat nilai warna**
- [x] Aktifkan **Konversi atribut CSS ke atribut XML**
- [x] Aktifkan **Runtuhkan grup**
- [x] Aktifkan **Buat grup untuk atribut serupa**
- [ ] Matikan **Simpan data editor**
- [ ] Matikan **Simpan definisi yang tidak direferensikan**
- [x] Hidupkan **Bekerja di sekitar bug renderer**

Pada tab **SVG Output** di bawah **Opsi dokumen**:

- [ ] Matikan **Hapus deklarasi XML**
- [x] Aktifkan **Hapus metadata**
- [x] Aktifkan **Hapus komentar**
- [x] Aktifkan **Gambar raster yang disematkan**
- [x] Aktifkan **Aktifkan viewboxing**

Pada tab **SVG Output** di bawah **Opsi dokumen**:

- [ ] Matikan **Format keluaran dengan pemisah baris dan indentasi**
- **Intentasi karakter** > Pilih **Spasi**
- **Kedalaman indentasi** > **1**
- [ ] Matikan **Hapus atribut "xml:space" dari elemen SVG akar**

Pada tab **IDs**:

- [x] Aktifkan **Hapus ID yang tidak digunakan**
- [] Nonaktifkan **Persingkat ID**
- **Awalan ID singkat dengan** > `biarkan kosong`
- [x] Nyalakan **Simpan ID yang dibuat secara manual yang tidak diakhiri dengan angka**
- **Awalan ID singkat dengan** > `biarkan kosong`
- **Simpan ID yang dimulai dengan** > `biarkan kosong`

#### CLI

Hal yang sama dapat dicapai dengan perintah [Scour](https://github.com/scour-project/scour):

```bash
scour --set-precision=5 \
      --create-groups \
      --renderer-workaround \
      --remove-descriptive-elements \
      --enable-comment-stripping \
      --enable-viewboxing \
      --indent=space \
      --nindent=1 \
      --no-line-breaks \
      --enable-id-stripping \
      --protect-ids-noninkscape \
      input.svg output.svg
```
