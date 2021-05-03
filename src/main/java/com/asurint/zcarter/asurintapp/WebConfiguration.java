package com.asurint.zcarter.asurintapp;

import java.io.IOException;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {
	
	private static final String API_PATH = "/api";
	
	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
      // All resources go to where they should go
      registry
        .addResourceHandler("/**/*.css", "/**/*.html", "/**/*.js", "/**/*.jsx", "/**/*.png", "/**/*.map", "/**/*.json")
        .setCachePeriod(0)
        .addResourceLocations("classpath:/public/");

      registry.addResourceHandler("/", "/**")
        .setCachePeriod(0)
        .addResourceLocations("classpath:/public/index.html")
        .resourceChain(true)
        .addResolver(new PathResourceResolver() {

			@Override
			protected Resource getResource(String resourcePath, Resource location) throws IOException {
				if (resourcePath.startsWith(API_PATH) || resourcePath.startsWith(API_PATH.substring(1))) {
					return null;
	            }
				return location.exists() && location.isReadable() ? location : null;
			}
        });
    }
}
