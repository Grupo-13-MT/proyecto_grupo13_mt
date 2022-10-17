package com.cabanas.cabanas.repository;

import com.cabanas.cabanas.model.cabin;
import com.cabanas.cabanas.repository.crud.CabinCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CabinRepository {

    @Autowired
    private CabinCrudRepository crud;

    public List<cabin> getAll() {
        return (List<cabin>) crud.findAll();
    }

    public Optional<cabin> getCabin(int id) {
        return crud.findById(id);
    }

    public cabin SaveCabin(cabin u) {
        return crud.save(u);
    }
}
