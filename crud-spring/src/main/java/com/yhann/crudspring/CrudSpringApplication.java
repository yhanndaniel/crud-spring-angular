package com.yhann.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.yhann.crudspring.model.Client;
import com.yhann.crudspring.repository.ClientRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(ClientRepository clientRepository) {
		return args -> {
			clientRepository.deleteAll();

			Client client = new Client();
			client.setName("Yhann");
			client.setAddress("Qd 111 Conjunto 08 Casa 18");
			client.setPhone("61993005225");
			client.setEmail("yhanndaniel@gmail.com");
			clientRepository.save(client);
		};
	}

}
