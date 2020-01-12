import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  _isModalVisible: boolean = true;
  _isSlideVisible: Array<boolean> = [false, false, false, false, false, true, false, false, false, false];

  ngOnInit() {
  }

  showSkillsModal(index: number){ 
    this._isSlideVisible[index] = true;
    this._isModalVisible = true; 
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
  }

  hideSkillsModal(){ 
    for(let index = 0; index < this._isSlideVisible.length; index++){
      this._isSlideVisible[index] = false;
    }
    this._isModalVisible = false; 
    document.getElementsByTagName('body')[0].style.overflow = "scroll";
  }

}
