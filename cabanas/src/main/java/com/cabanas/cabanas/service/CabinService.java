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
        return ur.getCabin(id);
    }

    public cabin SaveUser(cabin u) {
        if (u.getId() == null) {
            return ur.SaveCabin(u);
        } else {
            Optional<cabin> paux = ur.getCabin(u.getId());
            if (paux.isEmpty()) {
                return ur.SaveCabin(u);
            } else {
                return u;
            }
        }
    }
}
