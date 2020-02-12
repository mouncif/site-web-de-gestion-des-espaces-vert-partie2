import { StationService } from "./../services/station.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Station } from "src/app/models/station";

@Component({
  selector: "app-list-station",
  templateUrl: "./list-station.component.html",
  styleUrls: ["./list-station.component.css"]
})
export class ListStationComponent implements OnInit {
  stations: Station[] = [];
  station: Station;
  constructor(private service: StationService, private router: Router) {}

  listData = new MatTableDataSource<Station>();

  displayedColumns: string[] = [
    "Nom_Station",
    "Date_description",
    "Secteur",
    "Quartier",
    "Localistaion",
    "vocation",
    "Etat_general",
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
      this.stations = this.stations.filter(reclamation => reclamation.id != id);
      console.log(this.stations);
      this.fetchElements();
    });
  }

  onEdit(row) {
    console.log(row);
    this.service.populateform(row);
    this.router.navigate(["home/updateStation"]);
  }

  onDelete(id) {
    console.log(id);
    if (confirm("Are sure?")) {
      this.delete(id);
    }
  }
}
