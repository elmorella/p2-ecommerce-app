package com.revature.p2.controller;

import com.revature.p2.model.AuthCertificate;
import com.revature.p2.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService auth;
    public AuthController(AuthService auth) {
        this.auth = auth;
    }

    @PostMapping("/check")
    public ResponseEntity<Boolean> isValid(@RequestBody AuthCertificate authCertificate){
        Boolean isValid = auth.isValid(authCertificate);
        return new ResponseEntity<>(isValid, HttpStatus.OK);
    }

    @PutMapping("/invalidate")
    public ResponseEntity<AuthCertificate> invalidate(@RequestBody AuthCertificate authCertificate){
        AuthCertificate invalidCertificate = auth.invalidate(authCertificate);
        return new ResponseEntity<>(invalidCertificate, HttpStatus.OK);
    }
}
