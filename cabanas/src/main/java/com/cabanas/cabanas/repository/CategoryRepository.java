package com.cabanas.cabanas.repository;

import com.cabanas.cabanas.model.Tcategory;
import com.cabanas.cabanas.repository.crud.CategoryCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryRepository {

    @Autowired
    private CategoryCrudRepository crud;

    public List<Tcategory> getAll() {
        return (List<Tcategory>) crud.findAll();
    }

    public Optional<Tcategory> getCategory(int id) {
        return crud.findById(id);
    }

    public Tcategory SaveCategory(Tcategory u) {
        return crud.save(u);
    }
}
