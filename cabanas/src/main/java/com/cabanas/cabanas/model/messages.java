package com.cabanas.cabanas.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "message")
public class messages implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String messageText;

    //foraneas: client y cabin
    /*@OneToMany
    @JoinColumn(name = "client")
    private usuario usuario;*/
    @ManyToOne
    @JoinColumn(name = "cabin")
    private cabin cabin;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public cabin getCabin() {
        return cabin;
    }

    public void setCabin(cabin cabin) {
        this.cabin = cabin;
    }

}
