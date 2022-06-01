package com.example.demo.dto;

public class ArtistaDataDto {
  
    String name;
    String foto;
    public ArtistaDataDto(String name, String foto) {
        this.name = name;
        this.foto = foto;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public ArtistaDataDto (){}


}
