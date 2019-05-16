import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

export interface IBikes {
  id: number;
  image: string;
  description: string;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }
  bikes: Array<IBikes> = [];
  async ngOnInit() {
    this.bikes = [
      {
        id: 1,
        image: '../../assets/bike1.jpeg',
        description: 'Bike Model 1',
        price: 5000,
        quantity: 1
      },
      {
        id: 2,
        image: '../../assets/bike2.jpeg',
        description: 'Bike Model 2',
        price: 4000,
        quantity: 2
      },
      {
        id: 3,
        image: '../../assets/bike3.jpeg',
        description: 'Bike Model 3',
        price: 3000,
        quantity: 3
      }
    ];
  }
  addBikes() {
    this.bikes.unshift(<IBikes>{
      'id': null,
      'image': null,
      'description': null,
      'price': null,
      'quantity': null
    });
  }
}
