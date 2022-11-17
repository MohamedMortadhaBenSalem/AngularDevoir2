import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomVetement! : string;
  vetements!: Vetement[];
  allVetements!: Vetement[];
  searchTerm!: string;
  
  constructor(private vetementService : VetementService) { }

  ngOnInit(): void {
    this.vetementService.listeVetement().subscribe(prods => {
      console.log(prods);
      this.vetements = prods;
      });
      
  }

  rechercherVets(){
    this.vetementService.rechercherParNom(this.nomVetement).
    subscribe(prods => {
      console.log(prods);
      this.vetements=prods;});
  }

  onKeyUp(filterText : string){
    this.vetements = this.allVetements.filter(item =>
    item.nomVetement.toLowerCase().includes(filterText));
    }
    
}
