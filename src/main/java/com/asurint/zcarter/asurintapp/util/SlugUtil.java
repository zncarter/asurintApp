package com.asurint.zcarter.asurintapp.util;

import org.apache.commons.lang3.StringUtils;

public class SlugUtil {

	public static String createSlug(String input) {
		String slug = null;
		if (StringUtils.isNotBlank(input)) {
			slug = input;
			slug = StringUtils.lowerCase(slug);
			slug = StringUtils.replace(slug, "&", " and ");
			slug = StringUtils.replace(slug, "@", " at ");
			//slug = StringUtils.replace(slug, "%", " percent ");
			slug = slug.replaceAll("[^a-zA-Z0-9 -]", ""); // remove all non-alphanumric characters
			slug = StringUtils.replace(slug, " ", "-");
			slug = slug.replaceAll("(-)\\1{1,}", "$1");
		}
		return slug;
	}
}
