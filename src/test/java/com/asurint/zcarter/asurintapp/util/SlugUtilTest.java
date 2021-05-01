package com.asurint.zcarter.asurintapp.util;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.stream.Stream;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

class SlugUtilTest {

	@ParameterizedTest
	@MethodSource("slugTestParams")
	void testCreateSlug(String input, String expected) {
		assertEquals(expected, SlugUtil.createSlug(input));
	}
	
	static Stream<Arguments> slugTestParams() {
		return Stream.of(
			Arguments.of("Verify Every Hire", "verify-every-hire"),
			Arguments.of("Aunt Millie's & Co., Inc.", "aunt-millies-and-co-inc"),
			Arguments.of("Trusted By 99% of Skydivers!", "trusted-by-99-percent-of-skydivers"),
			Arguments.of("Your local hitch-hiking experts", "your-local-hitch-hiking-experts")	
		);
	}
}
