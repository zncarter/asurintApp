package com.asurint.zcarter.asurintapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.asurint.zcarter.asurintapp.entity.Website;
import com.asurint.zcarter.asurintapp.repository.WebsiteRepository;
import com.asurint.zcarter.asurintapp.util.SlugUtil;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final WebsiteRepository repository;

	@Autowired
	public DatabaseLoader(WebsiteRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Website(
				"https://www.asurint.com/",
				"Asurint - Verify Every Hire",
				"I hear that they're hiring!",
				SlugUtil.createSlug("Asurint - Verify Every Hire")));
	}
}