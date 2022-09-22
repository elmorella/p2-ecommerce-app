package com.revature.p2.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Item implements Serializable {

    @Id
    @Column(name = "item_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private int stock;
    private int inCartQuantity;
    private float price;
    private String imageUrl;

    @ManyToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private Set<OrderReceipt> orders = new HashSet<>();
}
