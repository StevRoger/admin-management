import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-verticle',
  templateUrl: './sidenav-verticle.component.html',
  styleUrls: ['./sidenav-verticle.component.scss']
})
export class SidenavVerticleComponent implements OnInit {

  lstMainMenus: any[] = [
    { label: "Content Library" },
    { label: "Insights" },
    { label: "Inbox" },
    { label: "Monetization" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
