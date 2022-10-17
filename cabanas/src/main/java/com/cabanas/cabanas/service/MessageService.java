package com.cabanas.cabanas.service;

import com.cabanas.cabanas.repository.MessageRepository;
import com.cabanas.cabanas.model.Tmessage;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
    @Autowired
    private MessageRepository ur;

    public List<Tmessage> getAll() {
        return ur.getAll();
    }

    public Optional<Tmessage> getUser(int id) {
        return ur.getUser(id);
    }

    public Tmessage SaveUser(Tmessage u) {
        if (u.getId() == null) {
            return ur.SaveUser(u);
        } else {
            Optional<Tmessage> paux = ur.getUser(u.getId());
            if (paux.isEmpty()) {
                return ur.SaveUser(u);
            } else {
                return u;
            }
        }
    }
}
