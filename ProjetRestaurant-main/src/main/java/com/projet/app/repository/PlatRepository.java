package com.projet.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projet.app.model.Menu;
import com.projet.app.model.Plat;


@Repository
public interface PlatRepository extends JpaRepository<Plat, Long>{
	List<Plat> findByMenu(Menu menu);
}
