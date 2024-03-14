package com.projet.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projet.app.dto.PaiementDTO;
import com.projet.app.services.PaiementService;

@RestController
@RequestMapping("/Paiements")
public class PaiementController {
	@Autowired
	private PaiementService ps;
	
	
	@PostMapping
	public void effectuerPaiement(@RequestBody PaiementDTO pDTO) {
		ps.effectuerPaiement(pDTO.getEtudiantId(), 
				pDTO.getNumeroCarte(),
				pDTO.getDateExpiration(),
				pDTO.getCodeSecurite(),
				pDTO.getMontant());
	}

}
