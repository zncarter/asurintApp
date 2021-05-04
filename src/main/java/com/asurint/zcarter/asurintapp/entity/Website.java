package com.asurint.zcarter.asurintapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.UniqueConstraint;
import javax.persistence.Table;

@Entity
@Table(name="website", uniqueConstraints = @UniqueConstraint(columnNames = {"slug"}))
public class Website {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String url;
    private String description;
    private String notes;
    private String slug;
    
    
	public Website() {
		super();
	}
	
	public Website(String url, String description, String notes) {
		super();
		this.url = url;
		this.description = description;
		this.notes = notes;
	}

	public Website(String url, String description, String notes, String slug) {
		this(url, description, notes);
		this.slug = slug;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	
	@Column(unique = true)
	public String getSlug() {
		return slug;
	}
	public void setSlug(String slug) {
		this.slug = slug;
	}
	
	@Override
	public String toString() {
		return "Website [id=" + id + ", url=" + url + ", description=" + description + ", notes=" + notes + ", slug=" + slug + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Website other = (Website) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
}
