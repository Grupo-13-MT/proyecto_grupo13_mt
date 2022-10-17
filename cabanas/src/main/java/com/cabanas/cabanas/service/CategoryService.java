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
        return ur.getCategory(id);
    }

    public Tcategory SaveUser(Tcategory u) {
        if (u.getId() == null) {
            return ur.SaveCategory(u);
        } else {
            Optional<Tcategory> paux = ur.getCategory(u.getId());
            if (paux.isEmpty()) {
                return ur.SaveCategory(u);
            } else {
                return u;
            }
        }
    }
}
