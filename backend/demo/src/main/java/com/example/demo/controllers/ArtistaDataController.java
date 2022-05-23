package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ArtistaDataDto;
import com.example.demo.services.ArtistaDataService;

@RestController 
@RequestMapping("/artista")   
public class ArtistaDataController {

    @Autowired
    private ArtistaDataService artistaDataService;  

    @GetMapping("data") 
    public ResponseEntity<List<ArtistaDataDto>> getArtistaData() {
        return new ResponseEntity<List<ArtistaDataDto>>(artistaDataService.retrieveArtistaData(),
                HttpStatus.OK); 
    }
}
