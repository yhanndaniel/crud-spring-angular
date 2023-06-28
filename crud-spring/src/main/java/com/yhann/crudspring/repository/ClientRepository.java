package com.yhann.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yhann.crudspring.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    
}
