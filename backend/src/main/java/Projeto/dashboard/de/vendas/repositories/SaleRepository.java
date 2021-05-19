package Projeto.dashboard.de.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import Projeto.dashboard.de.vendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
