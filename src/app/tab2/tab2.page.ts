import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public news = []

  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getNews().subscribe((result:any) => {
      this.news = result.news
    })
  }

}
