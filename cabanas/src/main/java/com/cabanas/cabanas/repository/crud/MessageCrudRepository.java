package com.cabanas.cabanas.repository.crud;

import com.cabanas.cabanas.model.messages;
import org.springframework.data.repository.CrudRepository;

public interface MessageCrudRepository extends CrudRepository<messages, Integer> {

}
