package com.cabanas.cabanas.repository;

import com.cabanas.cabanas.model.messages;
import com.cabanas.cabanas.repository.crud.MessageCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MessageRepository {

    @Autowired
    private MessageCrudRepository crud;

    public List<messages> getAll() {
        return (List<messages>) crud.findAll();
    }

    public Optional<messages> getMessage(int id) {
        return crud.findById(id);
    }

    public messages SaveMessage(messages u) {
        return crud.save(u);
    }
}
