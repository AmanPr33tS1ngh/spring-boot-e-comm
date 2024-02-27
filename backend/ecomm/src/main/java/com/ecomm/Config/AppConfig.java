package com.ecomm.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.reactive.CorsConfigurationSource;

@Configuration
public class AppConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeHttpRequests(Authorize->Authorize.requestMatchers("/api/").authenticated()
                        .anyRequest().permitAll()).addFilter(null, null).csrf().disable().configurationSource(new CorsConfigurationSource(){

                });
        return null;
    }
}
