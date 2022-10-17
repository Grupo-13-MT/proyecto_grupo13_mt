package com.cabanas.cabanas.service;

import com.cabanas.cabanas.model.Tcategory;
import com.cabanas.cabanas.repository.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository ur;

    public List<Tcategory> getAll() {
        return ur.getAll();
    }

    public Optional<Tcategory> getUser(int id) {
        return ur.getUser(id);
    }

    public Tcategory SaveUser(Tcategory u) {
        if (u.getId() == null) {
            return ur.SaveUser(u);
        } else {
            Optional<Tcategory> paux = ur.getUser(u.getId());
            if (paux.isEmpty()) {
                return ur.SaveUser(u);
            } else {
                return u;
            }
        }
    }
}
