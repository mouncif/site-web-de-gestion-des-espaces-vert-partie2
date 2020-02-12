import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { Phytosanitaire } from "../models/phytosanitaire";
import { PhytosanitaireService } from "../services/phytosanitaire.service";

@Component({
  selector: "app-list-phytosanitaire",
  templateUrl: "./list-phytosanitaire.component.html",
  styleUrls: ["./list-phytosanitaire.component.css"]
})
export class ListPhytosanitaireComponent implements OnInit {
  phytosanitaires: Phytosanitaire[] = [];
  phytosanitaire: Phytosanitaire;
  constructor(private service: PhytosanitaireService, private router: Router) {}

  listData = new MatTableDataSource<Phytosanitaire>();

  displayedColumns: string[] = [
    "forme",
    "vitalite",
    "localisation",
    "quentite",
    "dimX",
    "dimY",
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
      this.phytosanitaires = this.phytosanitaires.filter(
        phytosanitaire => phytosanitaire.id != id
      );
      console.log(this.phytosanitaires);
      this.fetchElements();
    });
  }

  onEdit(row) {
    console.log(row);
    this.service.populateform(row);
    this.router.navigate(["home/updatePhytosanitaire"]);
  }

  onDelete(id) {
    console.log(id);
    if (confirm("Are sure?")) {
      this.delete(id);
    }
  }
}
