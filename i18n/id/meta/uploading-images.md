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

[Scour](https://github.com/scour-project/scour) all SVG images.

Dalam Inkscape:

1. Simpan Berkas Sebagai..
2. Set type to Optimized SVG (*.svg)

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

In the **SVG Output** under **Pretty-printing**:

- [ ] Turn off **Format output with line-breaks and indentation**
- **Indentation characters** > Select **Space**
- **Kedalaman lekukan** > **1**
- [ ] Turn off **Strip the "xml:space" attribute from the root SVG element**

Pada tab **IDs**:

- [x] Aktifkan **Hapus ID yang tidak digunakan**
- [] Nonaktifkan **Persingkat ID**
- **Awalan ID singkat dengan** > `biarkan kosong`
- [x] Turn on **Preserve manually created IDs not ending with digits**
- **Preserve the following IDs** > `leave blank`
- **Preserve IDs starting with** > `leave blank`

#### CLI

The same can be achieved with the [Scour](https://github.com/scour-project/scour) command:

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
