package com.cabanas.cabanas.service;

import com.cabanas.cabanas.model.cabin;
import com.cabanas.cabanas.repository.CabinRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CabinService {

    @Autowired
    private CabinRepository ur;

    public List<cabin> getAll() {
        return ur.getAll();
    }

    public Optional<cabin> getUser(int id) {
        return ur.getUser(id);
    }

    public cabin SaveUser(cabin u) {
        if (u.getId() == null) {
            return ur.SaveUser(u);
        } else {
            Optional<cabin> paux = ur.getUser(u.getId());
            if (paux.isEmpty()) {
                return ur.SaveUser(u);
            } else {
                return u;
            }
        }
    }
}
