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
public class User implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false, updatable = false)
    private int id;
    private String name;
    private String username;
    private String email;
    private String password;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private MyAddress myAddress;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userId", cascade = CascadeType.REMOVE)
    private List<OrderReceipt> orderReceipts;
    public User(String name, String username, String email, String password, List<OrderReceipt> orderReceipts) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.orderReceipts = orderReceipts;
    }
}
