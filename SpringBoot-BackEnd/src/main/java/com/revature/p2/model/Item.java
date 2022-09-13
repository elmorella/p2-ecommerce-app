package com.revature.p2.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
@Entity
@Getter
@Setter
@NoArgsConstructor
public class Item implements Serializable {

    @Id
    @Column(nullable = false,unique = true)
    private int id;
    private String name;
    private String description;
    private int stock;
    private float price;
    private String imageUrl;
}
