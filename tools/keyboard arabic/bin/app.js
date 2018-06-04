teks = []
tulis = function(x){
	teks.push(x)
	$('textarea').val(teks.join(''))
}
karakter_huruf = []
karakter_angka = []
karakter_arab = ['َ', 'ب', '', 'د', '', 'ف', 'غ', 'ه', 'ِ', 'ج', 'ك', 'ل', 'م', 'ن', 'ْ', 'ة', 'ق', 'ر', 'س', 'ت', 'ُ', 'ث', 'و', 'خ', 'ي', 'ز']
karakter_latin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
karakter_angka_arab = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
for (x = 65; x <= 90; x++){
	karakter_huruf.push(x)
}
for (x = 48; x <= 57; x++){
	karakter_angka.push(x)
}

// cek tombol
// cek_tombol = []
// for (x = 1; x <= 1000; x++){
// 	cek_tombol.push(x)
// }

$(window).on('keydown', function(event){
	// cek tombol
	// for (n in cek_tombol){
	// 	if (event.keyCode == cek_tombol[n]){
	// 		console.log(cek_tombol[n])
	// 	}
	// }

	// hapus semua
	if (!event.ctrlKey && event.shiftKey && event.keyCode == 46){
		teks = []
		$('textarea').val(teks.join(''))
	}

	cetak = function(kode, arab){
		if (!event.ctrlKey && !event.shiftKey && event.keyCode == kode){
			tulis(arab)
		}	
	}

	// main shift
	main_shift = function(kode, arab){
		if (!event.ctrlKey && event.shiftKey && event.keyCode == kode){
			tulis(arab)
		}
	}

	// backspace
	if (event.keyCode == 8){
		teks.pop()
		$('textarea').val(teks.join(''))
	}
	// spasi
	cetak(32, ' ')

	// shift w
	main_shift(87, 'ؤ')
	// shift e
	main_shift(69, 'ع')
	// shift t
	main_shift(84, 'ط')
	// shift y
	main_shift(89, 'ى')
	// shift i
	main_shift(73, 'إ')
	// shift o
	main_shift(79, 'أ')
	// shift a
	main_shift(65, 'ا')
	// shift s
	main_shift(83, 'ص')
	// shift d
	main_shift(68, 'ض')
	// shift f
	main_shift(70, 'ً')
	// shift h
	main_shift(72, 'ح')
	// shift k
	main_shift(75, 'ٍ')
	// shift z
	main_shift(90, 'ظ')
	// shift n
	main_shift(78, 'ٌ')

	// escape
	cetak(192, 'ٰ')
	// shift escape
	main_shift(192, 'ّ')
	// shift 4
	main_shift(52, 'ش')
	// shift 5
	main_shift(53, '٪')
	// shift 7
	main_shift(55, 'ؤ')
	// shift 8
	main_shift(56, 'ذ')
	// shift 9
	main_shift(57, '﴾')
	// shift 0
	main_shift(48, '﴿')
	// -
	cetak(173, '-')
	// shift -
	main_shift(173, 'ـ')
	// =
	cetak(61, '=')
	// shift =
	main_shift(61, '+')
	// shift [
	main_shift(219, 'ٱ')
	// shift ]
	main_shift(221, 'ئ')
	// ;
	cetak(59, '؛')
	// '
	cetak(222, 'ء')
	// shift \
	main_shift(220, 'آ')
	// ,
	cetak(188, '،')
	// shift ,
	main_shift(188, 'إ')
	// .
	cetak(190, '۔')
	// shift .
	main_shift(190, 'أ')
	// shift /
	main_shift(191, '؟')
	// enter
	cetak(13, '\n')

	// tulis semua karakter huruf dari a sampai z
	for (n in karakter_huruf){
		cetak(karakter_huruf[n], karakter_arab[n])
	}
	// tulis semua karakter angka dari 1 sampai 0
	for (n in karakter_angka){
		cetak(karakter_angka[n], karakter_angka_arab[n])
	}

})