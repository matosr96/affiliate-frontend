import { Component, OnInit } from '@angular/core';
import { AffiliateService } from '../../services/affiliate.service';
import { Affiliate } from '../../models/affiliate/affiliate';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-affiliate',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './affiliate.component.html',
  styleUrl: './affiliate.component.css',
})
export class AffiliateComponent implements OnInit {
  affiliateList: Affiliate[] = [];
  constructor(private affiliateService: AffiliateService) {}

  ngOnInit(): void {
    this.getAffiliates();
  }

  onDelete(id: number) {
    this.affiliateService.deleteAffiliate(id).subscribe(
      (response) => {
        console.log('Afiliado eliminado exitosamente', response);
      },
      (error) => {
        console.error('Error al eliminar afiliado', error);
      }
    );
  }

  getAffiliates() {
    this.affiliateService.getAffiliates().subscribe({
      next: (result) => {
        this.affiliateList = result;
        console.log(result.affiliates);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
