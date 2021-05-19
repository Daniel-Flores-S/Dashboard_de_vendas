package Projeto.dashboard.de.vendas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Projeto.dashboard.de.vendas.dto.SaleDTO;
import Projeto.dashboard.de.vendas.entities.Sale;
import Projeto.dashboard.de.vendas.repositories.SaleRepository;
import Projeto.dashboard.de.vendas.repositories.SellerRepository;

@Service
public class SaleService {
	@Autowired
	private SaleRepository repository;
	
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		/*Mudar sellerRepository depois*/
		sellerRepository.findAll();
		Page<Sale> result = repository.findAll(pageable);
		
		return result.map(x -> new SaleDTO(x));
	}
}
