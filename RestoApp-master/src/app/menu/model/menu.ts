export class Menu {
    id: number;
    descriptionPlat: string;
    dessert: string;
    qteDisponible: number;
    supplement :string;
    date :Date;
    constructor(id: number,date :Date, description: string, dessert: string, qteDisponible: number,supplement :string) {
      this.id = id;
      this.descriptionPlat = description;
      this.dessert = dessert;
      this.qteDisponible = qteDisponible;
      this.supplement=supplement;
      this.date=date;
    }
  }
  