package Projeto.dashboard.de.vendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Projeto.dashboard.de.vendas.dto.SaleDTO;
import Projeto.dashboard.de.vendas.dto.SaleSuccessDTO;
import Projeto.dashboard.de.vendas.dto.SaleSumDTO;
import Projeto.dashboard.de.vendas.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;
	
	
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
		Page<SaleDTO> list = service.findAll(pageable);
		
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/sum-by-saller")
	public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller() {
		List<SaleSumDTO> list = service.amountGroupedBySeller();
		
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/success-by-saller")
	public ResponseEntity<List<SaleSuccessDTO>> successGroupedBySeller() {
		List<SaleSuccessDTO> list = service.successGroupedBySeller();
		
		return ResponseEntity.ok(list);
	}
	
}
