package com.revature.p2.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.io.Serializable;
@Entity
@Getter
@Setter
@NoArgsConstructor
@Embeddable
public class Item implements Serializable {

    @Id
    @Column(name = "item_id", nullable = false)
    private int id;
    private String name;
    private String description;
    private int stock;
    private float price;
    private String imageUrl;

}
