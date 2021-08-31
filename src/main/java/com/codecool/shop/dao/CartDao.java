package com.codecool.shop.dao;

import com.codecool.shop.model.Supplier;
import com.codecool.shop.model.Product;
import com.codecool.shop.model.ProductCategory;

import java.util.HashMap;
import java.util.List;

public interface CartDao {

    void add(Product product);
    Product find(int id);
    void remove(int id);

    HashMap<Product, Integer> getAll();

}