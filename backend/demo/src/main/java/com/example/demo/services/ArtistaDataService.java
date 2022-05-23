package com.example.demo.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.dto.ArtistaDataDto;
import com.fasterxml.jackson.core.sym.Name;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;

import ch.qos.logback.core.net.SyslogOutputStream;

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

                    /*
            List<Element> contentItem = webPage.getElementsByClass("schedule").get(0).getElementsByClass("content-item");
          

            for (Element row : contentItem) { 
                Element title = row.getElementsByClass("title-section-widget").get(0);
                Element day = title.getElementsByTag("strong").get(0);
                
                String dayOfWeek = day.text();
                String date = title.html();

                List<Element> dailysevent = row.getElementsByClass("dailyevent");
                marcaTableData = new ArrayList<MarcaTableDataDto>();
                
                for (Element dailyevent : dailysevent) { 
                    String dailyday = dailyevent.getElementsByClass("dailyday").get(0).text();
                    String dailycompetition = dailyevent.getElementsByClass("dailycompetition").get(0).text();
                    String dailyteams = dailyevent.getElementsByClass("dailyteams").get(0).getElementsByTag("a").get(0).text();
                    String dailyhour = dailyevent.getElementsByClass("dailyhour").get(0).text();
                    String dailychannel = dailyevent.getElementsByClass("dailychannel").get(0).text();
                    //String type, String hour, String competition, String name, String plataforma)
                    marcaTableData.add(new MarcaTableDataDto(dailyday, dailyhour, dailycompetition, dailyteams, dailychannel));
                }
                marcaData.add(new MarcaDataDto(marcaTableData, date, dayOfWeek));

            }}*/
            return artistaData;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    
}
}