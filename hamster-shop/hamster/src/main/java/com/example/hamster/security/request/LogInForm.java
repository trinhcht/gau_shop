package com.example.hamster.security.request;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class LogInForm {
    @NotBlank(message = "Tên đăng nhập không được để trống")
    private String username;
    @NotBlank(message = "Tên đăng nhập không được để trống")
    private String password;

    public LogInForm() {
    }

    public LogInForm(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
