import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  _isModalVisible: boolean = false;
  _isSlideVisible: Array<boolean> = [false, false, false, false];

  ngOnInit() {
  }

  showSkillsModal(index: number){ 
    this._isSlideVisible[index] = true;
    this._isModalVisible = true; 
  }

  hideSkillsModal(){ 
    for(let index = 0; index < this._isSlideVisible.length; index++){
      this._isSlideVisible[index] = false;
    }
    this._isModalVisible = false; 
  }

}
