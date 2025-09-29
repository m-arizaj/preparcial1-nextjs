/*
MIT License

Copyright (c) 2021 Universidad de los Andes - ISIS2603

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
package co.edu.uniandes.dse.bookstore.service;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import jakarta.transaction.Transactional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.Import;

import co.edu.uniandes.dse.bookstore.entities.AuthorEntity;
import co.edu.uniandes.dse.bookstore.entities.OrganizationEntity;
import co.edu.uniandes.dse.bookstore.entities.PrizeEntity;
import co.edu.uniandes.dse.bookstore.exceptions.EntityNotFoundException;
import co.edu.uniandes.dse.bookstore.exceptions.IllegalOperationException;
import co.edu.uniandes.dse.bookstore.services.OrganizationService;
import co.edu.uniandes.dse.bookstore.services.PrizeService;
import uk.co.jemos.podam.api.PodamFactory;
import uk.co.jemos.podam.api.PodamFactoryImpl;

/**
 * Pruebas de logica de Prizes
 *
 * @author ISIS2603
 */
@DataJpaTest
@Transactional
@Import({ PrizeService.class, OrganizationService.class })
class PrizeServiceTest {

	@Autowired
	private PrizeService prizeService;

	@Autowired
	private OrganizationService organizationService;

	@Autowired
	private TestEntityManager entityManager;

	private PodamFactory factory = new PodamFactoryImpl();

	private List<OrganizationEntity> organizationList = new ArrayList<>();
	private List<PrizeEntity> prizeList = new ArrayList<PrizeEntity>();

	/**
	 * Configuración inicial de la prueba.
	 */
	@BeforeEach
	void setUp() {
		clearData();
		insertData();
	}

	/**
	 * Limpia las tablas que están implicadas en la prueba.
	 */
	private void clearData() {
		entityManager.getEntityManager().createQuery("delete from PrizeEntity").executeUpdate();
	}

	/**
	 * Inserta los datos iniciales para el correcto funcionamiento de las pruebas.
	 */
	private void insertData() {
		for (int i = 0; i < 3; i++) {
			PrizeEntity entity = factory.manufacturePojo(PrizeEntity.class);
			OrganizationEntity orgEntity = factory.manufacturePojo(OrganizationEntity.class);
			entityManager.persist(orgEntity);
			entity.setOrganization(orgEntity);
			orgEntity.setPrize(entity);
			entityManager.persist(entity);
			prizeList.add(entity);
			organizationList.add(orgEntity);
		}
	}

	/**
	 * Prueba para crear un Prize.
	 *
	 * @throws EntityNotFoundException
	 * @throws IllegalOperationException
	 */
	@Test
	void testCreatePrize() throws IllegalOperationException {
		PrizeEntity newEntity = factory.manufacturePojo(PrizeEntity.class);
		OrganizationEntity newOrgEntity = factory.manufacturePojo(OrganizationEntity.class);

		newOrgEntity = organizationService.createOrganization(newOrgEntity);
		newEntity.setOrganization(newOrgEntity);
		PrizeEntity result = prizeService.createPrize(newEntity);
		assertNotNull(result);
		PrizeEntity entity = entityManager.find(PrizeEntity.class, result.getId());
		assertEquals(newEntity.getId(), entity.getId());
		assertEquals(newEntity.getName(), entity.getName());
		assertEquals(newEntity.getDescription(), entity.getDescription());
		assertEquals(newEntity.getPremiationDate(), entity.getPremiationDate());
	}

	/**
	 * Prueba para crear un Prize con una organización no válida
	 *
	 * @throws IllegalOperationException
	 */
	@Test
	void testCreatePrizeWithNoValidOrganization() {
		assertThrows(IllegalOperationException.class, () -> {
			PrizeEntity newEntity = factory.manufacturePojo(PrizeEntity.class);
			newEntity.setOrganization(null);
			prizeService.createPrize(newEntity);
		});
	}

	/**
	 * Prueba para crear un Prize con una organización no válida
	 *
	 * @throws IllegalOperationException
	 */
	@Test
	void testCreatePrizeWithNoValidOrganization2() {
		assertThrows(IllegalOperationException.class, () -> {
			PrizeEntity newEntity = factory.manufacturePojo(PrizeEntity.class);
			OrganizationEntity newOrgEntity = factory.manufacturePojo(OrganizationEntity.class);
			newOrgEntity.setId(0L);
			newEntity.setOrganization(newOrgEntity);
			prizeService.createPrize(newEntity);
		});
	}

