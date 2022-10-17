package com.cabanas.cabanas.service;

import com.cabanas.cabanas.repository.MessageRepository;
import com.cabanas.cabanas.model.messages;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    @Autowired
    private MessageRepository ur;

    public List<messages> getAll() {
        return ur.getAll();
    }

    public Optional<messages> getUser(int id) {
        return ur.getMessage(id);
    }

    public messages SaveUser(messages u) {
        if (u.getId() == null) {
            return ur.SaveMessage(u);
        } else {
            Optional<messages> paux = ur.getMessage(u.getId());
            if (paux.isEmpty()) {
                return ur.SaveMessage(u);
            } else {
                return u;
            }
        }
    }
}
