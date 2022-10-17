package com.cabanas.cabanas.service;

import com.cabanas.cabanas.model.reservation;
import com.cabanas.cabanas.repository.ReservationRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository ur;

    public List<reservation> getAll() {
        return ur.getAll();
    }

    public Optional<reservation> getUser(int id) {
        return ur.getReservation(id);
    }

    public reservation SaveUser(reservation u) {
        if (u.getId() == null) {
            return ur.SaveReservation(u);
        } else {
            Optional<reservation> paux = ur.getReservation(u.getId());
            if (paux.isEmpty()) {
                return ur.SaveReservation(u);
            } else {
                return u;
            }
        }
    }
}
