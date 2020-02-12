import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource, MatPaginator } from "@angular/material";
import { ReclamationService } from "../services/reclamation.service";
import { Router } from "@angular/router";
import { Reclamation } from "src/app/models/reclamation";

@Component({
  selector: "app-list-reclamataion",
  templateUrl: "./list-reclamataion.component.html",
  styleUrls: ["./list-reclamataion.component.css"]
})
export class ListReclamataionComponent implements OnInit {
  reclamations: Reclamation[] = [];
  reclamation: Reclamation;
  constructor(private service: ReclamationService, private router: Router) {}

  listData = new MatTableDataSource<Reclamation>();

  displayedColumns: string[] = [
    "dossier",
    "date_reclamation",
    "Nom_station",
    "Secteur",
    "N_Arbre",
    "decision",
    "etat",
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
      this.reclamations = this.reclamations.filter(
        reclamation => reclamation.id != id
      );
      console.log(this.reclamations);
      this.fetchElements();
    });
  }

  onEdit(row) {
    console.log(row);
    this.service.populateform(row);
    this.router.navigate(["home/updateReclamation"]);
  }

  onDelete(id) {
    console.log(id);
    if (confirm("Are sure?")) {
      this.delete(id);
    }
  }
}
