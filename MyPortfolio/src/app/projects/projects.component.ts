import { Component, OnInit } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  _slideIndex: number = 1;
  _isSlideVisible: Array<boolean> = [true, false, false, false, false];
  _isModalVisible: boolean = false;

  ngOnInit() {
    this.showSlides(this._slideIndex)
  }

  plusSlides(index:number){
    this.showSlides(this._slideIndex += index)
  }

  public currentSlide(index:number){
    this.showSlides(this._slideIndex = index)
  }

  showSlides(index:number){
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(index > slides.length) {this._slideIndex = 1;}
    if(index < 1){this._slideIndex = slides.length;}
    for(let i = 0; i < slides.length; i++){
      this._isSlideVisible[i] = false;
    }
    for(let i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(" active", "");
    }
    this._isSlideVisible[this._slideIndex - 1] = true;
    dots[this._slideIndex - 1].className += " active";
  }

  showProjectsModal(index: number){ 
    this.currentSlide(index);
    this.showSlides(index);
    this._isModalVisible = true; 
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
  }

  hideProjectsModal(){ 
    this._isModalVisible = false; 
    document.getElementsByTagName('body')[0].style.overflow = "scroll";
  }

  GoToSkill(index: number){
    this.hideProjectsModal();
    document.getElementById('skill' + index).click();
  }

}
