package com.example.demo.dto;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "Songs")
public class Song {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idbd;
    private int idsong;
    public Song()
    { //CONS VACIO

    }
    public Song(int idsong) {
        this.idsong = idsong;
    }
    public long getIdbd() {
        return idbd;
    }
    public void setIdbd(long idbd) {
        this.idbd = idbd;
    }
    public int getIdsong() {
        return idsong;
    }
    public void setIdsong(int idsong) {
        this.idsong = idsong;
    }

}
