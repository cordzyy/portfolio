import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  currentIndex = 0;
  images = [
    { src: 'assets/alampay1.jpg', alt: 'Image 1' },
    { src: 'assets/bicolit.jpg', alt: 'Image 2' },
    { src: 'assets/bbc.jpg', alt: 'Image 3' },
  ];

  ngOnInit(): void{
    this.automaticSlide()
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  automaticSlide(): void{
    setInterval(() =>{
      if (this.currentIndex < this.images.length) {
        this.nextSlide()
      }
      else {
        this.currentIndex = 0
      }
    }, 4000) 
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
