package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.dto.ArtistaDataDto;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;

@Component("artistaDataService") 
public class ArtistaDataService {
    public List<ArtistaDataDto> retrieveArtistaData() {

        List<ArtistaDataDto> artistaData = new ArrayList<>();

       
        try {
           Connection connection = Jsoup.connect("https://www.last.fm/es/tag/reggaeton/artists");
           
        
            Document webPage=connection.get();
                 
                    Element artistas = webPage.getElementsByClass("big-artist-list").get(0);

               for(Element artista:artistas.getElementsByClass("big-artist-list-item")){
                   
                       String imagen=artista.getElementsByClass("big-artist-list-avatar-desktop").get(0).getElementsByTag("img").get(0).attr("src");
                        String nombre =artista.getElementsByClass("link-block-target").get(0).text();                       
                        artistaData.add(new ArtistaDataDto(nombre, imagen));
                 }

            return artistaData;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    
}
}