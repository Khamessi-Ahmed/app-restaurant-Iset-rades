package com.projet.app.model;

import java.util.ArrayList;
import java.util.List;

public class Responsable extends Users {

    private static final long serialVersionUID = 1L;
    private List<Plat> lesPlats = new ArrayList<>();


    public Responsable(long id, String nom, String prenom, String email, String motdepasse, String role) {
        super(id, nom, prenom, email, motdepasse, role);
    }

    public List<Plat> getLesPlats() {
        return lesPlats;
    }

    public void setLesPlats(List<Plat> lesPlats) {
        this.lesPlats = lesPlats;
    }

    public void addPlat(Plat plat) {
        lesPlats.add(plat);
    }

    public Plat editPlat(Plat newPlat) {
        for (Plat plat : lesPlats) {
            if (plat.getId().equals(newPlat.getId())) {
                plat.setDescription(newPlat.getDescription());
                plat.setDessert(newPlat.getDessert());
                plat.setQteDisponible(newPlat.getQteDisponible());
               
                return plat;
            }
        }
        return null;
    }

    public void deletePlat(long id) {
        for (Plat p : lesPlats) {
            if (p.getId() == id) {
                lesPlats.remove(p);
                break; 
            }
        }
    }
}
