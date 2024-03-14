package com.projet.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Plat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
private String description;
	
	private String dessert;
	
	private Long qteDisponible;
	
	public Plat(Long id, String description, String dessert, Long qteDisponible, Menu menu) {
		super();
		this.id = id;
		this.description = description;
		this.dessert = dessert;
		this.qteDisponible = qteDisponible;
		this.menu = menu;
	}
	public long setNom() {
		return this.id;
		
	}

	
	
	@ManyToOne
	@JoinColumn(name = "menu_id")
	@JsonIgnore
	private Menu menu;
	
	

}
