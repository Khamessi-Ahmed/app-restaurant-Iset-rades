package com.projet.app.model;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import java.util.ArrayList;

@Entity
public class Etudiant extends Users {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private double soldeCarte;
    private String numeroEtudiant;

    @OneToMany(mappedBy = "etudiant")
    private List<Paiement> paiements = new ArrayList<>();

    

    public Etudiant(long id, String nom, String prenom, String email, String motdepasse, double soldeCarte, String numeroEtudiant) {
        super(id, nom, prenom, email, motdepasse,numeroEtudiant);
        this.soldeCarte = soldeCarte;
        this.numeroEtudiant = numeroEtudiant;
        this.role="etudiant";
        		}

    public double getSoldeCarte() {
        return soldeCarte;
    }

    public void setSoldeCarte(double soldeCarte) {
        this.soldeCarte = soldeCarte;
    }

    public String getNumeroEtudiant() {
        return numeroEtudiant;
    }

    public void setNumeroEtudiant(String numeroEtudiant) {
        this.numeroEtudiant = numeroEtudiant;
    }

    public List<Paiement> getPaiements() {
        return paiements;
    }

    public void setPaiements(List<Paiement> paiements) {
        this.paiements = paiements;
    }
}
