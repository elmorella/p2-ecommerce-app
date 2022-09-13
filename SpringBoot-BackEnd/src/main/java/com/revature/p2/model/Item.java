package com.revature.p2.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Item implements Serializable {

    @Id
    @Column(name = "item_id", nullable = false,unique = true)
    private int id;
    private String name;
    private String description;
    private int stock;
    private float price;
    private String imageUrl;
    @ManyToMany(mappedBy = "items")
    private List<OrderReceipt> includedInOrderReceipts;

}
