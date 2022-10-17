package com.cabanas.cabanas.service;

import com.cabanas.cabanas.model.usuario;
import com.cabanas.cabanas.repository.UsuarioRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository ur;

    public List<usuario> getAll() {
        return ur.getAll();
    }

    public Optional<usuario> getUser(int id) {
        return ur.getUser(id);
    }

    public usuario SaveUser(usuario u) {
        if (u.getId() == null) {
            return ur.SaveUser(u);
        } else {
            Optional<usuario> paux = ur.getUser(u.getId());
            if (paux.isEmpty()) {
                return ur.SaveUser(u);
            } else {
                return u;
            }
        }
    }
}
