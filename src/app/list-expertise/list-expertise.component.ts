import { ExpertiseService } from "./../services/expertise.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Expertise } from "../models/expertise";

@Component({
  selector: "app-list-expertise",
  templateUrl: "./list-expertise.component.html",
  styleUrls: ["./list-expertise.component.css"]
})
export class ListExpertiseComponent implements OnInit {
  expertises: Expertise[] = [];
  expertise: Expertise;
  constructor(private service: ExpertiseService, private router: Router) {}

  listData = new MatTableDataSource<Expertise>();

  displayedColumns: string[] = [
    "References",
    "Date_expertise",
    "Circonference",
    "Etat_phytosanitaire",
    "Montant_unitaire",
    "Nombre_arbres",
    "Total_couts",
    "actions"
  ];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.fetchElements();
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }

  fetchElements() {
    this.service.findAll().subscribe(res => {
      if (!res) return;
      console.log(res);
      this.listData = new MatTableDataSource(res as any);
    });
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  delete(id) {
    this.service.delete(id).subscribe(() => {
      this.expertises = this.expertises.filter(expertise => expertise.id != id);
      console.log(this.expertises);
      this.fetchElements();
    });
  }

  onEdit(row) {
    console.log(row);
    this.service.populateform(row);
    this.router.navigate(["home/updateExpertise"]);
  }

  onDelete(id) {
    console.log(id);
    if (confirm("Are sure?")) {
      this.delete(id);
    }
  }
}
