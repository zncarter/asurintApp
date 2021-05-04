package com.asurint.zcarter.asurintapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.asurint.zcarter.asurintapp.repository.WebsiteRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {

	@Autowired
	WebsiteRepository websiteRepository;

	@Override
	public void run(String... strings) throws Exception {
//		websiteRepository.save(new Website(
//				"https://www.asurint.com/",
//				"Asurint - Verify Every Hire",
//				"I hear that they're hiring!",
//				SlugUtil.createSlug("Asurint - Verify Every Hire")));
	}
}