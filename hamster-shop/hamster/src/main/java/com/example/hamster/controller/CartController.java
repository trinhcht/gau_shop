package com.example.hamster.controller;

import com.example.hamster.model.*;
import com.example.hamster.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class CartController {
    @Autowired
    private ICartService iCartService;

    @GetMapping("/list")
    public ResponseEntity<List<Cart>> findByCustomer(@RequestParam(name = "nameAcc") String nameAcc) {
        return new ResponseEntity<>(iCartService.findByNameAcc(nameAcc), HttpStatus.OK);
    }

    @GetMapping("/setQuantity")
    public ResponseEntity<?> setQttPlus(@RequestParam(name = "idCus") Integer idCus,
                                        @RequestParam(name = "idProduct") Integer idProduct,
                                        @RequestParam(name = "quantity") Integer quantity) {
        IdCart idCart = new IdCart(idProduct, idCus);
        Cart cart = iCartService.findById(idCart);
        if (cart.getQuantity() < cart.getProduct().getQuantity()) {
            cart.setQuantity(quantity);
            cart.setPrice(quantity * cart.getProduct().getPrice());
            iCartService.save(cart);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/pay")
    public ResponseEntity<String> pay(@RequestParam(name = "userName") String userName) throws UnsupportedEncodingException {
        String url = iCartService.pay(userName);
        return new ResponseEntity<>(url, HttpStatus.OK);
    }

    @PostMapping("/saveCart")
    public ResponseEntity<?> saveCart(@RequestBody CartDTO cartDTO) {
        iCartService.addCart(cartDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/deleteCart")
    public ResponseEntity<?> deleteCart(@RequestBody IdCart idCart) {
        iCartService.delete(idCart);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
