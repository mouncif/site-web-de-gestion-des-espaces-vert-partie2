import { Router } from "@angular/router";

import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { PlantationService } from "../services/plantation.service";
import { Plantation } from "../models/plantation";

@Component({
  selector: "app-list-plantation",
  templateUrl: "./list-plantation.component.html",
  styleUrls: ["./list-plantation.component.css"]
})
export class ListPlantationComponent implements OnInit {
  plantations: Plantation[] = [];
  plantation: Plantation;
  constructor(private service: PlantationService, private router: Router) {}

  listData = new MatTableDataSource<Plantation>();

  displayedColumns: string[] = [
    "type_preparation",
    "Protection",
    "conduite",
    "irrigation",
    "Age",
    "taux_avencement",
    "cout_travau",
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
      this.plantations = this.plantations.filter(
        plantation => plantation.id != id
      );
      console.log(this.plantations);
      this.fetchElements();
    });
  }

  onEdit(row) {
    console.log(row);
    this.service.populateform(row);
    this.router.navigate(["home/updatePlantation"]);
  }

  onDelete(id) {
    console.log(id);
    if (confirm("Are sure?")) {
      this.delete(id);
    }
  }
}
