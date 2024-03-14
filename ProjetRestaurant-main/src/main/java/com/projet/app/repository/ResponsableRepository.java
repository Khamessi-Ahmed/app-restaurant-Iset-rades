package com.projet.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.projet.app.model.Responsable;

@Repository
public interface ResponsableRepository extends CrudRepository<Responsable,Long> {

}