	/**
	 * Prueba para crear un Prize con una organización no válida
	 *
	 * @throws IllegalOperationException
	 */
	@Test
	void testCreatePrizeWithNoValidOrganization3() {
		assertThrows(IllegalOperationException.class, () -> {
			PrizeEntity newEntity = factory.manufacturePojo(PrizeEntity.class);
			newEntity.setOrganization(organizationList.get(0));
			prizeService.createPrize(newEntity);
		});
	}

	/**
	 * Prueba para consultar la lista de Prizes.
	 */
	@Test
	void testGetPrizes() {
		List<PrizeEntity> list = prizeService.getPrizes();
		assertEquals(prizeList.size(), list.size());
		for (PrizeEntity entity : list) {
			boolean found = false;
			for (PrizeEntity storedEntity : prizeList) {
				if (entity.getId().equals(storedEntity.getId())) {
					found = true;
				}
			}
			assertTrue(found);
		}
	}

	/**
	 * Prueba para consultar un Prize.
	 */
	@Test
	void testGetPrize() throws EntityNotFoundException {
		PrizeEntity entity = prizeList.get(0);
		PrizeEntity resultEntity = prizeService.getPrize(entity.getId());
		assertNotNull(resultEntity);
		assertEquals(entity.getName(), resultEntity.getName());
		assertEquals(entity.getId(), resultEntity.getId());
		assertEquals(entity.getDescription(), resultEntity.getDescription());
		assertEquals(entity.getPremiationDate(), resultEntity.getPremiationDate());
	}

	/**
	 * Prueba para consultar un Prize que no existe.
	 */
	@Test
	void testGetInvalidPrize() {
		assertThrows(EntityNotFoundException.class, () -> {
			prizeService.getPrize(0L);
		});
	}

	/**
	 * Prueba para actualizar un Prize.
	 */
	@Test
	void testUpdatePrize() throws EntityNotFoundException {
		PrizeEntity entity = prizeList.get(0);
		PrizeEntity pojoEntity = factory.manufacturePojo(PrizeEntity.class);

		pojoEntity.setId(entity.getId());

		prizeService.updatePrize(entity.getId(), pojoEntity);

		PrizeEntity resp = entityManager.find(PrizeEntity.class, entity.getId());

		assertEquals(pojoEntity.getId(), resp.getId());
		assertEquals(pojoEntity.getName(), resp.getName());
		assertEquals(pojoEntity.getDescription(), resp.getDescription());
		assertEquals(pojoEntity.getPremiationDate(), resp.getPremiationDate());
	}
	
	/**
	 * Prueba para actualizar un Prize que no existe.
	 */
	@Test
	void testUpdateInvalidPrize() {
		assertThrows(EntityNotFoundException.class, ()->{
			PrizeEntity pojoEntity = factory.manufacturePojo(PrizeEntity.class);
			pojoEntity.setId(0L);
			prizeService.updatePrize(0L, pojoEntity);
		});
	}

	/**
	 * Prueba para eliminar un Prize.
	 * @throws EntityNotFoundException 
	 *
	 * @throws IllegalOperationException
	 */
	@Test
	void testDeletePrize() throws EntityNotFoundException, IllegalOperationException {
		prizeService.deletePrize(prizeList.get(0).getId());
		PrizeEntity result = entityManager.find(PrizeEntity.class, prizeList.get(0).getId());
		assertNull(result);
	}
	
	/**
	 * Prueba para eliminar un Prize con un autor.
	 *
	 * @throws IllegalOperationException
	 */
	@Test
	void testDeletePrizeWithAuthor() {
		assertThrows(IllegalOperationException.class, () -> {
			
			AuthorEntity author = factory.manufacturePojo(AuthorEntity.class);
			entityManager.persist(author);
			
			PrizeEntity prizeEntity = prizeList.get(2);
			prizeEntity.setAuthor(author);
			
			prizeService.deletePrize(prizeEntity.getId());
		});
	}

	/**
	 * Prueba para eliminar un Prize que no existe.
	 *
	 * @throws EntityNotFoundException
	 */
	@Test
	void testDeleteInvalidPrize() {
		assertThrows(EntityNotFoundException.class, () -> {
			prizeService.deletePrize(0L);
		});
	}

}
