package com.cabanas.cabanas.repository;

import com.cabanas.cabanas.model.Tmessage;
import com.cabanas.cabanas.repository.crud.MessageCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MessageRepository {

    @Autowired
    private MessageCrudRepository crud;

    public List<Tmessage> getAll() {
        return (List<Tmessage>) crud.findAll();
    }

    public Optional<Tmessage> getUser(int id) {
        return crud.findById(id);
    }

    public Tmessage SaveUser(Tmessage u) {
        return crud.save(u);
    }
}
