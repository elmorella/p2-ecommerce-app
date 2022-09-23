package com.revature.p2.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

import java.util.*;


@Entity
@Data
@NoArgsConstructor
public class OrderReceipt implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="order_id", nullable = false, updatable = false)
    private int id;
    private Date orderDate;
    private int userId;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(
            name = "order_items",
            joinColumns = @JoinColumn(name = "order_id", nullable = false,updatable = false ),
            inverseJoinColumns = @JoinColumn(name = "item_id", nullable = false,updatable = false)
    )
    private Set<Item> items = new HashSet<>();



    @ElementCollection
    @MapKeyColumn(name="item_id")
    @Column(name="quantity")
    @CollectionTable(name="card_quantity", joinColumns=@JoinColumn(name="order_id"))
    private Map<Integer, Integer> cardQuantity = new HashMap<>();


    @Override
    public String toString() {
        return "OrderReceipt{" +
                "id=" + id +
                ", orderDate=" + orderDate +
                ", userId=" + userId +
                ", items=" + items +
                ", cardQuantity=" + cardQuantity +
                '}';
    }
}
