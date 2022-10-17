package com.cabanas.cabanas.repository;

import com.cabanas.cabanas.model.usuario;
import com.cabanas.cabanas.repository.crud.UsuarioCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseStatus;

@Repository
public class UsuarioRepository {
    @Autowired
    private UsuarioCrudRepository UCrud;

    public List<usuario> getAll() {
        return (List<usuario>) UCrud.findAll(); 
    }
    
    public Optional<usuario> getUser (int id) {
        return UCrud.findById(id);
    }
    
    public usuario SaveUser (usuario u) {
        return UCrud.save(u);
    }
}
