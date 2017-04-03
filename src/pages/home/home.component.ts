import { Component } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: 'pages/home/home.component.html'
})
export class HomeComponent {

}


// import { Splashscreen } from 'ionic-native';
// import { Component, OnInit, NgZone } from '@angular/core';
// import { NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
// import { Firebase } from '@ionic-native/firebase';

// import { DataProvider } from '../../providers/data-provider';
// import { SaudeIdentificacaoPage } from '../saude/identificacao/saude-identificacao';
// import { MapaPage } from '../mapa/mapa';
// import { TRANSITION_OPTIONS_FORWARD } from '../../_constants';

// @Component({
// 	selector: 'page-home',
// 	templateUrl: 'home.html'
// })
// export class HomePage implements OnInit {

// 	constructor(public platform: Platform,
// 		public navCtrl: NavController,
// 		public navParams: NavParams,
// 		private data: DataProvider,
// 		private loadingCtrl: LoadingController,
// 		private zone: NgZone,
// 		private firebase: Firebase) {
// 	}

// 	ionViewDidLoad() {
// 		this.platform.ready().then(() => {
// 			this.firebase.setScreenName('Menu Inicial');
// 		});
// 	}

// 	ionViewDidEnter() {
// 		this.platform.ready()
// 			.then(() => {
// 				console.log(new Date);
// 			});
// 	}

// 	ngOnInit() {
// 		this.platform.ready().then(() => {
// 			// Splashscreen.hide();
// 			//salva para poder usar de qualquer tela
// 			this.data.rootNavCtrl = this.navCtrl;
// 		});
// 	}

// 	go(tela) {
// 		switch (tela) {
// 			case 'saude':
// 				this.navCtrl.push(SaudeIdentificacaoPage, {}, TRANSITION_OPTIONS_FORWARD);
// 				break;
// 			case 'mapa':
// 				this.navCtrl.push(MapaPage, {}, TRANSITION_OPTIONS_FORWARD);
// 				break;
// 		}
// 	}

// }
