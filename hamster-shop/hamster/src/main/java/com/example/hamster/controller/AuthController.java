package com.example.hamster.controller;

import com.example.hamster.model.Account;
import com.example.hamster.model.Role;
import com.example.hamster.model.RoleName;
import com.example.hamster.repository.AccountRepository;
import com.example.hamster.repository.CustomerRepository;
import com.example.hamster.repository.RoleRepository;
import com.example.hamster.security.jwt.JwtProvider;
import com.example.hamster.security.request.LogInForm;
import com.example.hamster.security.request.RegisterForm;
import com.example.hamster.security.response.ErrorMessage;
import com.example.hamster.security.response.JwtResponse;
import com.example.hamster.security.response.ResponseMessage;
import com.example.hamster.security.userPrincipal.UserPrinciple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/public")
public class AuthController {
    @Autowired
    AccountRepository accountUserService;
    @Autowired
    RoleRepository roleService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtProvider jwtProvider;
    @Autowired
    CustomerRepository iCustomerService;

    @PostMapping("/register")
    public ResponseEntity<?> signup(@Valid @RequestBody RegisterForm signUpForm) {
        if (accountUserService.existsByName(signUpForm.getUsername())) {
            return new ResponseEntity<>(new ResponseMessage("The username existed !!, Try again"), HttpStatus.OK);
        }
        Account users = new Account(signUpForm.getUsername(), passwordEncoder.encode(signUpForm.getPassword()));
        Set<String> strRoles = signUpForm.getRoles();
        Set<Role> roles = new HashSet<>();
        strRoles.forEach(role -> {
            switch (role) {
                case "admin":
                    Role adminRole = roleService.findByName(RoleName.ADMIN).get();
                    roles.add(adminRole);
                    break;
                default:
                    Role userRole = roleService.findByName(RoleName.USER).get();
                    roles.add(userRole);
            }
        });
        users.setRoleAccount(roles);
        System.out.println(users);
        Account accountUser = accountUserService.save(users);
        if (accountUser != null) {
            return new ResponseEntity<>(new ResponseMessage("Create user success!!!"), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(new ResponseMessage("Create user failed!!!"), HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> login(@Valid @RequestBody LogInForm logInForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<ErrorMessage> errorMessages = new ArrayList<>();
            bindingResult
                    .getFieldErrors()
                    .stream()
                    .forEach(f -> errorMessages.add(new ErrorMessage(f.getField(), f.getDefaultMessage())));
            return new ResponseEntity<>(errorMessages, HttpStatus.BAD_REQUEST);
        }
        Authentication authentication = authenticationManager.authenticate
                (new UsernamePasswordAuthenticationToken(logInForm.getUsername(),
                        logInForm.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.createToken(authentication);
        UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
        return new ResponseEntity<>(new JwtResponse(token, userPrinciple.getUsername(), userPrinciple.getAuthorities()), HttpStatus.OK);
    }
}
