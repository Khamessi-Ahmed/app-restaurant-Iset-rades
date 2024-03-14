package com.projet.app.services;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projet.app.model.Menu;
import com.projet.app.model.Plat;
import com.projet.app.repository.MenuRepository;



@Service
public class MenuService {
	private static final Logger logger = LoggerFactory.getLogger(MenuService.class);
	@Autowired
	private MenuRepository mr;
	@Autowired
	private PlatService platService;
	
	public Menu addMenu(Menu menu) {
		return mr.save(menu);
	}
	
	public List<Menu> getAll(){
		return mr.findAll();
	}
	
	public Menu getMenuById(Long id) {
		Optional<Menu> menu= mr.findById(id);
		if(menu.isPresent()) {
			Menu foundMenu = menu.get();
			foundMenu.setPlats(platService.getAllPlatsByMenu(foundMenu));
			return foundMenu;
		}
		return null;
	}
	
	public Menu updateMenu(Long id, Menu menu) {
		
        Menu existingMenu = getMenuById(id);
        existingMenu.setDate(menu.getDate());
        existingMenu.setPlats(menu.getPlats());
        return mr.save(existingMenu);
    }
	
	public void deleteMenu(Long id) {
        Menu menu = getMenuById(id);
        mr.delete(menu);
    }
	
	public Menu getMenuDuJourActuel() {
        
		LocalDate localDate = LocalDate.now();
		Timestamp timestamp = Timestamp.valueOf(localDate.atStartOfDay());
		Menu menu = mr.findByDate(timestamp);
		if (menu != null) {
			logger.info("Le menu du jour actuel a été récupéré avec succès : {}", menu);
	    } else {
	    	logger.warn("Aucun menu n'a été trouvé pour la date actuelle : {}", localDate);
	    }
	    
	    return menu;
    }
	
	public Plat getPlatFromMenu(Menu menu) {
	    
	    if (menu != null && !menu.getPlats().isEmpty()) {
	        
	        for (Plat plat : menu.getPlats()) {
	           
	            if (plat.getQteDisponible() > 0) {
	                return plat; 
	            }
	        }
	        
	    }
	    return null;
	}
	
}
