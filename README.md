# Muğla Delta İlaçlama

WordPress sitesinden yeniden oluşturulmuş sade statik web sitesi. HTML, ortak CSS ve yalnızca mobil menü için küçük bir vanilla JavaScript dosyası kullanır. Derleme adımı, paket kurulumu veya sunucu gerekmez.

## İçerik

- Ana Sayfa, Hakkımızda, Haşereler ve 13 haşere detay sayfası
- Uygulamalar: masaüstünde 3 sütun × 2 satır, bağlantısız 6 görsel ve başlık kartı
- Referanslar: mevcut siteden 30 kurum logosu
- Sertifikalarımız ve formsuz İletişim sayfası
- Ana sayfadaki 4 hizmet açıklaması için detay sayfaları

Mevcut sayfa adresleri korunmuştur. `category/genel/` eski bağlantılar için aynı uygulama kartlarını gösterir. Tüm görseller yereldir; WordPress, jQuery, tema ve eklenti bağımlılığı yoktur. Telefon ve e-posta bağlantıları doğrudan çalışır. Mobil menü JavaScript kapalıyken de erişilebilir.

## Önizleme

Bu klasörde `python3 -m http.server 8765` çalıştırıp `http://localhost:8765` adresini açın.

## Yayın

`main` dalına gönderilen değişiklikler GitHub Actions ile GitHub Pages'e yayımlanır. Depo ayarlarında Pages kaynağı **GitHub Actions** olmalıdır.

Yayın adresi: https://deltailaclama.net/

Özel alan adına geçiş için GitHub Pages özel alan adı ve DNS ayarları ayrıca yapılmalıdır. `404.html` içindeki ana sayfa bağlantısını da yeni adresle güncelleyin.

## Düzenleme

Her sayfa kendi klasöründe `index.html` dosyasıdır. Ortak görünüm `assets/site.css`, mobil menü `assets/site.js` içindedir. Başlık/altbilgi her sayfada açık HTML olarak bulunur; değişiklikler ilgili tüm dosyalara uygulanmalıdır.

Kaynak içerikler: https://deltailaclama.net — 5 Ekim 2026. Eski sitedeki kurumsal bilgiler, telefonlar, adres, belge görselleri ve referanslar taşındı. Boş/örnek metin içeren dört hizmet detayı, mevcut sitenin ilgili açıklamalarıyla tamamlandı. Eski tarihli şirket ve belge bilgilerinin güncelliği yayın sahibi tarafından değerlendirilebilir.
