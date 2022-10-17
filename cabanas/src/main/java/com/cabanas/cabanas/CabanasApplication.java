package com.cabanas.cabanas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan(basePackages = {"com.cabanas.cabanas.model"})
@SpringBootApplication
public class CabanasApplication {

	public static void main(String[] args) {
		SpringApplication.run(CabanasApplication.class, args);
	}

}
