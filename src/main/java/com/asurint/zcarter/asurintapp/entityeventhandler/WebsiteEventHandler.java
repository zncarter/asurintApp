package com.asurint.zcarter.asurintapp.entityeventhandler;

import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import com.asurint.zcarter.asurintapp.entity.Website;
import com.asurint.zcarter.asurintapp.util.SlugUtil;

@Component
@RepositoryEventHandler(Website.class)
public class WebsiteEventHandler {
	
	@HandleBeforeCreate 
	public void handleWebsiteCreate(Website website) {
		String slug = SlugUtil.createSlug(website.getDescription());
		website.setSlug(slug);
	}
}
