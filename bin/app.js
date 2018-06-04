// jquery

$('title').text($('blog').attr('judul') + ' - Zen')
$(function(){
	$('.marked').html(marked($('.marked').html()))
	$('.komentar').each(function(){
		$(this).html(marked($(this).html()))
	})
	$('table').addClass('table')
	$('img').addClass('thumbnail')
	$('.panel-komentar:first').css({
		'margin-top': '30px'
	})
	hljs.initHighlightingOnLoad()
	$('.stick').theiaStickySidebar({
		additionalMarginTop: 20,
		additionalMarginBottom: 20
	})
})

// vue

Vue.component('komentar', {
	props: ['tanggal'],
	template: `<div class="panel panel-default panel-komentar">
		<div class="panel-body komentar"><slot></slot></div>
		<div class="panel-footer">&mdash; {{ tanggal }}</div>
	</div>`
})

Vue.component('blog', {
	props: ['judul'],
	template: `<div class="container">
		<img src='media/1398951_656136371098312_1692318231_o.jpg' class='thumbnail'>
		<div class="row">
			<div class="col-sm-8 stick">
				<div class="page-header">
					<h1>{{ judul }}</h1>
				</div>
				<div class='marked'>
					<slot></slot>
				</div>
			</div>
			<div class="col-sm-4 stick">
				<span v-for='x in letak_gambar'>
					<img :src='x' class='thumbnail'>
				</span>
				<p><strong>Tools</strong></p>
				<ul>
					<li>
						<a href='tools/keyboard arabic/index.html' target='_blank'>Keyboard Arabic</a>
					</li>
				</ul>
				<hr>
				<p><strong>Ceramah</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "ceramah"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
				<p><strong>Pemrograman</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "pemrograman"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
				<p><strong>Psikologi</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "psikologi"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
				<p><strong>Puisi</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "puisi"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
			</div>
		</div>
		<br>
	</div>`,
	computed: {
		letak_gambar(){
			return this.gambar.map(function(x){
				return 'media/' + x
			})
		},
		tulisan_sort(){
			return this.tulisan.reverse()
		}
	},
	data: function(){
		return {
			gambar: [
				'30.png',
				'1901721_10152297242766213_1148911909677960665_n.jpg'
			],
			tulisan: [
				{
					'judul': 'Auto Save Sublime Text',
					'link': 'auto%20save%20sublime%20text.html',
					'kategori': 'pemrograman'
				},
				{
					'judul': 'Catatan PHP dan MySQL',
					'link': 'catatan%20php%20dan%20mysql.html',
					'kategori': 'pemrograman'
				},
				{
					'judul': 'Menampilkan Cuplikan Film dengan VLC',
					'link': 'menampilkan%20cuplikan%20film%20di%20vlc.html',
					'kategori': 'pemrograman'
				},
				{
					'judul': 'Download dan Upload Git Secara Otomatis',
					'link': 'download%20upload%20dengan%20git.html',
					'kategori': 'pemrograman'
				},
				{
					'judul': 'Akulah Cahaya',
					'link': 'akulah%20cahaya.html',
					'kategori': 'puisi'
				},
				{
					'judul': 'Ceramah Bukber Tempatnya Pak Ngalal',
					'link': 'ceramah%20bukber%20tempatnya%20pak%20ngalal.html',
					'kategori': 'ceramah'
				},
				{
					'judul': 'Metode Pembelajaran di TK',
					'link': 'metode%20pembelajaran%20di%20tk.html',
					'kategori': 'psikologi'
				}
			]
		}
	}
})

app = new Vue({
	el: '.vue'
})