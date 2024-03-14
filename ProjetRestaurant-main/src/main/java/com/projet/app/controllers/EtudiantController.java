package com.projet.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projet.app.model.Etudiant;
import com.projet.app.services.EtudiantService;



@RestController
@RequestMapping("/Etudiants")
public class EtudiantController {
	@Autowired
	private EtudiantService es;
	@PostMapping
	public Etudiant addEtudiant(@RequestBody Etudiant etudiant) {
		return es.addEtudiant(etudiant);
	}
	
	@PostMapping("/rechargerCarte")
	public void rechargerCarte(@RequestParam Long id_e, @RequestParam double prixPlat) {
		es.rechargerCarte(id_e, prixPlat);
	}

}
