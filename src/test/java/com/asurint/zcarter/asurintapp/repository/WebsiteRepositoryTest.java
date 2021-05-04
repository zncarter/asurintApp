package com.asurint.zcarter.asurintapp.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.asurint.zcarter.asurintapp.entity.Website;
import com.asurint.zcarter.asurintapp.util.SlugUtil;

@DataJpaTest
class WebsiteRepositoryTest {

	@Autowired
	private WebsiteRepository websiteRepository;
	
	private Website createWebsite() {
		String description = "Verify Every Hire";
		return new Website(
				"http://asurint.com",
				description, 
				"Asurint is hiring",
				SlugUtil.createSlug(description));
	}
	
	@Test
	void testFindBySlug() {
		Website website = websiteRepository.save(createWebsite());
		String slug = website.getSlug();
		assertNotNull(slug);
		Website savedWebsite = websiteRepository.findBySlug(slug);
		assertEquals(website.getId(), savedWebsite.getId());
	}
}
