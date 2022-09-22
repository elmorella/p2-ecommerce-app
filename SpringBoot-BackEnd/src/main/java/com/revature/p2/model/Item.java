package com.revature.p2.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "orders"})
public class Item implements Serializable {

    @Id
    @Column(name = "item_id", nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private int stock;
    private int inCartQuantity;
    private float price;
    private String imageUrl;

    @ManyToMany(mappedBy = "items", cascade = CascadeType.MERGE)
    private Set<OrderReceipt> orders = new HashSet<>();
}
