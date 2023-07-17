import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChistesService } from '../services/chistes.service';
import { ImageService } from '../services/image.service';
import { Subscription, interval, switchMap, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-dog-joke',
  templateUrl: './dog-joke.component.html',
  styleUrls: ['./dog-joke.component.css']
})
export class DogJokeComponent implements OnInit, OnDestroy {

  public pregunta:string = '';
  public respuesta:string = '';
  public imageUrl:string = '';

  private countSubs: Subscription | undefined
  public count$ = interval(1000)
  public segundoRestantes:number = 20;

  public isLoad:boolean = false;

  constructor(
    public chistesService:ChistesService,
    public imageService:ImageService
  ) { }


  
  ngOnInit(): void {

    this.isLoad = false;

    setTimeout(() => {

      this.contar()
      this.obtenerInfo()
      
    }, 2000);
  }

  obtenerInfo(){

    this.isLoad = false;
    this.detenerIntervalo()
      this.contar()
      this.segundoRestantes = 20;


      this.chistesService.getChiste()
      .pipe(
        tap( console.log ),
        switchMap(({setup,punchline})=>{
          this.pregunta = setup;
          this.respuesta = punchline
          return this.imageService.getImage()
        }),
        tap( console.log ),
        tap(({message})=>{
          this.imageUrl = message
        })
      ).subscribe();
    setTimeout(() => {
      
      this.isLoad = true;
    }, 2000);
   
   
  }
  
  contar(){
    this.countSubs = this.count$
    .pipe(
      takeWhile(()=> this.segundoRestantes >0),
      tap((seconds)=>{
        this.segundoRestantes = 20 - seconds 
        if(this.segundoRestantes ===0){
          this.obtenerInfo()
        }
      })
    )
    .subscribe(console.log)
  }

  detenerIntervalo(){
    if(this.countSubs){
      this.countSubs.unsubscribe()
    }
  }
  ngOnDestroy(): void {
    if(this.countSubs){
      this.countSubs.unsubscribe()
    }
  }
}
