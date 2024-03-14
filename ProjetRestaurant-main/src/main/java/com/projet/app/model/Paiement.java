package com.projet.app.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Paiement {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id;
	private String numeroCarte;
    private Date dateExpiration;
    private int codeSecurite;
    private double montant;
    
    @ManyToOne
    @JoinColumn(name = "etudiant_id")
    private Etudiant etudiant;

    
	
}
