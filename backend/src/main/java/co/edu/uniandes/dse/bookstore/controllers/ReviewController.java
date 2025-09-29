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
package co.edu.uniandes.dse.bookstore.controllers;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.edu.uniandes.dse.bookstore.dto.ReviewDTO;
import co.edu.uniandes.dse.bookstore.entities.ReviewEntity;
import co.edu.uniandes.dse.bookstore.exceptions.EntityNotFoundException;
import co.edu.uniandes.dse.bookstore.exceptions.IllegalOperationException;
import co.edu.uniandes.dse.bookstore.services.ReviewService;

/**
 * Clase que implementa el recurso "reviews".
 *
 * @author ISIS2603
 * @version 1.0
 */
@RestController
@RequestMapping("/books")
public class ReviewController {

	@Autowired
	private ReviewService reviewService;

	@Autowired
	private ModelMapper modelMapper;

	/**
	 * Crea una nueva reseña con la informacion que se recibe en el cuerpo de la
	 * petición y se regresa un objeto identico con un id auto-generado por la base
	 * de datos.
	 *
	 * @param bookId El ID del libro del cual se le agrega la reseña
	 * @param review {@link ReviewDTO} - La reseña que se desea guardar.
	 * @return JSON {@link ReviewDTO} - La reseña guardada con el atributo id
	 *         autogenerado.
	 */
	@PostMapping(value = "/{bookId}/reviews")
	@ResponseStatus(code = HttpStatus.CREATED)
	public ReviewDTO createReview(@PathVariable Long bookId, @RequestBody ReviewDTO review)
			throws EntityNotFoundException {
		ReviewEntity reviewEnity = modelMapper.map(review, ReviewEntity.class);
		ReviewEntity newReview = reviewService.createReview(bookId, reviewEnity);
		return modelMapper.map(newReview, ReviewDTO.class);
	}

	/**
	 * Busca y devuelve todas las reseñas que existen en un libro.
	 *
	 * @param bookId El ID del libro del cual se buscan las reseñas
	 * @return JSONArray {@link ReviewDTO} - Las reseñas encontradas en el libro. Si
	 *         no hay ninguna retorna una lista vacía.
	 */
	@GetMapping(value = "/{bookId}/reviews")
	@ResponseStatus(code = HttpStatus.OK)
	public List<ReviewDTO> getReviews(@PathVariable Long bookId) throws EntityNotFoundException {
		List<ReviewEntity> reviews = reviewService.getReviews(bookId);
		return modelMapper.map(reviews, new TypeToken<List<ReviewDTO>>() {
		}.getType());
	}

	/**
	 * Busca y devuelve la reseña con el ID recibido en la URL, relativa a un libro.
	 *
	 * @param bookId   El ID del libro del cual se buscan las reseñas
	 * @param reviewId El ID de la reseña que se busca
	 * @return {@link ReviewDTO} - La reseña encontradas en el libro.
	 */
	@GetMapping(value = "/{bookId}/reviews/{reviewId}")
	@ResponseStatus(code = HttpStatus.OK)
	public ReviewDTO getReview(@PathVariable Long bookId, @PathVariable Long reviewId)
			throws EntityNotFoundException {
		ReviewEntity entity = reviewService.getReview(bookId, reviewId);
		return modelMapper.map(entity, ReviewDTO.class);
	}

	/**
	 * Actualiza una reseña con la informacion que se recibe en el cuerpo de la
	 * petición y se regresa el objeto actualizado.
	 *
	 * @param bookId   El ID del libro del cual se guarda la reseña
	 * @param reviewId El ID de la reseña que se va a actualizar
	 * @param review   {@link ReviewDTO} - La reseña que se desea guardar.
	 * @return JSON {@link ReviewDTO} - La reseña actualizada.
	 */
	@PutMapping(value = "/{bookId}/reviews/{reviewsId}")
	@ResponseStatus(code = HttpStatus.OK)
	public ReviewDTO updateReview(@PathVariable Long bookId, @PathVariable("reviewsId") Long reviewId,
			@RequestBody ReviewDTO review) throws EntityNotFoundException {
		ReviewEntity reviewEntity = modelMapper.map(review, ReviewEntity.class);
		ReviewEntity newEntity = reviewService.updateReview(bookId, reviewId, reviewEntity);
		return modelMapper.map(newEntity, ReviewDTO.class);
	}

	/**
     * Borra la reseña con el id asociado recibido en la URL.
     *
     * @param bookId El ID del libro del cual se va a eliminar la reseña.
     * @param reviewId El ID de la reseña que se va a eliminar.
	 * @throws IllegalOperationException 
     * @throws BusinessLogicException {@link BusinessLogicExceptionMapper} -
     */
	@DeleteMapping(value = "/{bookId}/reviews/{reviewId}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void deleteReview(@PathVariable Long bookId, @PathVariable Long reviewId)
			throws EntityNotFoundException, IllegalOperationException {
		reviewService.deleteReview(bookId, reviewId);
	}

}
