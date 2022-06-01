package com.example.demo.repository;

import com.example.demo.dto.Song;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;




@RepositoryRestResource
@CrossOrigin(origins = {"http://localhost:4200"})
public interface SongRepository extends CrudRepository<Song, Long> {
    
}