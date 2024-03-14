package com.projet.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projet.app.model.Menu;
import com.projet.app.model.Plat;
import com.projet.app.services.MenuService;
import com.projet.app.services.PlatService;

@RestController
@RequestMapping("/plats")
public class PlatController {
	
	@Autowired
	private PlatService ps;
	@Autowired
	private MenuService ms;
	
	@PostMapping
	public Plat addPlat(@RequestBody Plat plat,@RequestParam Long menuId) {
		Menu menu = ms.getMenuById(menuId);
		if (menu != null) {
			plat.setMenu(menu);
			return ps.addPlat(plat);
		}else {
			return null;
		}
				
	}
	
	@GetMapping
	public List<Plat> getPlats(){
		return ps.getAll();
	}
	
	@GetMapping("/{id}")
	public Plat getPlatById(@PathVariable ("id") Long id) {
		return ps.getPlatById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Plat> update(@PathVariable("id") Long id,@RequestBody Plat plat){
		Plat p=ps.updatePlat(id, plat);
		if(p == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		return ResponseEntity.ok(p);
	}
	
	@DeleteMapping("/{id}")
	public void deletePlat(@PathVariable ("id") Long id) {
		this.ps.deletePlat(id);
	}

}
