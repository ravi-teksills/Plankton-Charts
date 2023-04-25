import { Component, OnInit } from '@angular/core';
declare  var $:  any;

@Component({
	selector: 'com-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor() {
		{ 
			let file = '../../assets/js/app.js'
			const node = document.createElement("script");
			node.src = `${file}`;
			node.type = "text/javascript";
			node.async = true;
			node.defer = true;
			node.charset = "utf-8";
			document.getElementsByTagName("head")[0].appendChild(node);
		}
	}

	ngOnInit(): void {
		this.bindfunctions();
	}

	bindfunctions() {
		$(document).ready(function(){
			$(".waves-effect").click(function(){
		  $(".sidebar-enable").removeClass("sidebar-enable");
		});
	});

	}
  

}