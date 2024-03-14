package com.projet.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.projet.app.model.Administrateur;

@Repository
public interface AdministrteurResponsable extends CrudRepository<Administrateur, Long>  {

}
