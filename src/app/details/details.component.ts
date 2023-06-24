import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { menu } from '../menu';
import { Imenu } from '../Imenu';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

// export class DetailsComponent implements OnInit {
//   product: Imenu = {} as Imenu;
//   index: number = 0;

//   constructor(private route: ActivatedRoute,private cartService : CartService) {

//   }
//   addToCart(){
//     alert("added to the card")
//     this.cartService.addToCart(this.product)
//   }

//   ngOnInit(): void {
//     this.route.params.subscribe((params:Params)=>{
//     this.index = +params['indexFromRouting'];
//     this.product = menu[this.index]
//     });
//   }
//   }

export class DetailsComponent implements OnInit {
  menu: Imenu | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id =+params['id'];
      console.log('ID:', id);
      this.menu = menu.find((item: Imenu) => item.id === id);
    });
  }}



// export class DetailsComponent implements OnInit {
//   menu: Imenu | undefined;
//   constructor(private route: ActivatedRoute) {}
//   ngOnInit(): void {
//     const name = this.route.snapshot.paramMap.get('name');
// // then we find the menu object from the array based on the name
//     this.menu = menu.find((item: Imenu) => item.name === name);
//   }
//   // add to cart for later
//   addToCart(): void {

// }
//   }

// // from Angular 
// // @Component({templateUrl:'./my-component.html'})
// // class MyComponent {
// //   constructor(route: ActivatedRoute) {
// //     const id: string = route.snapshot.params.id;
// //     const url: string = route.snapshot.url.join('');
// //     const user = route.snapshot.data.user;
// //   }
// // }