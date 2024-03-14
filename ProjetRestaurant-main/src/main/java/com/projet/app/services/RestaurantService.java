package com.projet.app.services;

import org.springframework.stereotype.Service;


@Service
public class RestaurantService {
	
	
	public int getNombrePlacesDisponibles() {
		int nbpDisponible= 100;
		return nbpDisponible;
	}
	
	public void mettreAjourPlacesDisponibles(int nombrePlacesReduites) {
		
		int nouveauNombrePlaces=getNombrePlacesDisponibles()-nombrePlacesReduites;
		if(nouveauNombrePlaces<0) {
			nouveauNombrePlaces=0;
		}
		System.out.println("Nouveau nombre de places disponibles : " + nouveauNombrePlaces);
	}

}
