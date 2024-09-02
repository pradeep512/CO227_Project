package com.example.MediguardBackEnd.domains;

import lombok.Data;

import java.util.List;

@Data
public class AuthenticationResponseDTO {
    private String accessToken;
    private String tokenType = "Bearer ";
    private Long userId;
    private List<String> roles;

    public AuthenticationResponseDTO(String accessToken, Long userId, List<String> roles) {
        this.accessToken = accessToken;
        this.userId = userId;
        this.roles = roles;
    }
}
