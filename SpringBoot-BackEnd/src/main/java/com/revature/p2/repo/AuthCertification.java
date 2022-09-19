package com.revature.p2.repo;

import com.revature.p2.model.AuthCertificate;
import com.revature.p2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthCertification extends JpaRepository<AuthCertificate, Integer> {
    Optional<AuthCertificate> findAuthCertificateByUser(User user);
}
