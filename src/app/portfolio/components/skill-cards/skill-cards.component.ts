import {Component} from '@angular/core';

interface OnInit {
}

@Component({
  selector: 'app-skill-cards',
  templateUrl: './skill-cards.component.html',
  styleUrls: ['./skill-cards.component.scss']
})
export class SkillCardsComponent implements OnInit {
  skills = [
    ".Net Core",
    "C#",
    "Angular",
    "TypeScript",
  ];

  OnInit() {

  }

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-animation');
        } else {
          entry.target.classList.remove('card-animation');
        }
      });
    });

    cards.forEach(card => {
      observer.observe(card);
    });
  }
}
