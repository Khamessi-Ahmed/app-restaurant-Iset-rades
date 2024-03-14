package com.projet.app.dto;

import java.util.Date;

import lombok.Data;
@Data

public class PaiementDTO {
	private Long etudiantId;
    private String numeroCarte;
    private Date dateExpiration;
    private int codeSecurite;
    private double montant;
    private double prixPlat;


}
