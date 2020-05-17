import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

const gallery = [
  {
    smallImg: 'assets/media/smallimg1.jpg',
    largeImg: 'assets/media/img1.jpg'
  },
  {
    smallImg: 'assets/media/smallimg2.jpg',
    largeImg: 'assets/media/img2.jpg'
  },
  {
    smallImg: 'assets/media/smallimg3.jpg',
    largeImg: 'assets/media/img3.jpg'
  },
  {
    smallImg: 'assets/media/smallimg4.jpg',
    largeImg: 'assets/media/img4.jpg'
  }
];


@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
  @Input() gallery$: Observable<any> = of(gallery);
  @Input() isMobile$: Observable<boolean> = of(false);

  @Input() currentIndex = 0;

  isOverlayActive = new BehaviorSubject(false)

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.currentIndex++;
  }

  previous() {
    this.currentIndex--;
  }

  open(index: number) {
    this.currentIndex = index;
    this.isOverlayActive.next(true);
  }

  close(e: Event) {
    const targetClassname = (e.target as Element).className;
    if ( targetClassname === 'lightbox' || targetClassname === 'close-button') {
      this.isOverlayActive.next(false);
    }
  }

}
