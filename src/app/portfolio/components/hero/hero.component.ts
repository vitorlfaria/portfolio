import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  // @ts-ignore
  @ViewChild('hero') hero: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.hero.nativeElement.addEventListener("mousemove", (e: any) => {
      this.hero.nativeElement.style.backgroundPositionX = -e.offsetX / 10 + "px";
      this.hero.nativeElement.style.backgroundPositionY = -e.offsetY / 10 + "px";
    });
  }
}
