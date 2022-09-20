package com.revature.p2.service;

import com.revature.p2.exception.UserNotFoundException;
import com.revature.p2.model.AuthCertificate;
import com.revature.p2.model.User;
import com.revature.p2.repo.AuthCertification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthService {
    private final AuthCertification auth;

    @Autowired
    public AuthService(AuthCertification auth){this.auth = auth;}

    public boolean isValid(AuthCertificate certificate){
        AuthCertificate database = auth.findAuthCertificateByUser(certificate.getUser())
                .orElseThrow(() -> new UserNotFoundException("User Certificate not found"));
        return database.isValid();
    }
    public AuthCertificate getCertByUser(User user) {
        return auth.findAuthCertificateByUser(user)
                .orElse(new AuthCertificate());
    }
    public AuthCertificate addNewAuth(AuthCertificate authCertificate){
        return  auth.save(authCertificate);
    }
    public void validate(AuthCertificate certificate){
        certificate.setValid(true);
        auth.save(certificate);
    }
    public AuthCertificate invalidate(AuthCertificate certificate){
        certificate.setValid(false);
        return auth.save(certificate);
    }

}
