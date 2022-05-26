/*
package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.dto.ArtistaDataDto;
import com.example.demo.services.ArtistaDataService;

   
@RestController 
@CrossOrigin(origins = "")
@RequestMapping("")   

public class BuscadorDataController {
    @Autowired
    private ArtistaDataService artistaDataService;  

    @GetMapping("") 
    @CrossOrigin(origins = "")
    public ResponseEntity<List<ArtistaDataDto>> getArtistaData() {
        return new ResponseEntity<List<ArtistaDataDto>>(artistaDataService.retrieveArtistaData(),
                HttpStatus.OK); 
    }

}*/
