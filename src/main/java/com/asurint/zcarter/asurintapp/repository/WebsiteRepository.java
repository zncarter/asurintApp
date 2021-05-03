package com.asurint.zcarter.asurintapp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.asurint.zcarter.asurintapp.entity.Website;

@RepositoryRestResource
public interface WebsiteRepository extends CrudRepository<Website, Long> {

	Website findBySlug(@Param("slug") String slug);
}
