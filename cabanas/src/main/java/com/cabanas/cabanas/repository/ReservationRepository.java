package com.cabanas.cabanas.repository;

import com.cabanas.cabanas.model.reservation;
import com.cabanas.cabanas.repository.crud.ReservationCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ReservationRepository {

    @Autowired
    private ReservationCrudRepository crud;

    public List<reservation> getAll() {
        return (List<reservation>) crud.findAll();
    }

    public Optional<reservation> getUser(int id) {
        return crud.findById(id);
    }

    public reservation SaveUser(reservation u) {
        return crud.save(u);
    }
}
