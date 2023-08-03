package com.example.gaushop.model;

public class CartDTO {
    String username;
    Integer idPro;
    Integer quantity;

    public CartDTO(String username, Integer idPro, Integer quantity) {
        this.username = username;
        this.idPro = idPro;
        this.quantity = quantity;
    }

    public CartDTO() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getIdPro() {
        return idPro;
    }

    public void setIdPro(Integer idPro) {
        this.idPro = idPro;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
