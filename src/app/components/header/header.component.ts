import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  siteLanguage = 'English';
  languageList: any = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'tr', label: 'Türkçe' }
  ];

  menuItems = [
    {name:"Home Page", seName:"home-page"},
    {name:"About us", seName:"about-us"},
    {name:"Contact", seName:"contact"},
    {name:"Our Products", seName:"our-products"},
    {name:"Gallery", seName:"gallery"},
  ]

  constructor(private service: TranslocoService) { }

  ngOnInit() {
  }

  changeSiteLanguage(event: any): void {
    const language: string = event.target.value;
    console.log('language: ', language);
    this.service.setActiveLang(language);
    this.siteLanguage = this.languageList.find((f: any) => f.code === language).label;
  }

}
