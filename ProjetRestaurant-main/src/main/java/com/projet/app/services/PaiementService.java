package com.projet.app.services;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projet.app.model.Etudiant;
import com.projet.app.model.Menu;
import com.projet.app.model.Paiement;
import com.projet.app.model.Plat;
import com.projet.app.repository.EtudiantRepository;
import com.projet.app.repository.PaiementRepository;

@Service
public class PaiementService {
	
	@Autowired
    private EtudiantRepository etudiantRepository;
	@Autowired
	private MenuService ms;
    @Autowired
    private PaiementRepository paiementRepository;
    @Autowired
	private RestaurantService rs;
    
    @Transactional
    public void effectuerPaiement(Long etudiantId, String numeroCarte, Date dateExpiration, int codeSecurite, double montant) {
      Optional<Etudiant> etud = etudiantRepository.findById(etudiantId);
        if(etud.isPresent()) {
        	
        	Etudiant etudiant=etud.get();
        	
        	Menu menu = ms.getMenuDuJourActuel(); 
	        Plat plat = ms.getPlatFromMenu(menu);
	        
        	if(plat.getQteDisponible()>0) {
        		if(etudiant.getSoldeCarte()>= montant) {
        			double nouveauSolde = etudiant.getSoldeCarte() - montant;
        			
	                etudiant.setSoldeCarte(nouveauSolde);
	                Paiement paiement = new Paiement();
	                paiement.setNumeroCarte(numeroCarte);
	                paiement.setDateExpiration(dateExpiration);
	                paiement.setCodeSecurite(codeSecurite);
	                paiement.setMontant(montant);
	                paiement.setEtudiant(etudiant);
	                etudiant.getPaiements().add(paiement);
	                rs.mettreAjourPlacesDisponibles(1);
	                
	                
	                plat.setQteDisponible(plat.getQteDisponible()-1);
	                paiementRepository.save(paiement);
	                etudiantRepository.save(etudiant);
        		}
        	}
        }
    
    }

}
