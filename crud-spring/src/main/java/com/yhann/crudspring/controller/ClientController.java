package com.yhann.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yhann.crudspring.model.Client;
import com.yhann.crudspring.repository.ClientRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/clients")
@AllArgsConstructor
public class ClientController {

    private final ClientRepository clientRepository;
    
    @GetMapping
    public List<Client> list() {
        return clientRepository.findAll();
    }
}
